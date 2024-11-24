import { useEffect, useState } from "react";
import SpecificRestaurentsCard from "./SpecificRestaurentsCard";
import Shimmer from "../Shimmer";
import useSpecificResMenu from "../../Utils/useSpecificResMenu";
import { MENU_API_PIZZA } from "../../Utils/contants";
const Pizza=()=>{
    const [lofresp,setlofresp]=useState([]);
    const [searchText,setsearchText]=useState("");
    const rp= useSpecificResMenu(MENU_API_PIZZA);
    useEffect(()=>{
        setlofresp(rp);
    },[rp]);

    if(lofresp.length==0){
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
                         const filteredres=lofresp.filter((res) => res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()));
                         setlofresp(filteredres);
                    }}>Search</button>

                </div>
                <div className="m-4 p-4">
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                    const resObj1=lofresp.filter(
                    (res)=>res.card.card.info.avgRating>4
                    );
                    setlofresp(resObj1);
                }}>Top Rated Restaurent</button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    lofresp.map((res) => (
                      <SpecificRestaurentsCard key={res.card.card.info.id} resData={res} />
                    ))
                }
            </div>
        </div>
    );
}

export default Pizza;