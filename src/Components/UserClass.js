import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"",
                location:"",
                avatar_url:"http://dummy-photo.com",
            },
        };
    }
   async componentDidMount(){
    // Api call
        const data =await fetch("https://api.github.com/users/abhishek-0018");
        const json= await data.json();
        this.setState({
            userInfo:json,
        });
    }
    render(){
        
        const {name,location,id,avatar_url}=this.state.userInfo;
        if(!name||!id||!location){
            return <div><h1>loading.......</h1></div>
        }
        return(
            <div className="p-10 flex flex-col justify-center items-center border border-solid border-black">
                <img className="rounded-3xl" src={avatar_url} alt="rrr"/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h2>ID: {id}</h2>
            </div>
        );
    };
}

export default UserClass;