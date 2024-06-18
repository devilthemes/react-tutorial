import { useEffect, useState } from "react";

export const List = ()=>{
    const students = [
        {id:1,name:"Ashta",age:20,sex:'female'},
        {id:2,name:"Pralhad Adhikari",age:25,sex:'male'},
        {id:3,name:"Safal Rijal",age:30,sex:'male'},
        {id:4,name:"Sandesh Pokharel",age:35,sex:'male'},
    ];
    const [list,setList] = useState([]);

    useEffect(()=>{
        console.log("Use Effect is called")
        setList([...students]);
    },[])
    const showMale = () =>{
        let male = students.filter(item=>item.sex==="male");
         setList(male);
    }
    const showFeMale = () =>{
        let female = students.filter(item=>item.sex==="female");
         setList(female);
    }
    function underAge () {
        let underAge =  students.filter(item=>item.age<=30);
        setList(underAge);
    }
    return (<div>
        <h1>Loop</h1>
        {
            list.map(item=><div key={item.id}>{item.name}</div>)
        }
        <button onClick={showMale}>Male</button>    <button onClick={showFeMale}>Female</button> <button onClick={()=>underAge()}>Under Age of 30</button>
    </div>)
}