import { useEffect,useState } from "react";
const useSpecificResMenu=(API)=>{
    const [resInfo,setresInfo]=useState([]);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const data=await fetch(API);
        const json =await data.json();
        const specificCard = json.data.cards.slice(3);
        setresInfo(specificCard);
    }
    return resInfo;
}

export default useSpecificResMenu;