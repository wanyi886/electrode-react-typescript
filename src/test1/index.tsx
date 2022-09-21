import { React, ReactSubApp } from "@xarc/react";

const clickMessage = "Clicked!"

const Test1 = () => {

    return (
        <div>
            <p>Test block by WANYI for building a component in Typescript</p>
            <button onClick={() => console.log(clickMessage)}>Click me</button>
            
        </div>
    )
}

export const subapp: ReactSubApp = {
    Component: Test1
}