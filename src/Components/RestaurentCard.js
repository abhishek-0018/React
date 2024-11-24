import { CDN_URL } from "../Utils/contants";
const RestaurentCard=(props)=>{
    const {resData}=props;
    return(
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg h-[200px] w-[250px]" src={CDN_URL+resData.info.cloudinaryImageId}></img>
            {/* <h3>{props.resName}</h3>
            <h2>{props.Cuisines}</h2> */}
            <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
        <h3>{resData.info.cuisines.join(", ")}</h3>
        <h3>{resData.info.avgRating} stars</h3>
        <h4>{resData.info.costForTwo}</h4>
        </div>
    );
};
export default RestaurentCard;