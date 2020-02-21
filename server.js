// Dependencies
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;

// Initialize Express
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// for serving static assets
if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Define any API routes here
//app.use(routes);

// Sending all other requests to the React App
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// App listen
app.listen(PORT, () => {
    console.log(`🌎 ==> Backend server now on port ${PORT}!`);
});