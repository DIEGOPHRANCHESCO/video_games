const { Router } = require("express");
const videogame = Router();
const { getVideogameById } = require("../Controller/getVideogame.js");
const Genres = require("../models/Genres.js");

videogame.get("/:id", async (req, res) => {
  let { id } = req.params;
  if (id.includes("_")) {
    let bDGame = await videogame.findOne({
      where: {
        id: id,
      },
      include: Genres,
    });
    bDGame = JSON.stringify(bDGame);
    bDGame = JSON.parse(bDGame);
  }
  try {
    let game = await getVideogameById(id);

    res.status(200).send(game);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = videogame;
