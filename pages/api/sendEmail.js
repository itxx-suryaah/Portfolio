const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email" });
      } else {
        console.log("Email sent:", info.response);
        res.status(200).json({ message: "Email sent successfully" });
      }
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
