import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const NavbarDetails = () => {
    return(
        <div className = "ui container fluid fixed top sticky">
            <div className="ui inverted menu">
                <div className="left menu">
                    <h3 className = "ui header" style = {{margin: "10px", color: "white"}}>Movie Details</h3>
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

export default NavbarDetails;