import nodemailer from 'nodemailer';

export default async function handler(req, res) {

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, message } = req.body;


    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'supercellatcoc@gmail.com',
                pass: process.env.EMAIL_APP_PASSWORD,
            },
        });


        const mailOptions = {
            from: 'supercellatcoc@gmail.com',
            to: ['adityaverma9777@gmail.com', 'saumyachaudhary051002@gmail.com'],
            subject: `CodeBendr Contact Form: Message from ${name}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Sent from CodeBendr Website Contact Form</em></p>
        <p><em>Time: ${new Date().toLocaleString()}</em></p>
      `,
            text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Message:
${message}

---
Sent from CodeBendr Website Contact Form
Time: ${new Date().toLocaleString()}
      `,
        };


        await transporter.sendMail(mailOptions);

        return res.status(200).json({
            success: true,
            message: 'Email sent successfully!'
        });
    } catch (error) {
        console.error('Email error:', error);
        return res.status(500).json({
            error: 'Failed to send email. Please try again later.'
        });
    }
}
