const express = require("express");
const { getNotes } = require("../controllers/noteController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getNotes);
// router.route("/create").post();
// router.route("/:id").get().delete().put();

// router.get("/api/notes" , getNotes);

module.exports = router;