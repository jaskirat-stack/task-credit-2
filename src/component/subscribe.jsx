
import React, { useState } from "react";

function Subscribe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubscribe(e) {
    e.preventDefault();

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      setMessage(data.message);

      if (response.ok) {
        setEmail("");
      }
    } catch {
      setMessage("Subscription failed. Please try again.");
    }
  }

  return (
    <div className="subscribe">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Enter your email to receive our latest updates.</p>

      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Subscribe</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default Subscribe;
