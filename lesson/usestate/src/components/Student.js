import { useState } from "react";
function Student(props) {

    const [stdName, setStdName] = useState("");
    const [education,setEducation] = useState('');
    const [university,setUniversity] = useState('');
    const [age,setAge] = useState(10);
    const [show,setShow] = useState(false);
    const [books,setBooks] = useState(["Math","Computer","English"]);
    const [assignment,setAssignment] = useState({
        teacher : 'Hira kumar mahrjan',
        title : 'Javascript Counter'
    })
    
    
   

    const nameHandler = (e) => {
        setStdName(e.target.value);      
    }

    const educationHandler = (e) => {
        setEducation(e.target.value)
    }

    const univerityHandler = (e) => {
        setUniversity(e.target.value)
    }

    function ageHandler (e) {
        setAge(e.target.value);
       
    }
    const showData = () =>{
        setShow(!show)
    }

    return (<div>
        <h2>Student</h2>
        <div>Name : <input autoComplete="off" type="text" onChange={nameHandler} value={stdName} /></div>
        <div>Education : <input type="text"  autoComplete="off"  onChange={educationHandler} value={education} /></div>
        <div>Univertity : <input type="text"  autoComplete="off"  onChange={univerityHandler} value={university} /></div>
        <div>Age : <input type="text"  autoComplete="off"  onChange={ageHandler} value={age} /></div>
        <div><button onClick={showData} >Toggle Data</button></div>
        {
            show === true ? <div>
            Name :{stdName}  <br />
            Education : {education} <br />
            University : {university} <br />
            Age : {age}
            <hr />
            <h3>Books : {books[0]} , {books[1]} , {books[2]}</h3>
            <h3>Assignment : {assignment.title}</h3>
            </div> : ''
        }      
        

    </div>)
}

export default Student;
