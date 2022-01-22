const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
require("dotenv").config();

let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const registerEmail = async (useremail, user) => {
  try {
    const emailToken = user.generateRegisterToken();

    let mailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "Waves Guitars",
        link: `${process.env.EMAIL_MAIL_URL}`,
      },
    });
    const email = {
      body: {
        name: useremail,
        intro: "Welcome to Waves! We're very excited to have you on board.",
        action: {
          instructions: "To get validate your account, please click here:",
          button: {
            color: "#1a73e8",
            text: "Validate your account",
            link: `${process.env.SITE_DOMAIN}verification?t=${emailToken}`,
          },
        },
        outro:
          "Need help, or have questions? Just reply to this email, and we'd love to help.",
      },
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  transporter,
  registerEmail,
};