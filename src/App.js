import { useState, useEffect } from "react";
import Display from "./Display";
import Number from "./Number";
import Operator from "./Operator";

function App() {
  const [output, setOutput] = useState("0");
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [ope, setOpe] = useState("");
  const [result, setResult] = useState("");

  useEffect (() => {
    display_out();
  },[firstValue, secondValue, result]);

  const display_out = () => {
    if(firstValue === "" && secondValue === "" && ope === ""){
      setOutput("0");
    }
    else if(firstValue !== "" && secondValue === "" && ope === "") {
      setOutput(firstValue);
    }
    else if(ope !== "" && result === "") {
      setOutput(secondValue);
    }
    else if(ope !== "" && secondValue !== "" && result !== "") {
      setOutput(secondValue);
    }
    else if(ope !== "" && secondValue === "" && result !== "") {
      setOutput(result);
    }
  }
  return (
    <div className="App">
      <Display
        output = {output}
      ></Display>
      <div className ="main_container">
        <Number
          ope = {ope}
          setOpe = {setOpe}
          setResult = {setResult}
          firstValue = {firstValue}
          setFirstValue = {setFirstValue}
          secondValue = {secondValue}
          setSecondValue = {setSecondValue}
          setOutput = {setOutput}
        ></Number>
        <Operator
          ope = {ope}
          setOpe = {setOpe}
          result = {result}
          setResult = {setResult}
          firstValue = {firstValue}
          setFirstValue = {setFirstValue}
          secondValue = {secondValue}
          setSecondValue = {setSecondValue}
        ></Operator>
      </div>
      
    </div>
  );
}

export default App;
