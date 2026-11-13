const express = require("express");
const helmet = require("helmet");
const app = express();
const cors = require("cors");
const PORT = 8080;

// ROUTES
const todoRoutes = require("./routes/todo.routes");

// MIDDLEWARE
app.use(cors());
app.use(helmet());
app.use(express.json());

// Adding routes
app.use("/todo", todoRoutes);

app.listen(PORT, () => {
  console.log("Server running on http://127.0.0.1:" + PORT);
});
