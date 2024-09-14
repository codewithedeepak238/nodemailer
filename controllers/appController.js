const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {

    const {subject, msg, toUser} = req.body;

    //Create Test Account
    let testAccount = await nodemailer.createTestAccount();

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass
        }
    });

    let message = {
        from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
        to: toUser, // list of receivers
        subject: subject, // Subject line
        text: msg, // plain text body
        html: `<b>${msg}</b>`, // html body
    }

    transporter.sendMail(message).then((info)=>{
        return res.status(201).json({
            msg:"You should receive an email....",
            info: info.messageId,
            preview: nodemailer.getTestMessageUrl(info)
        });
    }).catch(err=>{
        return res.status(500).json({err});
    })
}

module.exports = { sendMail };