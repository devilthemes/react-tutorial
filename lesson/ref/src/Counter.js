import { memo } from "react";
function Counter (props) {
    console.log("Me from Counter")
    return <h1 >{props.count} </h1>
}

export default  memo(Counter);