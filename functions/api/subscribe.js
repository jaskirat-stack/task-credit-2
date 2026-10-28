
export async function onRequestPost({ request, env }) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (
      !env.MAILGUN_API_KEY ||
      !env.MAILGUN_DOMAIN ||
      !env.MAILGUN_LIST_ADDRESS
    ) {
      return Response.json(
        { message: "Server configuration is missing." },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://api.mailgun.net/v3/lists/${encodeURIComponent(
        env.MAILGUN_LIST_ADDRESS
      )}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${btoa(
            `api:${env.MAILGUN_API_KEY}`
          )}`,
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          address: email.trim(),
          subscribed: "yes",
          upsert: "yes"
        })
      }
    );

    if (!response.ok) {
      console.error("Mailgun request failed:", response.status);

      return Response.json(
        { message: "Subscription failed. Please try again." },
        { status: 502 }
      );
    }

    return Response.json({
      message: "Thank you for subscribing!"
    });
  } catch (error) {
    console.error("Subscription error:", error);

    return Response.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
