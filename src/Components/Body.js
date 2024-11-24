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
        <div>
            <div className="flex">
                <div className="m-4 p-4">

                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}></input>
                    
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                         const filteredres=lofres.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                         setlofres(filteredres);
                    }}>Search</button>
                </div>

                <div className="m-4 p-4">
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                    const resObj1=lofres.filter(
                    (res)=>res.info.avgRating>4.4
                    );
                    setlofres(resObj1);
                }}>Top Rated Restaurent</button>
                </div>
            </div>

            <div className="flex flex-wrap">
                {
                    lofres.map((res) => (
                      <RestaurentCard key={res.info.id} resData={res} />
                    ))
                }
            </div>
        </div>
    );
};

export default Body;
