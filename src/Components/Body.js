import resObj from "../Utils/mockdata";
import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body=()=>{

    const [lofres,setlofres]=useState([]);
    const [searchText,setsearchText]=useState("");


    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4533864&lng=80.2941488&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

        const json=await data.json();
        const specificCard = json.data.cards.slice(3,12);
        console.log(specificCard);
        setlofres(specificCard);
        console.log(lofres)
    };

    if(lofres.length==0){
       return <Shimmer/>
    }
    return(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}>
                    </input>
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
            }}>Top Rated Restaurent
                </button></div>
            <div className="res-container">
                {/* <RestaurentCard resName="Meghana Foods" Cuisines="Biryani, North Indian, Asian"/> */}
                {
                    // lofres.map((res)=>(
                        
                    //     <RestaurentCard key={res.card.card.info.id} resData={res}/>
                    // ))
                    // for(let i=3;i<=9;i++){
                    //    <RestaurentCard key={lofres[3].card.card.info.id} resData={lofres}/>
                    // }
                    lofres.map((res) => (
                      <RestaurentCard key={res.card.card.info.id} resData={res} />
                    ))
                }
            </div>
        </div>
    );
};

export default Body;