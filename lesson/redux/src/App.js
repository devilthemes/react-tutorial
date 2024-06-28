import { useSelector } from "react-redux";
import { increment } from "./state/infoSlice";
import { useDispatch } from "react-redux";
function App() {
  const count = useSelector(state=>state.info.value);
  const dispatch = useDispatch();
  const incrementCounter = ()=>{
    console.log("Ready to increment");
    dispatch(increment());
  }
  return (
    <div>
      <h1>Counter : {count}</h1>
      <input type="text" /> <br />
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default App;
