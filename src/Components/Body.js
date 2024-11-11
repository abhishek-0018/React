import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useronlineStatus from "../Utils/userOnlineStatus";
import useResMenu from "../Utils/useResMenu";
const Body=()=>{

    const [lofres,setlofres]=useState([]);
    const [searchText,setsearchText]=useState("");
    const r= useResMenu();
    const onlineStatus=useronlineStatus();

    useEffect(()=>{
        setlofres(r);
    },[r]);


    if(onlineStatus==false){
        return (
            <h1>Looks like you are Offline</h1>
        )
    }

    if(lofres.length==0){
       return <Shimmer/>
    }


    return(
        <div className="body">

            <div className="filter">
                <div className="search">
                    
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}></input>
                    
                    <button onClick={()=>{
                         const filteredres=lofres.filter((res) => res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()));
                         setlofres(filteredres);
                    }}>Search</button>

                </div>

                <button className="filter-btn" onClick={()=>{
                    const resObj1=lofres.filter(
                    (res)=>res.card.card.info.avgRating>4
                    );
                    setlofres(resObj1);
                }}>Top Rated Restaurent</button>

            </div>
            <div className="res-container">
                {
                    lofres.map((res) => (
                      <RestaurentCard key={res.card.card.info.id} resData={res} />
                    ))
                }
            </div>
        </div>
    );
};

export default Body;
