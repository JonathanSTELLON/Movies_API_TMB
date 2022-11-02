import Axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TemplateDetail from './TemplateDetail';

const Detail = () => {

    const params = useParams(); //donne l'id dern élemn de l'url

    const [movie, setMovie] = useState([]);

    const URL = `https://api.themoviedb.org/3/movie/${params.idFilm}?api_key=00fea5657aa3cb22f4915ca3e8c7b486&language=fr`;

    const getMovie = () => {
        Axios
            .get(URL)
            .then(response => setMovie(response.data))
            .catch(error => console.log("err =>", error))
    }

    useEffect(() => {
        getMovie();
    }, [])

  return (
    <>
        <div>
            <TemplateDetail 
                id={movie.id}
                title={movie.title}
                tagline={movie.tagline}
                genres={movie.genres}
                desc={movie.overview} 
                rating={movie.vote_average}
                poster={movie.poster_path}
                date={movie.release_date}
                companies={movie.production_companies}
                countries={movie.production_countries}
            />
        </div> 
    </>
    
  )
}

export default Detail;