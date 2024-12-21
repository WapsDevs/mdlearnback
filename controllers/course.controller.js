const courseModel = require("../models/course.model");

// Controller pour récupérer tous les cours
module.exports.getAllCourses = async (req, res) => {
  try {
    const courses = await courseModel.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller pour créer un nouveau cours
module.exports.createCourse = async (req, res) => {
  const { titre, resume, difficulte, niveau, matier, content } = req.body;

  try {
    const newCourse = await courseModel.create({
      titre,
      resume,
      difficulte,
      niveau,
      matier,
      content,
    });

    res.status(201).json(newCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller pour récupérer un cours par ID
module.exports.getCourseById = async (req, res) => {
  try {
    const course = await courseModel.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Cours non trouvé" });
    }
    res.status(200).json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller pour supprimer un cours par ID
module.exports.deleteCourse = async (req, res) => {
  try {
    const course = await courseModel.findByIdAndDelete(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Cours non trouvé" });
    }
    res.status(200).json({ message: "Cours supprimé avec succès" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
