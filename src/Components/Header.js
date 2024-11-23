import { LOGO_URL } from "../Utils/contants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header=()=>{
    const [btnNameReact,setbtnNameReact] =useState("Login");
    return(
        <div className="flex justify-between shadow-lg bg-gray-100 sm:bg-green-100 lg:bg-red-300">
            <div>
                <img  className="w-56" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 items-center">
                  <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/About">About Us</Link></li>
                    <li className="px-4"><Link to="/Contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/Grocery">Grocery</Link></li>
                    <li className="px-4"><Link to="/Cart">Cart</Link></li>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
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