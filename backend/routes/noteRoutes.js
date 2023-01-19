const express = require("express");
const {
  getNotes,
  createNote,
  getNoteById,
  UpdateNote
} = require("../controllers/noteController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getNotes);
router.route("/create").post(protect, createNote);
router.route("/:id").get(getNoteById).put(protect, UpdateNote);
// .delete();

// router.get("/api/notes" , getNotes);

module.exports = router;