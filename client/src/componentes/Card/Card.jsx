import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style.card}>
      <div>
        <Link to={`/${props.id}`}>
          <img
            src={props.background_image}
            alt="imagen"
            className={style.img}
          />
        </Link>
      </div>

      <div className={style.genre}>
        <h3 className={style.name}>{props.name}</h3>
        <span> {props.genres} </span>
        <span>{props.rating}</span>
      </div>
    </div>
  );
};

export default Card;
