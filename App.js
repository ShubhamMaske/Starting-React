import React from "react"
import ReactDOM from "react-dom/client"


/*
const jsxHeading = (
    <h1 id= "heading"> Heading using JSX!</h1>
)

console.log(jsxHeading)

*/

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