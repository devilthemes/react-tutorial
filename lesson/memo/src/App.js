import { useState } from "react";
import ComponentB from "./components/ComponentB";
import ComponentA from "./components/ComponentA";

function App() {
  const [state,setState] = useState({
    countA:0,
    name:'hira'   
  })
  const incrementA = ()=>{
    setState({
      ...state,
      countA:state.countA+1
    })
  }
 
  return (
    <div>
      {JSON.stringify(state)}
      <p>
      <input type="text" value={state.name} onChange={(e)=>setState({...state,name:e.target.value})} />
      </p>
    
   <ComponentA  />
   <h4>Component B is not on memo and always be render</h4>
   
   <ComponentB count={state.countA} />
<p>When use click on button then it will change value count and reflect to Component B so it will trigger and render</p>
   <p><button onClick={incrementA}>Component A increment</button></p>

    </div>
  );
}

export default App;
