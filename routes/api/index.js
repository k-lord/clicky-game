const router = require("express").Router();
const bacheloretteRoutes = require("./bachelorettes");

// Bachelorette routes
router.use("/bachelorettes", bacheloretteRoutes);

module.exports = router;