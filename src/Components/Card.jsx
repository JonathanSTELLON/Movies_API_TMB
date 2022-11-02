import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {

    const BASE_IMG_URL = "https://image.tmdb.org/t/p/original";
    const URL = `/${props.id}`;

  return (
    <div>
        <Link className="href" to={URL}>
          <img className="posterHome" src={BASE_IMG_URL + props.poster}></img>
        </Link>
    </div>
  )
}

export default Card;