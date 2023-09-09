import axios from "axios";
import { useEffect, useState } from "react";

import style from "./Form.module.css";

const Form = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    platforms: '',
    background_image: '',
    released: '',
    rating: '',
    genres:'',
  });

  const [error, setError] = useState({});

  const validations = (form) => {
    const error = {};
    
    if (!form.name) {
      error.name = 'Name is required';
    }
    if (!form.description) {
      error.description = 'Description is required';
    }
    if (!form.released) {
      error.released = 'Released is required';
    }
    if (!form.genres) {
      error.genres = 'Genres is required';
    }
    if (!form.image) {
      error.image = 'Image is required';
    }
    if (!form.platforms) {
      error.platforms = 'Platforms is required';
    }
    if (!form.rating) {
      error.rating = 'Rating is required';
    }
    return error;
  };
  useEffect(() => {
    setError(validations(form));
  }, [form]);
  const submitHandler = (event) => {
    axios.post("http://localhost:3001/videogames",form)
      .then((res) => alert('NEW VIDEOGAME!!'))
      .catch((res) => alert('ERROR'))
      setError(validations(form))
  };

  const changeHandler = (even) => {
    const property = even.target.name;
    const value = even.target.value;
    setForm({ ...form, [property]: value });
  };
  return (
    <div className={style.contenedor}>
      <div className={style.formulario}>
        <form onSubmit={submitHandler}>
        <div>
            <label htmlFor='name'>Name: </label>
            <input
              className={style.name}
              type="text"
              value={form.name}
              onChange={changeHandler}
              name="name"
            />
            {error.name && <p>{error.name}</p>}
          </div>
          <div>
            <label htmlFor='descriptio'>Description: </label>
            <input
              className={style.description}
              type='text'
              value={form.description}
              onChange={changeHandler}
              name='description'
            />
            {error.description && <p>{error.description}</p>}
          </div>
          <div>
            <label htmlFor='released'>Released: </label>
            <input
              className={style.released}
              type='text'
              value={form.released}
              onChange={changeHandler}
              name='released'
            />
            {error.released && <p>{error.released}</p>}
          </div>
          <div>
            <label htmlFor='genres'>Genres: </label>
            <input
              className={style.genres}
              type='text'
              value={form.genres}
              onChange={changeHandler}
              name='genres'
            />
            {error.genres && <p>{error.genres}</p>}
          </div>
          <div>
            <label htmlFor='image'>image: </label>
            <input
              className={style.image}
              type='text'
              value={form.image}
              onChange={changeHandler}
              name='image'
            />
            {error.image && <p>{error.image}</p>}
          </div>
          <div>
            <label htmlFor='rating'>Rating: </label>
            <input
              className={style.rating}
              type='text'
              value={form.rating}
              onChange={changeHandler}
              name='rating'
            />
            {error.rating && <p>{error.rating}</p>}
          </div>
          <div>
            <label htmlFor='platform'>Platforms: </label>
            <input
              className={style.platforms}
              type='text'
              value={form.platforms}
              onChange={changeHandler}
              name='platforms'
            />
            {error.platforms && <p>{error.platforms}</p>}
          </div>
           

          <button className={style.boton} type="submit">
            Listo
          </button>
        </form>
      </div>
    </div>
    
  );
};

export default Form;

