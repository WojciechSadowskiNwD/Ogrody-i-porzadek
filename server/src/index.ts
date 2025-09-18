import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import nodemailer from "nodemailer";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
  })
);

app.use(express.json({ limit: "10kb" }));

app.use(
  rateLimit({
    windowMs: 60_000,
    max: 20,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    minVersion: "TLSv1.2",
  },
  logger: true,
  debug: true,
});

transporter
  .verify()
  .then(() => console.log("SMTP OK ✅"))
  .catch((err) => {
    console.error("SMTP FAIL ❌", err?.name, err?.code, err?.message);
  });

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.post("/api/test-email", async (_req, res) => {
  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: process.env.MAIL_TO,
      subject: "Test (Ogrody i Porządek)",
      text: "To jest testowa wiadomość z endpointu testowego.",
    });
    return res.json({ ok: true });
  } catch (e) {
    const err = e as { name?: string; code?: string; message?: string };
    console.error("TEST FAIL ❌", err?.name, err?.code, err?.message);
    return res.status(500).json({ error: "Test email failed" });
  }
});

app.post("/api/contact", async (req, res) => {
  try {
    const {
      userName,
      userEmail,
      userPhone,
      txtArea,
      creatingGarden,
      landscaping,
      cleaning,
      cutting,
    } = req.body ?? {};

    // walidate input
    if (
      typeof userName !== "string" ||
      typeof userEmail !== "string" ||
      typeof userPhone !== "string"
    ) {
      return res.status(400).json({ error: "Invalid payload" });
    }

    const services =
      [
        creatingGarden && "Zakładanie ogrodu",
        landscaping && "Pielęgnacja zieleni",
        cleaning && "Usługi sprzątające",
        cutting && "Roboty koszące",
      ]
        .filter(Boolean)
        .join(", ") || "—";

    const text = [
      `Imię/Nazwa: ${userName}`,
      `E-mail: ${userEmail}`,
      `Telefon: ${userPhone}`,
      `Usługi: ${services}`,
      "",
      "Wiadomość:",
      (txtArea ?? "—").toString(),
    ].join("\n");

    const html = `
      <h2>Nowe zgłoszenie z formularza</h2>
      <p><b>Imię/Nazwa:</b> ${userName}</p>
      <p><b>E-mail:</b> ${userEmail}</p>
      <p><b>Telefon:</b> ${userPhone}</p>
      <p><b>Usługi:</b> ${services}</p>
      <p><b>Wiadomość:</b><br/>${(txtArea ?? "—")
        .toString()
        .replace(/\n/g, "<br/>")}</p>
    `;

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: process.env.MAIL_TO || "wojciechnwd@gmail.com",
      replyTo: userEmail,
      subject: "Nowe zgłoszenie z formularza",
      text,
      html,
    });

    return res.json({ ok: true });
  } catch (e) {
    const err = e as { name?: string; code?: string; message?: string };
    console.error("SEND FAIL ❌", err?.name, err?.code, err?.message);
    return res.status(500).json({ error: "Email send failed" });
  }
});

// Start server
const port = Number(process.env.PORT || 3001);
app.listen(port, () => console.log(`API listening on :${port}`));