// import { HTML_TEMPLATE } from "./email-template";
const nodemailer = require("nodemailer");

const HTML_TEMPLATE = (name, email, message) => {
  return `
        <!DOCTYPE html>
    <html>
      <head>
        <title>Dining Plan Invitation</title>
        <style>
          body {
            background-color: #f6f6f6;
            -webkit-font-smoothing: antialiased;
            font-size: 16px;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
          }
          .container {
            text-align: center;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
          .header {
            margin-bottom: 20px;
          }
          .logo {
            border-radius: 50%;
            width: 80px;
            height: 80px;
          }
          .title {
            font-size: 24px;
            margin-top: 10px;
          }
          .content {
            font-weight: normal;
            text-align: center;
            margin-bottom: 20px;
          }
          .footer {
            margin-top: 30px;
            color: #333333;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="title">A Message from Portfolio Website</h1>
          </div>
    
          <div class="content">
            <h2>
              You've recieved a message from <b>${name}</b>, email address is <b>${email}</b>.
            </h2>
          </div>
    
    
          <div class="content">
            <h3> <b>Message:</b> ${message}</h3>
          </div>
    
          <hr />
    
          <div class="footer">
          </div>
        </div>
      </body>
    </html>
        `;
};

const sendMail = async (name, email, subject, message) => {
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.GMAIL_APP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: email,
    subject: subject,
    // text: `Name: ${newMessage.name} \n
    // Email Address: ${newMessage.email} \n
    // Message: ${newMessage.message}`,
    html: HTML_TEMPLATE(name, email, message),
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Error sending email: ", err);
        reject(err);
      } else {
        console.log("Email sent: ", info.response);
        resolve(info);
      }
    });
  });
};

module.exports = { sendMail };
