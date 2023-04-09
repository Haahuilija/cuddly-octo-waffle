require('dotenv').config({ path: './sendgrid.env' });
const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

const app = express();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// use body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route to handle form submission
app.post('/send-email', (req, res) => {
  const { nimi, sahkoposti, teksti, aikataulu, muuta } = req.body;

  const msg = {
    to: 'saul.koskinen@gmail.com', // Specify the email address to which you want to send the email
    from: 'saul.koskinen@gmail.com', // Specify the email address from which you want to send the email
    subject: 'New Contact Request from Your Website',
    html: `<p><strong>Nimi:</strong> ${nimi}</p>
           <p><strong>Sähköpostiosoite:</strong> ${sahkoposti}</p>
           <p><strong>Teksti:</strong> ${teksti}</p>
           <p><strong>Aikataulu:</strong> ${aikataulu}</p>
           <p><strong>Muuta:</strong> ${muuta}</p>`,
  };

  // Send email using SendGrid API
  sgMail.send(msg)
    .then(() => {
      res.status(200).json({ message: 'Email sent successfully!' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'An error occurred while sending the email' });
    });
});

// Start server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
  console.log('SENDGRID_API_KEY:', process.env.SENDGRID_API_KEY);
});