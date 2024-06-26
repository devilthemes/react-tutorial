import { ComponentC } from "../ComponentC"
import { SettingContext } from "../../contexts/settingContext"
import { useContext,useState } from "react"
export const ComponentB = ()=>{
     const {state,setState} = useContext(SettingContext);
    const setBlue = () =>{        
        setState({
            ...state,
            mode:'blue'
        })
    }
    const changeName = () =>{
        setState({
            ...state,
            name:'narayan'
        })
    }

    return (<div className="block">
        <h2>Component B :{state.mode}</h2>
        <h3>Name : {state.name}</h3>
        <button onClick={changeName}>Change Name</button>
        <button onClick={setBlue}>Blue</button>
        <ComponentC />
    </div>)
}