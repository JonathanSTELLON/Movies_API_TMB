import React, { useState, useReducer }  from 'react';
import { Link } from 'react-router-dom';
import iconLike from './../img/like.png';

const initialState = {count: 0};

function reducer(state, action){
  switch(action.type){
      case 'like':
          return {count: state.count + 1};
      default:
          throw new Error();
  }
}

const Card = (props) => {

    const BASE_IMG_URL = "https://image.tmdb.org/t/p/original";
    const URL = `/${props.id}`;

    const [state, dispatch] = useReducer(reducer, initialState);

    const [likes, setLikes] = useState([]);

    // const like = (filmId, nbLike) => {
    //   let cloneLikes = [...likes];
    //   cloneLikes.push({
    //     film: filmId,
    //     likes: nbLike
    //   })
    // }

    const likeFilm = [
      { film: props.id, likes: state.count},
    ];
    localStorage.setItem('likeFilm', JSON.stringify(likeFilm));

  return (
    <div className="posterLike">
        <Link className="href" to={URL}>
          <img className="posterHome" src={BASE_IMG_URL + props.poster}></img>
        </Link>
        <div className="like">
            <div onClick={() => dispatch({type: 'like'})}><img src={iconLike} className="icon"></img></div>
            <div className="nbLike">{state.count}</div>
        </div>
    </div>
  )
}

export default Card;