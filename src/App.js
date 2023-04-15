import { useRef, useState } from "react";
import './App.css'

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  let [result, setResult] = useState(0);

  const plus = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  const minus = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  const times = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  const divide = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value=0;
  }

const resetResult = (e) => {
    e.preventDefault();
    setResult((preVal)=> preVal*0)
  }
  return (
    <div className="App">
      <h3>Simplest Working Calculator</h3>
      <p>Basic Calculator that does simply addition,subtraction, multiplication and division operations.</p>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          className="int-p"
         pattern="[0-9]"
         ref={inputRef}
         type="number"
         placeholder="Type a number"
        />
           <button onClick={plus}>Add</button>
         <button onClick={minus}>Subtract</button>
        <button onClick={times}>Multiply</button>
         <button onClick={divide}>Divide</button>
        <button onClick={resetInput}className="btn">reset input</button>
        <button onClick={resetResult}className="btn ">reset result</button>
      </form>
    </div>
  );
}

export default App;
  