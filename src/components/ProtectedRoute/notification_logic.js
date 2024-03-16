//npm install express twilio nodemailer body-parser

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const twilio = require('twilio');

const app = express();
const port = 3000;

// Twilio configuration
const twilioAccountSid = 'YOUR_TWILIO_ACCOUNT_SID';
const twilioAuthToken = 'YOUR_TWILIO_AUTH_TOKEN';
const twilioPhoneNumber = 'YOUR_TWILIO_PHONE_NUMBER';
const twilioClient = new twilio(twilioAccountSid, twilioAuthToken);

// Nodemailer configuration
const emailUser = 'YOUR_EMAIL_ADDRESS';
const emailPass = 'YOUR_EMAIL_PASSWORD';
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailUser,
    pass: emailPass
  }
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Example event trigger endpoint
app.post('/trigger-event', (req, res) => {
  // Parse event data from request body
  const { eventType, message, phoneNumber, emailAddress } = req.body;

  // Example event handling
  if (eventType === 'tradeCompleted') {
    // Send SMS notification
    twilioClient.messages
      .create({
        body: message,
        from: twilioPhoneNumber,
        to: phoneNumber
      })
      .then(message => console.log(`SMS sent: ${message.sid}`))
      .catch(error => console.error('Error sending SMS:', error));

    // Send email notification
    const mailOptions = {
      from: emailUser,
      to: emailAddress,
      subject: 'Trade Completed',
      text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    res.status(200).send('Event triggered successfully');
  } else {
    res.status(400).send('Invalid event type');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
