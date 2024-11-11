import Shimmer from "./Shimmer";
import useResMenu from "../Utils/useResMenu";

const RestaurentDetails=()=>{
    const resInfo=useResMenu();
    return  resInfo==null?(<Shimmer/>):(
        <div className="Menu">
            <h1>{resInfo.card.card.info.name}</h1>
            <h1>{resInfo.card.card.info.cuisines.join(", ")}</h1>
        </div>
    );
};
export default RestaurentDetails;