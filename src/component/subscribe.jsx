
import React, { useState } from "react";

function Subscribe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubscribe(e) {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        "/.netlify/functions/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Subscription failed."
        );
      }

      setMessage(data.message || "Subscribed successfully!");
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);

      setMessage(
        error.message ||
        "Unable to subscribe. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="subscribe">
      <h2>Subscribe to Our Newsletter</h2>

      <p>Enter your email to receive our latest updates.</p>

      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {message && <p role="status">{message}</p>}
    </div>
  );
}

export default Subscribe;
