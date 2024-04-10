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
    // const { price, creatorName, creatorID } = req.body;
    // try {
    //   const newTicket = new Ticket({ price, creatorName, creatorID });
    //   await newTicket.save();
    //   res.status(201).json(newTicket);
    // } catch (error) {
    //   res.status(400).json({ message: error.message });
    // }
  },

  async updateTicket(req, res) {
    const { id } = req.params;
    const { email, name } = req.body;
    try {
      const ticket = await Ticket.findById(id);
      if (!ticket) return res.status(404).json({ message: "Ticket not found" });

      let updateFields = {};

      if (ticket.booked) {
        if (ticket.email == email) {
          updateFields = { booked: false, email: null, name: null };
        }
      } else {
        updateFields = { booked: true, email, name };
      }

      const updatedTicket = await Ticket.findByIdAndUpdate(id, updateFields, {
        new: true,
      });

      res.json(updatedTicket);
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
