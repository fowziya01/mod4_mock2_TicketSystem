const express = require("express");
const {bookTicket,mail} = require("../controllers/ticketController");
const router= express.Router();
router.post("/bookticket",bookTicket);
router.get("/mail",mail);
module.exports=router;