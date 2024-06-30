import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement,putUnique,changeStudent } from "./state/infoSlice";
import { getAllProducts } from "./api";

function App() {
  const count = useSelector(state=>state.info.value);
  const info = useSelector(state=>state.info);
  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(false);
  const studentData = info.student;
  const dispatch = useDispatch();
  const [std,setStd] = useState({
    name:'',
    age:''
  })
  const [counter,setCounter] = useState(0);
 
  
 const incrementCounter = () =>{
  dispatch(increment());
 }
 const decrementCounter = () =>{
  dispatch(decrement());
 }
const setMyCounter = () =>{
  dispatch(putUnique(80))
}
const sendData = ()=>{
  console.log("Sending data to redux");
  console.log(std);
  dispatch(changeStudent(std))
}

async function fetchAllProducts (){
  setLoading(true);
  const allProducts = await getAllProducts();
  console.log(allProducts);
  setLoading(false);
  setProducts(allProducts);
}

useEffect(()=>{
  fetchAllProducts();
},[])

  return (
    <div>
     
      <h2>Counte : {count}</h2>
      {JSON.stringify(studentData)}
      <button onClick={incrementCounter}>increment</button>  <button onClick={decrementCounter}>decrement</button><br />
      <br />
      <input type="text" value={counter} onChange={(e)=>{setCounter(e.target.value)}}  />
      <button onClick={setMyCounter}>Set my Own Counter</button>

      <hr />
      Name : <input type="text" value={std.name} onChange={(e)=>setStd({...std,name:e.target.value})} /> <br />
      Age : <input type="text" value={std.age}  onChange={(e)=>setStd({...std,age:e.target.value})}  /> <br />
      <button onClick={sendData}>Send Data</button>

      {
        products?.length > 0 &&<ul>
          {
             products.map(item=>{
              return  <li key={item.id}>
                  <b>{item.category}</b>
                  <img src={item.image} width="200" height="200" />
                  <h4>{item.title}</h4>
                  <p>
                    {item.description}
                  </p>
              </li>
            })
          }
           
       
      </ul>
      }
      
    </div>
  );
}

export default App;
