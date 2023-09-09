import axios from "axios";
export const GET_GAME = "GET_GAME";
export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const GAME_DETAIL = "GAME_DETAIL";
export const GET_GENRES = "GET_GENRES";

export const getGames = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/videogames");
    const games = apiData.data;
    dispatch({ type: GET_ALL_VIDEOGAMES, payload: games });
  };
};

export const findgame = (name) => {
  return async function (dispatch) {
    const apiDa = await axios.get(
      `http://localhost:3001/videogames?name=${name}`
    );
    const game = apiDa.data;
    dispatch({ type: GET_GAME, payload: game });
  };
};

export const detailGame = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/videogame/${id}`);
    const gameDetail = apiData.data;
    dispatch({ type: GAME_DETAIL, payload: gameDetail });
  };
};

export const getGenres = () => {
  return async function (dispatch) {
    const gre = await axios.get("http://localhost:3001/genres");
    const genre = gre.data;
    dispatch({ type: GET_GENRES, payload: genre });
  };
};
