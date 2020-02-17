const router = require("express").Router();
const bacheloretteController = require("../../controllers/gameController");

router.route("/")
    .get(bacheloretteController.findAll);

module.exports = router;