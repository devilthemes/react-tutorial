import { memo } from "react";
function TextBox (props) {
    console.log("Me from TextBox...");
    return <input type="text" value={props.name} onChange={(e)=>props.onChange(e,props.index)} />
   
}


export default memo(TextBox);