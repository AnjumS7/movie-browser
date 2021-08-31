import React,{useContext,useEffect} from 'react';
import { Link} from 'react-router-dom';
import { MovieContext } from '../contexts/MovieContext';

let MovieCard = () => {
    
    
    const {movieData,setMovieData} = useContext(MovieContext)
    const movies = movieData;
    return(
        movies.map((movie) => {
            return(
                <Link to = {`/Details/${movie.id}`} className="ui card">
                <div className="image">
                    <img src= { "https://image.tmdb.org/t/p/original/" + movie.poster_path  }/>
                </div>
                <div className="content">
                    <div className="header">
                        {movie.title}
                        <span className="meta" style = {{float: "right"}}>
                            ({movie.vote_average})
                        </span>
                    </div>
                    <div className="description">
                        {movie.overview}
                    </div>
                </div>
            </Link>
    
            )
        })

    )
    
    
    
};

export default MovieCard;