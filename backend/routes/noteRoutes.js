const express = require("express");
const {
  getNotes,
  createNote,
  getNoteById
} = require("../controllers/noteController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getNotes);
router.route("/create").post(protect, createNote);
router.route("/:id").get(getNoteById);
// .delete().put();

// router.get("/api/notes" , getNotes);

module.exports = router;