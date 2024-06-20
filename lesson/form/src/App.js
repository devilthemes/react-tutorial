import { useState } from "react";


function App() {
  const [state,setState] = useState({
    name:'Roshan',
    sex:'male',
    subject:['English','Computer'],
    country:'india',
    message:'Please type message',
    submitted : false
  })
  const {name,sex,subject,country,message,submitted} = {...state};
  const nameHandler = (e)=>{
    console.log(e.target.value);
    setState({
      ...state,
      name:e.target.value
    })
  }
  const sexHandler = (event) =>{
    setState({
      ...state,
      sex:event.target.value
    })
  }
  const subjectHandler = (e)=>{
      let cloneSubject = state.subject;
    
      if(e.target.checked){
        cloneSubject.push(e.target.value);
        setState({
          ...state,
          subject:cloneSubject
        })

      }else{
        cloneSubject = cloneSubject.filter(item=>item!==e.target.value);
        console.log(cloneSubject)
        setState({
          ...state,
          subject:cloneSubject
        })
      }
  }
  const countryHandler = (e)=>{
    setState({
      ...state,
      country:e.target.value

    })
  }
  const messageHandler = (e)=>{
    setState({
      ...state,
      message:e.target.value

    })
  }
  const submitForm = (e)=>{
    console.log("suumibttttt");
    e.preventDefault();
    setState({
      ...state,
      submitted:true
    })
  }
  return (
    <div className="container">
        <div className="row">
          <h1>Form Handling</h1>
          <div className="col-sm-6">
          <form onSubmit={submitForm} action="#" method="post">
      <p>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} className="form-control" onChange={nameHandler} />
      </p>
      <p>
        <label for="sex">Sex:</label>
        <input type="radio" name="sex" id="male" checked={sex==="male"} onChange={sexHandler} value="male"/>
        <label for="male">Male</label>
        <input type="radio" name="sex" id="female" checked={sex==="female"} onChange={sexHandler} value="female" />
        <label for="female">Female</label>
      </p>
      <p>
        <span>Subject</span> <br />
        <input type="checkbox" value="Math" checked={subject.includes("Math")} onChange={subjectHandler}  /> Math
        <input type="checkbox" value="English" checked={subject.includes("English")}  onChange={subjectHandler} /> English
        <input type="checkbox" value="Computer" checked={subject.includes("Computer")}  onChange={subjectHandler}  /> Computer
      </p>
      <p>
        <label for="pets">Country</label>
        <select id="pets" className="form-control" value={country} onChange={countryHandler}>
          <option value="china">China</option>
          <option value="india">India</option>
          <option value="nepal">Nepal</option>
        </select>
      </p>
      <p>
        <strong>Message</strong> <br />
        <textarea className="form-control" value={message} onChange={messageHandler}>

        </textarea>
      </p>
      <p>
        <input type="submit" value="Submit" className="form-control" />
      </p>
    </form>
          </div>
          <div className="col-sm-6">
            {
              submitted && <>
               <p>
               <b> Name :</b> {name} 
              </p>
              <p>
              <b>Sex :</b>  {sex} 
              </p>
              <p>
              <b>Subject :</b> {subject.join(",")} 
              </p>
              <p>
               <strong> Country :</strong> {country} 
              </p>
              <p>
              <b>              Message :</b>

              </p>
              <p>
              {message} 
              </p>
              </>
            }
             
          </div>
        </div>
    </div>
    

  );
} export default App;
