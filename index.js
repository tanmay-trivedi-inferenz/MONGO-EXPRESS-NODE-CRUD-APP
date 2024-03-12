const express = require('express')
const mongoose = require('mongoose');
const app = express()
const Product = require('./models/product.model.js')
const productRoute = require("./routes/product.route.js");

app.use(express.json()) // middleware para permit
app.use(express.urlencoded({ extended: false })) 

// Routes
app.use("/api/products", productRoute)

// Health Endpoint
app.get('/health', (req, res) => {
  res.send("Green and Up")
})

// Connection to database
mongoose
  .connect(
    "mongodb://localhost:27017/backenddb"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
