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
        const specificCard = json.data.cards.slice(3);
        setresInfo(specificCard);
    }
    return resInfo;
}

export default useResMenu;

