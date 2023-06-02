const router = require("express").Router();
const { Students } = require("../db"); //import
const Campuses = require("../db/models/campuses");

// GET api/campuses, and eager load include Students
router.get("/", async (req, res) => {
  try {
    const campuses = await Campuses.findAll({ include: Students });
    res.json(campuses);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// GET api/campuses/:campusId
router.get("/:campusId", async (req, res, next) => {
  try {
    const campus = await Campuses.findByPk(req.params.campusId);
    res.json(campus);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// POST /api/campuses
router.post("/", async (req, res, next) => {
  try {
    console.log("Request Payload:", req.body); // Log the request payload

    const newCampus = await Campuses.create(req.body);
    res.status(201).send(newCampus);
  } catch (error) {
    next(error);
  }
});

// DELETE api/campuses/:campusId
router.delete("/:campusId", async (req, res, next) => {
  try {
    const campus = await Campuses.findByPk(req.params.campusId);
    await campus.destroy();
    res.send(campus);
  } catch (error) {
    next(error);
  }
});

// PUT /api/campuses/:campusId
router.put("/:campusId", async (req, res, next) => {
  try {
    const campus = await Campuses.findByPk(req.params.campusId);
    res.send(await campus.update(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;