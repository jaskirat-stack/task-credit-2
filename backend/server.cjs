const express = require("express");
const cors = require("cors");
const FormData = require("form-data");
const Mailgun = require("mailgun.js");
require("dotenv").config({path:__dirname + "/.env"});

const app = express();
const PORT = 3000;
app.use(cors({origin: "http://localhost:5173"}))
app.use(express.json());

const mailgun = new Mailgun(FormData);
const apiKey = process.env.MAILGUN_API_KEY;
const mg = apiKey? mailgun.client({username:"api",key:apiKey,}) :null;

app.post("/subscribe", async function (req,res){
  console.log("Subscribe request is recieved :",req.body);
  try{
    const email = req.body?.email;
    if(!email || typeof email !== "string"){
      return res.status(400).json({
        message : "Please enter your email address.",

      });
    }
      const emailPattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)){
         return res.status(400).json({
          message: "Please enter a valid email address.",
         });
      }
      if (!mg) {
        console.error("MAILGUN_API_KEY is missing from the .env file.");
        return res.status(500).json({
        message: "Email service is not configured. Please try again later.",
      });
    }
    const data = await mg.messages.create(
      "sandbox3c2c4a1018fc4019969a9fb7ec9c8d49.mailgun.org",
      {
        from:
          "Mailgun Sandbox <postmaster@sandbox3c2c4a1018fc4019969a9fb7ec9c8d49.mailgun.org>",
        to: [email],
        subject: "Newsletter Subscription",
        text:
          "Thank you for subscribing to our newsletter!",
      }
    );
    console.log("Mailgun response:", data);
    return res.status(200).json({
      message: "Subscription successful! Please check your email.",
    });
  } catch (error) {
    console.error("Subscribe error:", error);
    return res.status(500).json({
      message: "Unable to send the email. Please try again later.",
    });
  }
});
app.use(function (req, res) {
  res.status(404).json({
    message: "Route not found.",
  });
});
app.listen(PORT, function () {
  console.log(`Server is running on http://localhost:${PORT}`);
});









   