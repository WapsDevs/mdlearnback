const express = require("express");
const {
  getAllCourses,
  createCourse,
  getCourseById,
  deleteCourse,
} = require("../controllers/course.controller");

const router = express.Router(); // Utilisation correcte de Router()

router.get("/", getAllCourses);
router.post("/", createCourse);
router.get("/cours/:id", getCourseById);
router.delete("/:id", deleteCourse);

module.exports = router; // N'oubliez pas d'exporter le routeur
