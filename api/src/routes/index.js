const { Router } = require("express");
const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogames = require("./RouterVideogames");
const videogame = require("./RouterVideogame");
const genres = require("./RouterGenres");


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogames", videogames);
router.use("/videogame", videogame);
router.use("/genres", genres);

module.exports = router;
