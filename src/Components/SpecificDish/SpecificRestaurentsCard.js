import { CDN_URL } from "../../Utils/contants";
const SpecificRestaurentsCard=(props)=>{
    const {resData}=props;
    return(
        <div className="m-4 p-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg w-[290px] h-[250px]" src={CDN_URL+resData.card.card.info.cloudinaryImageId}></img>
            <h3 className="font-bold py-4 text-lg">{resData.card.card.info.name}</h3>
        <h3>{resData.card.card.info.cuisines.join(", ")}</h3>
        <h3>{resData.card.card.info.avgRating} stars</h3>
        <h4>{resData.card.card.info.costForTwo}</h4>
        </div>
    );
};

export default SpecificRestaurentsCard;