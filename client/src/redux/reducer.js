import {
  GET_ALL_VIDEOGAMES,
  GAME_DETAIL,
  GET_GAME,
  GET_GENRES,
} from "./actions";

const initialState = {
  games: [],
  detail: {},
  genress: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VIDEOGAMES:
      return { ...state, games: action.payload };

    case GET_GAME:
      return { ...state, games: action.payload };

    case GAME_DETAIL:
      return { ...state, detail: action.payload };

    case GET_GENRES:
      return { ...state, genress: action.payload };

    default:
      return { ...state };
  }
};

export default rootReducer;
