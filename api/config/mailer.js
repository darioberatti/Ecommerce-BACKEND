const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "e.retrofutbolclub@gmail.com",
    pass: "dhlo tnof kmmo hscb ",
  },
});

transporter.verify().then(() => console.log("Ready to send email"));

module.exports = transporter
