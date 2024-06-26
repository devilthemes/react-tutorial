
import { useEffect, useState } from "react";
import { getNews, getOldNews,sendPersonalData } from "./api";
import { StaffForm } from "./StaffForm";
function App() {
  const [state, setState] = useState({});
  const [oldNews, setOldNews] = useState([]);
  const [localNews, setLocalNews] = useState([]);
  const [loading,setLoading] = useState(false);
  const [data,setData] = useState({
    name:'',
    age:"0",
    salary:"0"
  });
  useEffect(() => {
    fetchNews();
    fetchOldNews();   
  }, []);

  const fetchNews = async () => {
    let result = await getNews("./json/one.json");
    setState(result.data)

  }
  const fetchOldNews = async () => {
    let result = await getOldNews();
    console.log(result.data);
    setOldNews(result.data);
  }


  const fieldHandler  = (e) =>{
    setData({
      ...data,
    [e.target.name] : e.target.value
    })
  }
  const submitData = async ()=>{
    setLoading(true);
    let result = await sendPersonalData({...data});
    setLoading(false);
    console.log(result.data);
     if(result?.data?.status === "success"){
      alert(result.data.message);
     }  
  }
  return (
    <div className="App">
      <h1>API Handling from Reactd df</h1>
      <p>
        I have an {state.fruit} with {state.color} color in {state.size} size.
      </p>
      <h3>Old News</h3>
      <ul>
        {
          oldNews?.length > 0 && oldNews.map((news, index) => {
            if (index < 5) {
              return <li key={index}>{news.name}</li>
            }

          })
        }
      </ul>
      <h3>Personal Detail</h3>
      {JSON.stringify(data)} <br />
      <input type="text" name="name" onChange={fieldHandler} placeholder="Name" value={data.name} /> <br />
      <input type="text" name="salary" onChange={fieldHandler} placeholder="Salary" value={data.salary} /><br />
      <input type="text" name="age" onChange={fieldHandler} placeholder="Age" value={data.age} /><br />
      <button onClick={submitData}> {loading ? 'Loading ....' :'Submit Form'}</button>
<StaffForm />
      
    </div>
  );
}

export default App;
