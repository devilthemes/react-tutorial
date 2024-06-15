
import { useState } from "react";
import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
function App() {
  const [state, setState] = useState({
    step: 1,
    name: '',
    roll: 0,
    isClearedBachlorDegree: false,
    show: false
  });

  const nextHandler = (data) => {

    setState({
      ...state,
      ...data,
      step: state.step + 1
    })
  }
  const saveForm = (data) => {
    setState({
      ...state,
      ...data,
    })
  }
  const backHandler = () => {
    setState({
      ...state,
      step: state.step - 1
    })
  }
  const showReport = () => {
    setState({
      ...state,
      show: !state.show
    })
  }
  return (
    <div>
      {JSON.stringify(state)}
      {
        state.step === 1 ? <Step1 onNext={nextHandler} /> : <Step2 onSave={saveForm} onBack={backHandler} />

      }

      <button onClick={showReport}>Toggle Report</button>
      {
        state.show && <div>
          <p>
            <strong>Name : </strong> {state.name}
          </p>
          <p>
            <strong>Roll No : </strong> {state.rollno}
          </p>
          {
            state.isClearedBachlorDegree === true ? <p>
              You have cleared bachelor degree
            </p> : <p>
              You have not cleared bachelor degree
            </p>
          }

        </div>
      }




    </div>
  );
}

export default App;
