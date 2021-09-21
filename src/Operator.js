import React from 'react';

const Operator = ({ope, setOpe, firstValue, setFirstValue, secondValue, setSecondValue, result, setResult}) => {
    const clickOpeHandle = (e) => {
        const newOpe = e.target.value;
        e.preventDefault(); 
        if(isNaN(Number(firstValue)) || isNaN(Number(secondValue))){
            setFirstValue("Error");
            setSecondValue("");
            setResult("");
            setOpe("");
        }
        else {
            if(newOpe === "=" && secondValue === "" && result === "") {
                setResult(parseFloat(firstValue));
            } 
            else if(ope !== "" && secondValue !== "" && result === "") {
                if(ope === "+"){
                    setResult(parseFloat(firstValue) +  parseFloat(secondValue));
                }
                else if(ope === "-"){
                    setResult(parseFloat(firstValue) -  parseFloat(secondValue));
                } 
                else if(ope === "x"){
                    setResult(parseFloat(firstValue) *  parseFloat(secondValue));
                }
                else if(ope === "/"){
                    setResult(parseFloat(firstValue) /  parseFloat(secondValue));
                }
                setSecondValue("");
            }
            else if(ope !== "" && secondValue !== "" && result !== "") {
                if(ope === "+"){
                    setResult(parseFloat(result) + parseFloat(secondValue));
                }
                else if(ope === "-"){
                setResult(parseFloat(result) - parseFloat(secondValue));
                } 
                else if(ope === "x"){
                    setResult(parseFloat(result) * parseFloat(secondValue));
                }
                else if(ope === "/"){
                    setResult(parseFloat(result) / parseFloat(secondValue))
                }
                setSecondValue("");
            }
            setOpe(newOpe); 
        }
        
    }

    const clickDeleteHandle = (e) => {
        e.preventDefault(); 
        if(firstValue==="Error"){
            setFirstValue("Error");
        }
        else {
            if(firstValue !== "" && secondValue === "" && ope === ""){
                setFirstValue(firstValue.slice(0,-1));
            }
            else if(firstValue !== "" && secondValue !== "" && ope !== ""){
                setSecondValue(secondValue.slice(0,-1));
            }   
        }   
    }

    const clickResetHandle = () => {
        setFirstValue("");
        setSecondValue("");
        setResult("");
        setOpe("");
    }
  
    return (
        <div className = "ope_grid">
            <button className = "ope" value = "Del" onClick = {clickDeleteHandle}>DEL</button>
            <button className = "ope" value = "+" onClick = {clickOpeHandle}>+</button>
            <button className = "ope" value = "-" onClick = {clickOpeHandle}>-</button>
            <button className = "ope" value = "x" onClick = {clickOpeHandle}>x</button>
            <button className = "ope" value = "/" onClick = {clickOpeHandle}>/</button>
            <button className = "ope" value = "=" onClick = {clickOpeHandle}>=</button>
            <button className = "ope" value = "Reset" onClick = {clickResetHandle}>AC</button>
        </div>
    );
};

export default Operator;