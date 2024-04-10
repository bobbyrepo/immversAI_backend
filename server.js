require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

require("./database").connect();

const userRoutes = require("./routes/userRoutes");
const ticketRoutes = require("./routes/ticketRoutes");

app.use("/api/users", userRoutes);
app.use("/api/tickets", ticketRoutes);

app.get("/api", (req, res) => {
  res.send("Api Working!");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, function () {
  console.log("Server running on http://localhost:" + PORT);
});

const Ticket = require("./models/ticket");

// Function to check if the tickets collection is empty
async function checkTicketsCollection() {
  const count = await Ticket.countDocuments();
  return count === 0;
}

// Function to add tickets to the collection if it's empty
async function addTicketsIfEmpty(tickets) {
  const isEmpty = await checkTicketsCollection();
  if (isEmpty) {
    try {
      await Ticket.insertMany(tickets);
      console.log("Tickets added successfully.");
    } catch (error) {
      console.error("Error adding tickets:", error);
    }
  } else {
    console.log("Tickets collection is not empty.");
  }
}

// Define the array of tickets to add
const ticketsToAdd = [
  { seatNo: 1, price: 800, booked: false },
  {
    seatNo: 2,
    price: 900,
    booked: true,
    name: "Ramesh",
    email: "Ramesh@gmail.com",
  },
  { seatNo: 3, price: 1000, booked: false },
  {
    seatNo: 4,
    price: 800,
    booked: true,
    name: "Ramesh",
    email: "Ramesh@gmail.com",
  },
  { seatNo: 5, price: 900, booked: false },
  {
    seatNo: 6,
    price: 800,
    booked: true,
    name: "Ramesh",
    email: "Ramesh@gmail.com",
  },
  { seatNo: 7, price: 1000, booked: false },
  { seatNo: 8, price: 900, booked: false },
  { seatNo: 9, price: 1000, booked: false },
  { seatNo: 10, price: 800, booked: false },
  {
    seatNo: 11,
    price: 900,
    booked: true,
    name: "Ramesh",
    email: "Ramesh@gmail.com",
  },
  { seatNo: 12, price: 1000, booked: false },
  {
    seatNo: 13,
    price: 800,
    booked: true,
    name: "Ramesh",
    email: "Ramesh@gmail.com",
  },
  { seatNo: 14, price: 900, booked: false },
  { seatNo: 15, price: 1000, booked: false },
  { seatNo: 16, price: 800, booked: false },
];

// Call the function to add tickets if the collection is empty
addTicketsIfEmpty(ticketsToAdd);
