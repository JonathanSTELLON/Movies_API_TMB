import React from 'react';
import Card from './Card';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const List = () => {

    const params = useParams();

    const [list, setList] = useState([]);

    const URL = `https://api.themoviedb.org/4/list/${params.id}?page=1&api_key=00fea5657aa3cb22f4915ca3e8c7b486&language=fr`;

    const getMovies = () => {
        Axios
            .get(URL)
            .then(response => setList(response.data.results))
            .catch(error => console.log("err =>", error))
    };

    useEffect(() => {
        getMovies();
    }, [params.id])

  return (
    <div className="container">
        {list.length > 0 ?
            <>
                {list.map((element, index) =>
                    <Card 
                        key={index}
                        id={element.id}
                        title={element.title}
                        rating={element.vote_average}
                        poster={element.poster_path}
                        date={element.release_date}
                    />)
                }
            </>
        :
        <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        }
    </div>
  )
}

export default List;