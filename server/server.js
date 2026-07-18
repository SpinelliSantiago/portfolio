import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const { data, error } = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: "spinelli.spi98@gmail.com",
            subject: "Nuevo mensaje desde tu Portfolio",
            html: `
        <h2>Nuevo mensaje</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
        `
        });

    res.status(200).json({
        message: "Thanks for your message!"
    });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

app.listen(3000, () => {
    console.log("Yeah this is working!!!");
});