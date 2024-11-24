import { Link } from "react-router-dom";
const Specificdish=()=>{
    return (
        <div>
           <ul className="flex p-4 m-4 items-center">
           <Link to="/Pizza"> <button className="px-4  bg-green-100 m-4 rounded-lg">Pizza</button></Link>
           <Link to="/Biryani"> <button className="px-4  bg-green-100 m-4 rounded-lg">Biryani</button></Link>
           <Link to="/Chinese"> <button className="px-4  bg-green-100 m-4 rounded-lg">Chinese</button></Link>      
                </ul>
        </div>
    )
}
export default Specificdish;