import resObj from "../Utils/mockdata";
import RestaurentCard from "./RestaurentCard";
import { useState } from "react";
const Body=()=>{

    const [lofres,setlofres]=useState(resObj);
    return(
        <div className="body">
            <div className="filter"><button className="filter-btn" onClick={()=>{
               const resObj1=lofres.filter(
                    (res)=>res.info.avgRating>4.5
                );
                setlofres(resObj1);
            }}>Top Rated Restaurent
                </button></div>
            <div className="res-container">
                {/* <RestaurentCard resName="Meghana Foods" Cuisines="Biryani, North Indian, Asian"/> */}
                {
                    lofres.map((res)=>(
                        <RestaurentCard key={res.info.id} resData={res}/>
                    ))
                }
              
            </div>
        </div>
    );
};

export default Body;