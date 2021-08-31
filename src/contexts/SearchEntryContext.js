import React, {useState, createContext} from 'react';

export const SearchEntryContext = createContext();

const SearchEntryContextProvider = (props) => {
    let [searchEntryData, setSearchEntryData]= useState(" ");

    return(
        <SearchEntryContext.Provider value = {{searchEntryData, setSearchEntryData}}>
            {props.children}

        </SearchEntryContext.Provider>
    );


};

export default SearchEntryContextProvider;