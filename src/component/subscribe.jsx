import React, {useState} from "react";
function Subscribe() {
  const [email,setemail] = useState("");
  const [message,setmessage] = useState("");

  async function handleSubscribe(e) {
    e.preventDefault();
    setmessage(" sending ");

    try {
      const response = await fetch("http://localhost:3000/subscribe",{
        method : "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      }
    );
    const data = await response.json();
    if(!response.ok){
      throw new Error(data.message);
    }
    setmessage(data.message);
    setemail("");
    } catch (error) {
      setmessage(error.message || "something went wrong");
    }

  
  }
  return(
    <section className="subscribe-section">

    <form onSubmit={handleSubscribe}>
      <h2>SIGN UP FOR OUR DAILY INSIDER</h2>
      <input type="email"
      placeholder ="Enter your email"
      value={email}
      onChange={(e) => setemail(e.target.value)}
      required />
      <button type="submit">Subscribe</button>
      <p>{message}</p>

    </form>
    </section>


  );


}
export default Subscribe;