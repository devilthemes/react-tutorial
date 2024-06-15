import { useState } from "react"

export const Step2= ({onBack,onSave})=>{
    const [state,setState] = useState({
        isClearedBachlorDegree : false
    })
    const degreeHandler = (e) =>{
        console.log(e.target.checked)
        setState({
            ...state,
            isClearedBachlorDegree : e.target.checked
        })
    }
    return (<div>
        <h2>Step 2</h2>
        
       <p> <input type="checkbox" onChange={degreeHandler} checked={state.isClearedBachlorDegree} />Cleared bachelor degree ?</p> 

        <div>
        <button onClick={onBack}>Back</button>
        <button onClick={()=>onSave(state)}>Save</button>
        </div>
    </div>)
}