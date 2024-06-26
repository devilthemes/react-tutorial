import React,{ useState } from "react";
import { ComponentA } from "./components/ComponentA";
import { SettingProvider } from "./contexts/settingContext";
import { InfoProvider } from "./contexts/infoContext";
import "./index.css";
import { ComponentD } from "./components/ComponentD";
function App() {
  const [state,setState] = useState({
    mode:'black',
    name:'hira',
    country:'nepal'
  })
  return (
    <React.Fragment>    
    <InfoProvider value="nepal">
    <SettingProvider value={{state,setState}}>    
      <ComponentA />  
      <button onClick={()=>setState({...state,mode:'gray'})}>Change Color</button>
    </SettingProvider>
    </InfoProvider>
    <ComponentD />
    </React.Fragment>
  );
}

export default App;
