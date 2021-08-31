import React,{ useState, useContext, useEffect } from 'react';
import NavbarLists from './NavbarList';
import MovieCard from './MovieCard';
import axios from 'axios';
import { MovieContext } from '../contexts/MovieContext';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';
import { SearchEntryContext } from '../contexts/SearchEntryContext';


const List = () => {
    
    const {movieData, setMovieData} = useContext(MovieContext);
    const [currentPage,setCurrentPage] = useState(1);
    const [currentSearchPage,setCurrentSearchPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [searchQuery, setSearchQuery] = useState(' ');
    const [initialFetch, setInitialFetch] = useState(true);
    const {searchEntryData, setSearchEntryData} = useContext(SearchEntryContext);


    const onSearchSubmit = async () => {
        setInitialFetch(false);
        setSearchQuery(searchEntryData);
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5acad45f4b95196d0a0c063716c82c3f&language=en-US&query=${searchEntryData}&page=${currentSearchPage}`);
        const newData = res.data.results;
        if(currentSearchPage == 1) {
            setMovieData(newData);
        }
        setCurrentSearchPage(currentSearchPage + 1);

        
        return res;
    }

    const onSearchSubmitNext = async () => {
        const res = await onSearchSubmit(searchQuery);
        const newData = res.data.results;
        setMovieData([...movieData, ...newData]);
        if(newData.length == 0 || newData.length < 20) {
            setHasMore(false);
        }
        
    }

    const onInitialFetch = async () => {
        setInitialFetch(true);
        const res = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=5acad45f4b95196d0a0c063716c82c3f&language=en-US&page=${currentPage}`);
        const newData = res.data.results;
        console.log(res);
        setMovieData([...movieData, ...newData]);
        if(newData.length == 0 || newData.length < 20) {
            setHasMore(false);
        }
        setCurrentPage(currentPage + 1);
        
    }

    

    
    useEffect( async()=> {
        setCurrentSearchPage(1);
        setMovieData([]);
        const data1 = await onSearchSubmit();
        setMovieData(data1.data.results);
        }
        ,[searchQuery])

    useEffect(onInitialFetch,[]);
   



    
    

    console.log(initialFetch, hasMore)
    
    return(
        <div>
            <NavbarLists onSearchSubmit = {onSearchSubmit} />

            <InfiniteScroll
                dataLength={movieData.length} 
                next={initialFetch ? onInitialFetch : onSearchSubmitNext}
                hasMore={hasMore}
                loader={<Loader />}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                    <b>You have seen it all</b>
                    </p>
                }
            >
                {<div className="ui five cards" style = {{margin: "10px"}}>
                    <MovieCard />
                </div>}
            </InfiniteScroll>

            
        </div>
        
    );
}
export default List;