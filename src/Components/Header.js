import { LOGO_URL } from "../Utils/contants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header=()=>{
    const [btnNameReact,setbtnNameReact] =useState("Login");
    return(
        <div className="header">
            <div className="logo-container">
                <img  className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                  <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About Us</Link></li>
                    <li><Link to="/Contact">Contact Us</Link></li>
                    <li><Link to="/Cart">Cart</Link></li>
                    <button className="login-btn" onClick={()=>{
                        if(btnNameReact=="Login"){
                            setbtnNameReact("Logout");}
                            else{
                                setbtnNameReact("Login");
                            }}}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;