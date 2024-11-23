import React, {lazy,Suspense} from "react"; // importing REACT from node_modules
import ReactDOM  from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter,RouterProvider , Outlet} from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import Error from "./Components/Error";
import { Outlet } from "react-router-dom";
import RestaurentDetails from "./Components/RestaurentDetails";
//import Grocery from "./Components/Grocery";


// chunking, code splitting, Dynamic Bundling, lazy loading, on demand loading


const Grocery=lazy(()=>import("./Components/Grocery"));
const AppLayout=()=>{
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/Contact",
                element:<Contact/>,
            },
            {
                path:"/Grocery",
                element:<Suspense fallback={<h1>Loading.....</h1>}><Grocery/></Suspense>,
                //There will be few milisecond time while fetching data of grocery so for that time gap to not cause problem we use suspense
                //fallback is like a placeholder to show something during that time gap
            },
            {
                path:"/cart",
                element:<Cart/>,
            },
            {
                path:"/restaurents/:resId",
                element:<RestaurentDetails/>,
            },
        ],
        errorElement:<Error/>,
    },
]);
const r=ReactDOM.createRoot(document.getElementById("root2"));
r.render(<RouterProvider router={appRouter}/>);