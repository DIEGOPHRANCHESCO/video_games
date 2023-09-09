import React from "react";
import style from './Landing.module.css'
import { Link } from "react-router-dom";

const Landing = ( ) =>{
  return(
  
    <div className={style.contenedor} >
    

      <h1>
     {' Proyecto  VIDEOGAME' }
      </h1>


      <div className={style.input} >
      <Link to='/home'>
            <input type='button' value='Home' />
          </Link>
      </div>

          
             

    </div>
    
     
  )
}



export default Landing;