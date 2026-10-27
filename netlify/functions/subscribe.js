
import FormData from "form-data";
import Mailgun from "mailgun.js";

export const handler = async (event) => {
  const headers = {
    "Content-Type": "application/json"
  };

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({
        message: "Only POST requests are allowed."
      })
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const email = body.email;

    if (!email || typeof email !== "string") {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          message: "Please enter your email address."
        })
      };
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          message: "Please enter a valid email address."
        })
      };
    }

    const apiKey = process.env.MAILGUN_API_KEY;

    if (!apiKey) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          message: "Email service is not configured."
        })
      };
    }

    const mailgun = new Mailgun(FormData);

    const mg = mailgun.client({
      username: "api",
      key: apiKey
    });

    await mg.messages.create(
      "sandbox3c2c4a1018fc4019969a9fb7ec9c8d49.mailgun.org",
      {
        from: "Mailgun Sandbox <postmaster@sandbox3c2c4a1018fc4019969a9fb7ec9c8d49.mailgun.org>",
        to: [email],
        subject: "Newsletter Subscription",
        text: "Thank you for subscribing to our newsletter!"
      }
    );

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: "Subscription successful! Please check your email."
      })
    };
  } catch (error) {
    console.error("Subscribe error:", error.message);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        message: "Unable to send the email. Please try again later."
      })
    };
  }
};
