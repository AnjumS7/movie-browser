import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    let [movieData, setMovieData]= useState([]);

    return(
        <MovieContext.Provider value = {{movieData, setMovieData}}>
            {props.children}

        </MovieContext.Provider>
    );


};

export default MovieContextProvider;