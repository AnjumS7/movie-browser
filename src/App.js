import React from 'react';
import List from './components/List';
import MovieCard from './components/MovieCard';
import MovieContextProvider from './contexts/MovieContext';
import { BrowserRouter, Route } from 'react-router-dom';
import Details from './components/Details'
import NavbarLists from './components/NavbarList';
import SearchEntryContextProvider from './contexts/SearchEntryContext';

const App = () => {
  return(
    <BrowserRouter>
      
        <MovieContextProvider>
            <SearchEntryContextProvider>
              <Route path = '/' component = {List} exact></Route>
              <Route path = '/NavbarLists' component = {NavbarLists}></Route>
            </SearchEntryContextProvider>
            <Route path = '/MovieCard/' component = {MovieCard}></Route>
            <Route path = '/Details/:id' component = {Details}></Route>
        </MovieContextProvider>
        
      
    </BrowserRouter>
  );
}
export default App;
