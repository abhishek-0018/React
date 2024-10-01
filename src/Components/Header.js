import { LOGO_URL } from "../Utils/contants";
import { useState } from "react";
const Header=()=>{
    // let btnname="Login";
    const [btnNameReact,setbtnNameReact] =useState("Login");
    return(
        <div className="header">
            <div className="logo-container">
                <img  className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                  <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
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