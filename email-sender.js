const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mohamedalimefteh.fl@gmail.com', 
        pass: 'your-email-password', 
    }
});

const mailOptions = {
    from: 'mohamedalimefteh.fl@gmail.com',  
    to: 'recipient-email@gmail.com', 
    subject: 'Test Email from Node.js', 
    text: 'Hello! This is a test email sent from Node.js using Nodemailer.', 
};
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent successfully:', info.response);
    }
});

