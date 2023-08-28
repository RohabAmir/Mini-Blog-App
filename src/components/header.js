import React from "react";
import { Link } from "react-router-dom";

import './header.css';

const Header = () =>{
    return(
        <div className="header">
            <h2 className="logo"><i><strong>My-Blog!</strong></i></h2>
            <ul className="menu">
                <li><button className="menu-btn"><Link to='/'>Home</Link></button></li>
                <li><button className="menu-btn"><Link to='new'>Add Post</Link></button></li>
            </ul>
        </div>
    );
}
export default Header;