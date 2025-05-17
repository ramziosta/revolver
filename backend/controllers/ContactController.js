import nodemailer from "nodemailer";

const contactController = async (req, res) => {
    const {name, email, phone, subject, message} = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({error: "Missing required fields."});
    }

    const transporter = nodemailer.createTransport({
        service: "gmail", //  use 'smtp.ethereal.email' for testing
        auth: {
            user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS,
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
        res.status(200).json({message: "Message sent successfully."});
    } catch (err) {
        console.error("Email send error:", err);
        res.status(500).json({error: "Failed to send message."});
    }
};

const reservationController = async (req, res) => {
    const {name, email, phone, date, time, guests, message, subject} = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({error: "Missing required fields."});
    }

    const isBooking = !!(date && time && guests);

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL_RECEIVER,
        subject: isBooking
            ? `📅 Booking Request from ${name}`
            : `📨 Inquiry: ${subject || "Reservation"}`,
        html: isBooking
            ? `
      <h3>New Booking Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Guests:</strong> ${guests}</p>
      <p><strong>Details:</strong> ${message}</p>
    `
            : `
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
        res.status(200).json({message: "Message sent successfully."});
    } catch (err) {
        console.error("Email send error:", err);
        res.status(500).json({error: "Failed to send message. Please Call us directly"});
    }
};


const eventInquiryController = async (req, res) => {
    const { name, email, phone, eventType, date, guests, details } = req.body;

    if (!name || !email || !details) {
        return res.status(400).json({ error: "Missing required fields." });
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL_RECEIVER,
        subject: `🍽️ Private Chef / Event Inquiry: ${eventType || "General"}`,
        html: `
      <h3>Private Chef / Event Inquiry</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Event Type:</strong> ${eventType || "N/A"}</p>
      <p><strong>Date:</strong> ${date || "N/A"}</p>
      <p><strong>Guests:</strong> ${guests || "N/A"}</p>
      <p><strong>Details:</strong></p>
      <p>${details}</p>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Inquiry sent successfully." });
    } catch (err) {
        console.error("Email send error:", err);
        res.status(500).json({ error: "Failed to send message." });
    }
};

export {contactController, reservationController, eventInquiryController};