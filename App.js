import React from "react"
import ReactDOM from "react-dom/client"


const parent = React.createElement(
    "div",
    {id: 'parent'},[
        React.createElement(
            "div", 
            {id: "child"},
            [ React.createElement("h1", {}, "I am an H1 tag"),
                React.createElement("h2", {}, "I am an H2 tag") 
            ] //we can add multiple element using array
        ),
        React.createElement(
            "div", 
            {id: "child2"},
            [ React.createElement("h1", {}, "I am an H1 tag from child 2"),
                React.createElement("h2", {}, "I am an H2 tag child 2") 
            ] //we can add multiple element using array
        )
    ]
    
)
console.log(parent)


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)