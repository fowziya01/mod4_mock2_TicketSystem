const Ticket = require("../model/Ticket");
const dotenv = require("dotenv");
dotenv.config();
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: "fowzijunaid@gmail.com",
        pass: "blck zpaa icjk uklp",
    },
});
//emailroute
const mail = async(req, res) => {
    try{
        const mailOptions = {
            from: '"Empower Student Fowziya Begam" <fowzijunaid@gmail.com>', // sender address
            to: "venugopal.burli@masaischool.com,fowzy123@gmail.com", // list of receivers
            subject: "Ticket Booking System", // Subject line
            html: `<p>Thank you for Booking your Bus ticket.</p>`, // html body

        };
        await transporter.sendMail(mailOptions)
    }catch(error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
    }
};

const bookTicket = async (req, res) => {
    try {
        const ticket = await Ticket.create(req.body);
        res.status(202).json({ msg: "Ticket booked successfully" })
    } catch (err) {
        console.error("Error booking ticket:", err.message);
        res.status(400).json({ msg: "Ticket booking failed" });

    }
};



module.exports = {bookTicket,mail};
