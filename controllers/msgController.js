const nodemailer = require("nodemailer");
const Msg = require("../models/msg");

exports.addMsg = async (req, res) => {
  try {
    const msg = new Msg();
    msg.name = req.body.name;
    msg.email = req.body.email;
    msg.message = req.body.message;

    const saveMsg = await msg.save();

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.USER_EMAIL, // generated ethereal user
        pass: process.env.APP_PASSWORD, // generated ethereal password
      },
    });

    let info = await transporter.sendMail({
      from: `${req.body.email}`, // sender address
      to: "dhavalkakadiya01@gmail.com", // list of receivers
      subject: "Hiring For Node Js", // Subject line
      html: `Hey Dhaval I'm ${ req.body.name} ==> ${req.body.message}`, // html body
    });
    console.log(info);

    return res.redirect("/");
  } catch (error) {
    return res.redirect("/");
  }
};
