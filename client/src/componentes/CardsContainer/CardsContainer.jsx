import React from "react";

import Card from "../Card/Card";
import style from './CardsContainer.module.css'
import {  useSelector } from "react-redux";





const CardsContainer = () =>{
  // objetivo es traer de  useSelector(state=>state.users)
  const games =  useSelector(state=>state.games)
return (
  <>
  <div className={style.imagen} >
    
      <div className={style.container} >
    {
      games.map(game=>{

        return <Card
        id={game.id}
        key={game.id}
        name={game.name}
        genres={game.genres}
        rating={game.rating}
        platforms={game.platforms}
        background_image={game.background_image}
        

        />
      } )
     }
    </div>

    
  </div>
  </>
)
}

export default CardsContainer;