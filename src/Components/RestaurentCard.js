import { CDN_URL } from "../Utils/contants";
const styleCard={
    backgroundColor:"#f0f0f0",
};
const RestaurentCard=(props)=>{
    const {resData}=props;
    return(
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src={CDN_URL+resData.info.cloudinaryImageId}></img>
            {/* <h3>{props.resName}</h3>
            <h2>{props.Cuisines}</h2> */}
            <h3>{resData.info.name}</h3>
        <h3>{resData.info.cuisines.join(", ")}</h3>
        <h3>{resData.info.avgRating} stars</h3>
        <h4>{resData.info.costForTwo}</h4>
        </div>
    );
};
export default RestaurentCard;