import { Link } from "react-router-dom";
const Specificdish=()=>{
    return (
        <div>
           <h1 className="text-4xl ml-[70px] mt-[50px]">Are you craving for</h1>
           <ul className="flex p-4 m-4 items-center">
           <Link to="/Pizza"> <button className="px-4 bg-red-300 sm:bg-green-300 lg:bg-gray-300 m-4 rounded-lg">Pizza</button></Link>
           <Link to="/Biryani"> <button className="px-4 bg-red-300 sm:bg-green-300 lg:bg-gray-300 m-4 rounded-lg">Biryani</button></Link>
           <Link to="/Chinese"> <button className="px-4 bg-red-300 sm:bg-green-300 lg:bg-gray-300 m-4 rounded-lg">Chinese</button></Link>
           <Link to="/Cake"> <button className="px-4 bg-red-300 sm:bg-green-300 lg:bg-gray-300 m-4 rounded-lg">Cake</button></Link>         
                </ul>
        </div>
    )
}
export default Specificdish;