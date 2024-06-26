import { useEffect, useState } from "react"
import {sendPersonalData } from "./api";
export const StaffForm = () => {
    const [data,setData] = useState({
        name:'',
        age:"",
        salary:""
    })
    const {name,age,salary} = {...data};
    const [msg,setMsg] = useState("");
    const [isValid,setIsValid] = useState(false);
    const [loading,setLoading] = useState(false);
    const fieldHandler  = (e) =>{
        setData({
          ...data,
        [e.target.name] : e.target.value
        })
      }
      useEffect(()=>{
        if(name.length>0 && age.length>0 && salary.length>0){
            setIsValid(true);
        }else{
            setIsValid(false);
        }
      },[name,age,salary])
      const submitData = async ()=>{
        setLoading(true);
        let result = await sendPersonalData({...data});
        setLoading(false);
        console.log(result.data);
         if(result?.data?.status === "success"){
          setMsg(result.data.message);
         }  
      }
    return (
        <div>
            <h2>Multiple useEffect</h2>
           
            Name : <br />
            <input type="text" name="name" onChange={fieldHandler} placeholder="Put your Name" value={data.name} /> <br />
            Salary : <br />
            <input type="text" name="salary" onChange={fieldHandler} placeholder="Put your Salary" value={data.salary} /><br />
            Age : <br />
            <input type="text" name="age" onChange={fieldHandler} placeholder="Put your Age" value={data.age} /><br />
            <button onClick={submitData} disabled={!isValid}> {loading ? "Loading ..." : "Submit Form"}</button>
            <h3>{msg}</h3>

        </div>

    )
}

