import nodemailer from "nodemailer";

const contactController = async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields." });
    }

    const transporter = nodemailer.createTransport({
        service: "gmail", //  use 'smtp.ethereal.email' for testing
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL_RECEIVER,
        subject: `New Inquiry: ${subject || "General"}`,
        html: `
      <h3>New Message from ${name}</h3>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
   <p><strong>Subject:</strong> ${subject || "N/A"}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Message sent successfully." });
    } catch (err) {
        console.error("Email send error:", err);
        res.status(500).json({ error: "Failed to send message." });
    }
};

export default contactController;