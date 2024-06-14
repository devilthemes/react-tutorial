import { useState } from "react";
function Teacher() {

    const [state,setState] = useState({
        stdName:'',
        education:'',
        show:false
    }) 
    
    
    const inputHandler = (e) => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    const toggle = ()=>{
        setState({
            ...state,
            show:!state.show
        })
    }

 

    return (<div>
        <h2>Teacher</h2>
        <div>Name : <input autoComplete="off" type="text" name="stdName" onChange={inputHandler} value={state.stdName} /></div>
        <div>Eduation : <input autoComplete="off" type="text" name="education" onChange={inputHandler} value={state.education} /></div>
        <hr />
        <button onClick={toggle}>Toggle Data</button>
        {
            state.show === true ? <div>
            Name : {state.stdName} <br />
            Education : {state.education}
            </div> :""
        }
  

    </div>)
}

export default Teacher;
