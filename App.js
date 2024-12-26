import React from "react"
import ReactDOM from "react-dom/client"


/*
const jsxHeading = (
    <h1 id= "heading"> Heading using JSX!</h1>
)

console.log(jsxHeading)

*/

/*
//function Component
const Title = () => (
    <h1 className="head">
        Mastering the React
    </h1>
)


const HeadingComponent = () => (
    <div id = "container">
        <Title />
        <h1 className="heading">
            Learning the functional component
        </h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeadingComponent />)

*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://png.pngtree.com/png-vector/20221231/ourmid/pngtree-food-delivery-logo-template-design-sign-menu-vector-png-image_43664212.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img
                className="res-logo"
                alt="res-logo"
                src="https://content.jdmagicbox.com/v2/comp/thane/g2/022pxx22.xx22.161007191254.c6g2/catalogue/biryani-house-j-k-gram-thane-west-thane-biryani-restaurants-dld85iacfu.jpg"
            />
            <h3>Meghana Foods</h3>
            <h4>Biryani, North Indian</h4>
            <h4>4.4 Stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="Search">search</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>    
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)