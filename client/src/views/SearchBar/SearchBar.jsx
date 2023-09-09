import React  from "react";
import {useDispatch, useSelector} from 'react-redux'
import  {findgame} from '../../redux/actions'
import style from './SearchBar.module.css'



function SearchBar(){
 useSelector(state => state.games)
 const dispatch = useDispatch();
 const handlerOnsearch = (event) => {
  
  dispatch(findgame(event.target.value));

 }
 
 return(
  <>
  <nav>
    <div className={style.input}>
      <label>Search Videogame: </label>
      <input type='text'
      id='name'
      autoComplete="off"
      placeholder='Game Name...'
      onChange={(e) => handlerOnsearch(e)} />
     <button type='submit'>Buscar</button>
    </div>
  </nav>
  </>
 );
}


export default SearchBar;