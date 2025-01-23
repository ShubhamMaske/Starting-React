import React from "react";


class UserClass extends React.Component {
    constructor(props) {
        super(props);

        //this is how we can use state variable
        this.state = {
            count: 0,
            count2: 1
        };
    }

    componentDidMount() {
        console.log("child componentDidMount")
    }

    render() {
        const {name, location} = this.props
        const { count, count2} = this.state

        return (
            <div className="user-card">
                <h2>Count = {count}</h2>
                <h2>Count2 = {count2}</h2>
                <button onClick={() => {
                    this.setState({
                        count : this.state.count + 1,
                        // other state variable also can be write here
                    })
                }}>Increase Count</button>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: dummy@gmail.com</h4>
        </div>
        )
    }
}


export default UserClass