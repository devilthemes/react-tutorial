import { ComponentB } from "../ComponentB"
import { SettingContext } from "../../contexts/settingContext"
import { useContext } from "react"
export const ComponentA = ()=>{
    const {state,setState} = useContext(SettingContext);
    console.log("Component A" ,state);
    const setRed = () =>{
        console.log("set Red");
        setState({
            ...state,
            mode:'red'
        })
    }
    return (<div  className="block">
        <h2>Component A : {state.mode}</h2>
        <h3>Name : {state.name}</h3>
        <button onClick={setRed}>Red</button>
        <ComponentB />
    </div>)
}