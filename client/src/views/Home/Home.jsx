import SearchBar from "../SearchBar/SearchBar";
import CardsContainer from "../../componentes/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGames } from "../../redux/actions";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);
  return (
    <>
      <div className={style.home}>
        <div className={style.search}>
          <SearchBar  />
          </div>        
        <CardsContainer />
      </div>
    </>
  );
};
export default Home;
