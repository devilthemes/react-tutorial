
import { useSelector } from 'react-redux';
import { increment,setCounter } from './state/infoSlice';
import { useDispatch } from 'react-redux';
function App() {
  const counter = useSelector(state=>state.info.value);
  const [num,setnum] = useState(0);
  const dispatch = useDispatch();
  const incrementCounter = ()=>{
    dispatch(increment())
  }
  
  const putCounter = () =>{
    console.log(num)
   dispatch(setCounter(parseInt(num)))
  }
  return (
    <>
    <h2>Counter : {counter}</h2>
    <button onClick={incrementCounter}>Increment</button>
    <hr />
    <input type="number" value={num} onChange={(e)=>setnum(e.target.value)} /> <button onClick={putCounter}>Set Counter</button>
    </>  
  );
}

export default App;
