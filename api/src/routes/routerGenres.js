const { Router } = require("express");
const genres = Router();
const { getApiGenres } = require("../Controller/getVideogame.js");
const { Genres } = require("../db.js");

genres.get("/", async (req, res) => {
  try {
    let genres = await getApiGenres();

    genres.forEach(async (genre) => {
      return await Genres.findOrCreate({
        where: {
          name: genre,
        },
      });
    });

    genres = await Genres.findAll();
    res.status(200).send(genres);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = genres;
