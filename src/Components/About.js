import {Component} from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h1>About</h1>
                <h2>This is food ordering website</h2>
                <UserClass name={"Abhishek"} location={"Kanpur"}/>
                {/* <User name={"Abhishek"} location={"Kanpur"}/> */}
            </div>
        );
    }
}
export default About;