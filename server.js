import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "manuelpiresluis@gmail.com",
      subject: `📩 New portfolio message: ${subject}`,
      html: `
  <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; padding: 20px;">
    <h2 style="color: #2c3e50;">📩 Novo contato do portfólio</h2>
    
    <p><strong style="color: #34495e;">Nome:</strong> ${name}</p>
    <p><strong style="color: #34495e;">Email:</strong> ${email}</p>
    
    <p>
      <strong style="color: #34495e;">Assunto:</strong> 
      <span style="background-color: #f1c40f; color: #2c3e50; padding: 4px 8px; border-radius: 4px; font-weight: bold;">
        ${subject}
      </span>
    </p>
    
    <p><strong style="color: #34495e;">Mensagem:</strong></p>
    <p style="background-color: #ecf0f1; padding: 10px; border-radius: 5px;">
      ${message.replace(/\n/g, "<br>")}
    </p>
    
    <hr style="margin: 20px 0; border: none; border-top: 1px solid #ccc;">
    
    <p style="color: gray; font-size: 0.9em; text-align: center;">
      Esta mensagem foi enviada a partir do formulário de contato do seu portfólio.
    </p>
  </div>
`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Error sending email." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
