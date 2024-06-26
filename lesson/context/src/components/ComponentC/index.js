import { useContext, useState } from "react";
import { SettingConsumer } from "../../contexts/settingContext";
import { InfoConsumer } from "../../contexts/infoContext";
export const ComponentC = ()=>{
     const {state,setState} = useContext(SettingConsumer);
     const val = useContext(InfoConsumer);
    const setGreen = () =>{
        console.log("Set Green");
        setState({
            ...state,
            mode:'green'
        })
    }
    useState(()=>{
        console.log("Making Green")
        setState({
            ...state,
            mode:'green'
        })
    },[])
    return (<div className="block">
        <h2>Component C : {state.mode}</h2>
        <h3>Name : {state.name}</h3>
        <h3>{val}</h3>
        { <button onClick={setGreen}>Green</button>}
    </div>)
}