import React from "react"; // importing REACT from node_modules
import ReactDOM  from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import RestaurentCard from "./Components/RestaurentCard";

const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};

const r=ReactDOM.createRoot(document.getElementById("root2"));
r.render(<AppLayout />);