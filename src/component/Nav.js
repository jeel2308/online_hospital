import React from "react";
import {Link} from "react-router-dom";
import "../css/nav.css";


function Nav(){
    return (
        <div className="navbar">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
        </div>
    );
}

export default Nav;