const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
  },
  booked: {
    type: Boolean,
    default: false,
  },
  bookedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  creatorName: {
    type: String,
    required: true,
  },
  creatorID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
