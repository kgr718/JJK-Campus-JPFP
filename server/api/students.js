const router = require("express").Router();
const Students = require("../db/models/Students");

router.get("/", async (req, res) => {
    try{
     res.send(await Students.findAll());
    }catch(error) {
        console.log(error);
    }
});
router.get("/:studentId", async (req, res, next) => {
    try{
        const student = await Students.findByPk(req.params.studentId);
        res.json(student);
    }catch (error){
        next(error);
    }
});

router.post("/", async (req, res, next) => {
    try {
      const newStudent = await Students.create(req.body);
      res.status(201).send(newStudent);
    } catch (error) {
      next(error);
    }
  });
  
  
  router.delete("/:studentId", async (req, res, next) => {
    try {
      const student = await Students.findByPk(req.params.studentId);
      await student.destroy();
      res.send(student);
    } catch (error) {
      next(error);
    }
  });
  
 
  router.put("/:studentId", async (req, res, next) => {
    try {
      const student = await Students.findByPk(req.params.studentId);
      res.send(await student.update(req.body));
    } catch (error) {
      console.log(error);
      next(error);
    }
  });
  
  module.exports = router;