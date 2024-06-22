
import { ComponentA } from "./components/ComponentA";
import { ComponentB } from "./components/ComponentB";
import "./dynamic-css.scss";
function App() {
  return (
    <div>
        <h1>Style</h1>
        <p>
          Hi, I am student of React 
        </p>
        <h2>I am from internal react css from import "app.css"</h2>
        <h2 style={{color:'blue',fontSize:'20px'}}>I am inline CSS and have more power</h2>
        <h3>I am h3</h3>
        <div className="dynamic">
          i am dynamic css from scss .
          <h2>i am header</h2>
        </div>
        <ComponentA />
        <ComponentB />
    </div>
  );
}

export default App;
