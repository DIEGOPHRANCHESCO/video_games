import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGenres } from "../../redux/actions";




function Genresfil() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genress);

  

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);



  const changeHandler = (event) => {
    const value = event.targe.value;
    dispatch(getGenres(value));
  };

  

  return (
    <div>
      <select onChange={changeHandler} defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disabled>
          Genre
        </option>
        <option value="All"> All Genres </option>
        {genres.map((genre, id) => {
          return (
            <option value={genre.name} key={id}>
              {genre.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Genresfil;
