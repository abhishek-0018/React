import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurentDetails=()=>{
    const[resInfo,setresInfo]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu=async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4533864&lng=80.2941488&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        {/*
https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.4533864&lng=80.2941488&restaurantId=130182&catalog_qa=undefined&query=Pizza&submitAction=ENTER */}

        const json=await data.json();
        console.log(json.data);
        const specificCard = json.data.cards[3];
        setresInfo(specificCard);
        console.log(resInfo);
    };
    return  resInfo==null?(<Shimmer/>):(
        <div className="Menu">
            <h1>{resInfo.card.card.info.name}</h1>
            <h1>{resInfo.card.card.info.cuisines.join(", ")}</h1>
        </div>
    );
};
export default RestaurentDetails;