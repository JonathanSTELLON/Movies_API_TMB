import React from 'react';

const TemplateDetail = (props) => {

    const BASE_IMG_URL = "https://image.tmdb.org/t/p/original";

  return (
    <article className="article">
        <div className="picArticle">
            <img className="poster" src={BASE_IMG_URL + props.poster}></img>
        </div>
        <div className="detailArticle">
            <h3 className="detailTitle">{props.title}</h3>
            <small className="tagline">"{props.tagline}"</small>
            <div className="genres">
              {props.genres?.map(element =>
                <small className="genre" key={element.name}>#{element.name}</small>
              )}
            </div>
            <p className="desc">Synopsis : {props.desc}</p>
            <div className="companies">Compagnies de production : 
              {props.companies?.map(element =>
                <small key={element.name}> {element.name}  </small>
              )}
            </div>
            <div className="companies">Pays : 
              {props.countries?.map(element =>
                <small key={element.name}> {element.name}  </small>
              )}
            </div>
            <p className="movieDate">Date de sortie : {props.date}</p>
            <p className="rating">Note des fans : {props.rating}/10</p>
        </div>
    </article>
  )
}

export default TemplateDetail