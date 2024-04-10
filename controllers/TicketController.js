// controllers/TicketController.js
const Ticket = require("../models/ticket");

module.exports = {
  async getAllTickets(req, res) {
    try {
      const tickets = await Ticket.find();
      res.json(tickets);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getTicketById(req, res) {
    const { id } = req.params;
    try {
      const ticket = await Ticket.findById(id);
      if (!ticket) return res.status(404).json({ message: "Ticket not found" });
      res.json(ticket);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async createTicket(req, res) {
    const { price, bookedBy, createdBy } = req.body;
    try {
      const newTicket = new Ticket({ price, bookedBy, createdBy });
      await newTicket.save();
      res.status(201).json(newTicket);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async updateTicket(req, res) {
    const { id } = req.params;
    const { bookedBy } = req.body;
    try {
      const ticket = await Ticket.findByIdAndUpdate(
        id,
        { booked: true, bookedBy: bookedBy },
        { new: true }
      );
      if (!ticket) return res.status(404).json({ message: "Ticket not found" });
      res.json(ticket);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async deleteTicket(req, res) {
    const { id } = req.params;
    try {
      const ticket = await Ticket.findByIdAndDelete(id);
      if (!ticket) return res.status(404).json({ message: "Ticket not found" });
      res.json({ message: "Ticket deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
