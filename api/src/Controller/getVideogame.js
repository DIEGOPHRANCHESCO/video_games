const axios = require("axios");
const { Videogame, Genres } = require("../db.js");
const { YOU_API_KEY } = process.env;




const getAllVideogames = async () => {
  let urls = [];
  let api = [];

  for (let i = 1; i <= 6; i++) {
    urls.push(`https://api.rawg.io/api/games?key=${YOU_API_KEY}&page=${i}`);
  }

  api = urls.map((link) => {
    return axios
      .get(link)
      .then((response1) => response1.data)
      .then((response2) => response2.results)
      .then((response3) => {
        return response3.map((response4) => ({
          id: response4.id,
          name: response4.name,
          description: response4.description,
          rating: response4.rating,
          platforms: response4.platforms.map((e) => e.platform.name),
          releaseDate: response4.released,
          background_image: response4.background_image,
          genres: response4.genres.map((genre) => genre.name),
        }));
      });
  });


  let databaseVideogames = await Videogame.findAll({
    include: {
      model: Genres,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });


    return Promise.all(api)
    .then((response) => response.flat())
    .then((response) => [...response, ...databaseVideogames])
    .catch((error) => new Error(error));
};



const getVideogameById = (id) => {
  return axios
    .get(`https://api.rawg.io/api/games/${id}?key=${YOU_API_KEY}`)
    .then((response) => response.data)
    .then((response1) => ({
      id: response1.id,
      name: response1.name,
      background_image: response1.background_image,
      description: response1.description,
      released: response1.released,
      rating: response1.rating,
      platforms: response1.platforms.map((e) => e.platform.name),
      genres: response1.genres.map((genre) => genre.name),
    }))
    .catch((error) => new Error(error));
};



const getApiGenres = () => {
  return axios
    .get(`https://api.rawg.io/api/genres?key=${YOU_API_KEY}`)
    .then((response) => response.data.results.map((e) => e.name))
    .catch((error) => new Error(error));
};



module.exports = { getAllVideogames, getApiGenres, getVideogameById };
