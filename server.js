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
