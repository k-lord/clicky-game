// Dependencies
const express = require("express");
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

// Initialize Express
const app = express();

// Database configuration
const databaseUrl = "Clicky-Game";
const collections = ["bachelorettes"];

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// for serving static assets
if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// MongoDB
//const db = mongojs(databaseUrl, collections);
mongoose.connect(process.env.MONDODB_URI || "mongodb://localhost/Clicky-Game")

// Define any API routes here
app.use(routes);

// Sending all other requests to the React App
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// 
app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});