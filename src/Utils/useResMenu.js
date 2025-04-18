import { useEffect,useState } from "react";
import { MENU_API } from "./contants";
const useResMenu=()=>{
    const [resInfo,setresInfo]=useState([]);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const data=await fetch(MENU_API);
        const json =await data.json();
        setresInfo(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return resInfo;
}

export default useResMenu;
