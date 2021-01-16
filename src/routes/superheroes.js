const { Router } = require("express");
const validator = require("express-joi-validation").createValidator({});

const router = Router();

const superheroeSchema = require("../validators/superheroe").schema;

const superheroeController = require("../controllers/superheroe");

/* GET superheroe list */
router.get("/prev", async (req, res) => {
  try {
    const superheroesListToReturn = await superheroeController.getPrevSearched();

    res.status(200).send(superheroesListToReturn);
  } catch (e) {
    console.error(e);
    res.status(400).send({ error: e.message });
  }
});

/* GET superheroe by name */
router.get("/search/:name", validator.params(superheroeSchema), async (req, res) => {
  try {
    const superheroeToReturn = await superheroeController.findByName(req.params.name);

    res.status(200).send(superheroeToReturn);
  } catch (e) {
    console.error(e);
    res.status(400).send({ error: e.message });
  }
});

module.exports = router;
