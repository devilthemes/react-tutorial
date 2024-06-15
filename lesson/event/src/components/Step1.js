import { useState } from "react"

export const Step1 = ({onNext})=>{
    const [state,setState] = useState({
        name:'',
        rollNo:0
    })
    const fieldHandler= (e)=>{
        setState({
            ...state,
            [e.target.name] : e.target.value          
        })
    }
  
    return (<div>
        <h2>Step 1</h2>
        <div>
          
            <p>
                <input type="name" name="name"   onChange={fieldHandler} value={state.name} />
                
            </p>
            <p>
                <input type="name" name="rollNo" onChange={fieldHandler} value={state.rollNo} />
                
            </p>
            <button onClick={()=>onNext(state)}>Next</button>
        </div>
    </div>)
}