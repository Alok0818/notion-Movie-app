const express = require("express");
const Movies = require("../Modals/MoviesModal");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    console.log(req.body);
    const data = await Movies.create(req.body);
    return res.send(data);
  } catch (error) {
    return res.send(500).send({ message: error.message });
  }
});

router.get("", async (req, res) => {
  try {
    const data = await Movies.find().lean().exec();
    console.log(data);
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});


router.get("/id/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const data = await Movies.findById(req.params.id).lean().exec();
    console.log(data);
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const data = await Movies.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    console.log(data);
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await Movies.findByIdAndDelete(req.params.id).lean().exec();
    console.log(data);
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});

module.exports = router;
