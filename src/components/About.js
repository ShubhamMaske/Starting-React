import React from "react";
import User from "./User";
import UserClass from "./UserClass";


class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("Parent componentDidMount")
    }

    render() {
        return (
            <div>
                <h1>About</h1>
                <h2>This is the about page</h2>
                {/* <User name= {"Shubham"} location= {"Nagpur"}/> */}
    
                <UserClass name= {"Shubham- Class"} location= {"Nagpur"}/>
            </div>
        )
    }
}



// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is the about page</h2>
//             {/* <User name= {"Shubham"} location= {"Nagpur"}/> */}

//             <UserClass name= {"Shubham- Class"} location= {"Nagpur"}/>
//         </div>
//     )
// }



export default About;