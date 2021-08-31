import React, {useContext,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { SearchEntryContext } from '../contexts/SearchEntryContext';


const NavbarLists = (props) => {

    const {searchEntryData, setSearchEntryData} = useContext(SearchEntryContext);
    
    const inputChange = (e) => {
        setSearchEntryData(e.target.value)
    
    }
    
    const submtitForm =(e) => {
        e.preventDefault();
        props.onSearchSubmit();
    
    }
   


    return(
        
            <div className = "ui container fluid fixed top sticky">
                
                    <div className="ui inverted menu">
                        <div className="left menu">
                            <form className = "ui form" style = {{marginLeft: "10px"}}onSubmit = {submtitForm}>
                                <div className = "field">
                                    <div className="ui icon input">
                                        <input type="text" placeholder="Search here" 
                                        onChange = {inputChange} value = {searchEntryData} 
                                        />
                                       <Link to = " " onClick = {submtitForm}>
                                           <i className = "search icon" 
                                              style = {{marginTop: "10px", fontSize: "1.5em" }} 
                                            />
                                        </Link> 
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className = "right menu">
                                <Link to = " " onClick = {() => {window.location.href = "/"}} >
                                    <div className = 'item'>
                                        <i className="home icon"></i>
                                    </div>
                                </Link>
                        </div>
                    </div>
                

            </div>
            
        
    );
};

export default NavbarLists;