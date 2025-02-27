const mongoose =require("mongoose");
//schema
const ticketSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    dateOfTravel:{type:Date, default:Date.now()},
    modeOfTravel:{enum: ["rail","bus"]},
    perHeadPrice: {type:Number},
    from: {type:String},
    to: {type:String},
    numberOfPassengers:{type:Number},
    totalPrice: {type:Number}
});

    // pre-save middlewrae to perform auto-calculation
ticketSchema.pre('save',function(next)
{
  this.totalPrice = this.perHeadPrice * this.numberOfPassengers  ;
  next();
}
);
//model
const Ticket =mongoose.model("Ticket", ticketSchema);
 module.exports=Ticket;
 



