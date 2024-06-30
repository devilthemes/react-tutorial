import DOMPurify from 'dompurify';
import { Suspense, lazy, useState } from 'react';
const ComponentA = lazy(()=>import('./components/ComponentA'));
function App() {  
  const content  = `<div><h1>Dom Purify</h1> <img src=x onerror=alert("hacked")//></div>`;
  const [message,setMessage] = useState('');
  const messageHandler = (e)=>{
    setMessage(DOMPurify.sanitize(e.target.value));
  }
  return (
    <div>
        <textarea value={message} onChange={messageHandler}>
        </textarea>
        <div
          dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content)}}
        />    
        <Suspense fallback={<div><h2>Loading Component A .....</h2></div>}>  <ComponentA />
          </Suspense> 
      
    </div>
  )
}

export default App;
