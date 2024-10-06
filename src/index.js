import React from "react"; // importing REACT from node_modules
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

const AppLayout=()=>{
    return (
        <div className="app">
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