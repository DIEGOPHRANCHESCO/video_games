import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { detailGame } from "../../redux/actions";

import style from "./Detail.module.css";
function Detail  ()  {
  const { id } = useParams;
  const dispatch = useDispatch();

  const detail = useSelector((state) => state.detail);
  console.log(detail);
  useEffect(() => {
    dispatch(detailGame(id));
  }, [dispatch, id]);

  return (
    <div className={style.contenedor}>
      <div className={style.img}>
        <img src={detail.background_image} alt="error" />
      </div>

      <div className={style.title}></div>
      {detail.name &&
      detail.description &&
      detail.genres &&
      detail.platforms ? (
        <div>
          {  
            <p>
              <strong>Name</strong>: {detail.name}
            </p>
          }
          {<p>{detail.description.replace(/(<([^>]+)>)/gi, "")}</p>}
          {
            <p>
              <strong>Genres</strong>: {`${detail.genres.join(", ")}`}
            </p>
          }
          <strong>Released:</strong>: {detail.released}
          {
            <p>
              <strong>Platforms</strong>:{" "}
              {`${
                typeof DataTransferItemList.platforms === "string"
                  ? detail.platforms
                  : detail.platforms.join(", ")
              }`}
            </p>
          }
          <strong>Rating</strong>: {detail.rating}
        </div>
      ) : (
        <h1>MOMEN PLEASE...</h1>
      )}

      <Link to="/home">
        <input type="button" value="Home" />
      </Link>
    </div>
  );
};

export default Detail;
