

import { useRef } from 'react';

function App() {
  const hitRef = useRef(null);

  function changeName() {
    let counter = parseInt(hitRef.current.value)+1; 
      hitRef.current.value =counter;
  }
 
  return (
    <div>    
      <h1>Reference</h1>     
     <p>
     <input type="text"  ref={hitRef} value="0"  />   
      </p>    
      <button onClick={changeName}>Change Name By Reference</button>   
    </div>
  );
}

export default App;
    