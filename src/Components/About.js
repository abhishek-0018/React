import {Component} from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="m-4 py-4 flex flex-col justify-center ">
                <div><h1 className="font-bold">Creater of this food ordering website:</h1></div>
                <UserClass name={"Abhishek"} location={"Kanpur"}/>
                {/* <User name={"Abhishek"} location={"Kanpur"}/> */}
            </div>
        );
    }
}
export default About;