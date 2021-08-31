import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../contexts/MovieContext';
import NavbarDetails from './NavbarDetails';

const Details = () => {

    useEffect(() => {
        window.scroll(0,0);
    },[])

    const {movieData} = useContext(MovieContext)
    const {id} = useParams();
    const selMovie = movieData.filter((movie) => {
        return movie.id == id;
    })
    

    return(
        <div>
            <NavbarDetails />
            <div className = "ui container" style = {{marginTop: '50px', float: "left"}}>
                <div className ="ui grid">
                    <div className ="four wide column">
                        <img
                        src={ "https://image.tmdb.org/t/p/original/" + selMovie[0].poster_path  } 
                        className ="ui image"
                        style = {{marginTop: "10px", marginLeft: "10px"}}>
                        </img>     
                    </div>
                    
                    <div className ="nine wide column">
                    <div style = {{margin: "20px"}}>
                        <span className = "ui container">
                            <span style = {{fontWeight : "900", fontSize: "2em"}}>
                                {selMovie[0].title}&nbsp;&nbsp;    
                            </span>
                            <span  style = {{ fontSize: "2em", color: "grey"}}>
                                ({selMovie[0].vote_average})
                            </span>
                        </span>
                        
                        <p className = "ui container" style = {{marginTop:"10px", fontSize: "1.5em", }}>
                            <span>Release Date : {selMovie[0].release_date}</span>
                            {/* <span>|</span>
                            <span>Length</span>
                            <span>|</span>
                            <span>Director</span> */}
                        </p>
                        {/* <span className = "ui container" style = {{marginTop:"10px", fontSize: "1.5em", }}>
                            Cast : 
                            <span>
                                Actor1, Actor 2, ....

                            </span>
                        </span> */}
                        <div className = "ui container" style = {{marginTop:"10px", fontSize: "1.5em", }}>
                           {selMovie[0].overview}
                        </div>
                    </div>
                    
                </div>
            </div>

            </div>
            
            
        </div>
        
    );
}

export default Details;