const express = require("express");
const { getNotes } = require("../controllers/noteController");

const router = express.Router();

router.route("/").get(getNotes);
// router.route("/create").post();
// router.route("/:id").get().delete().put();

// router.get("/api/notes" , getNotes);

module.exports = router;