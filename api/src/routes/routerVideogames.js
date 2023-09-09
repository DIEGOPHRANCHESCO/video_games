
const { Router } = require('express')
const videogames = Router();
const { getAllVideogames } = require('../Controller/getVideogame.js');
const { Videogame, Genres} = require('../db.js')



videogames.get('/', async (req, res) => {
  try{
    let { name } = req.query;
    let games = []; 
    if(name) {
       games = await  getAllVideogames()
      .then((data) => data.filter((game) => game.name.toLowerCase().includes(name.toLowerCase())
      
      )
      );
     
      res.status(200).send(games);
    }else{
      games = await getAllVideogames();
      
      res.status(200).send(games)
    }
  } catch (error) { 
    res.status(400).send(error.message);
    
  }
});





videogames.post('/', async (req, res) => {
  let {    
       
    name,
    rating,
    genres,
    released,
    platforms,
    description,
    background_image,
  } = req.body;


  try {    
 
    let game = await Videogame.create({   
       
      name,
      rating,
      genres,
      released,
      platforms,
      description,
      background_image,
    
    });
   
    let gDb = await Genres.findAll({
      where: {
    
       name: genres,
      },
    });
    game.addGenres(gDb)
    res.status(200).json(game);
  } catch ( error ) {
    res.status(400).send(error.message);
  }
});


module.exports = videogames;

