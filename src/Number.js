import React from 'react';

const Number = ({ope, setOpe, firstValue, setFirstValue, secondValue, setSecondValue, setResult}) => {
    const clickNumberHandle = (e) => {
        e.preventDefault();
        const newNumberValue = e.target.value;
        if(firstValue==="Error"){
            setFirstValue("Error")
        }
        else {
            if(secondValue === "" && ope === "") {
                setFirstValue(firstValue.concat(newNumberValue));
            }
            else if(ope !== "") {
                if(ope === "="){
                    setFirstValue(newNumberValue);
                    setSecondValue("");
                    setResult("");
                    setOpe("");
                }
                else {
                    setSecondValue(secondValue.concat(newNumberValue));
                }     
            }
        }
    }

    
    return (
        <div className = "number_grid">
            <div className = "num_firstPart">
                <button className = "num" value = "1" onClick = {clickNumberHandle}>1</button>
                <button className = "num" value = "2" onClick = {clickNumberHandle}>2</button>
                <button className = "num" value = "3" onClick = {clickNumberHandle}>3</button>
                <button className = "num" value = "4" onClick = {clickNumberHandle}>4</button>
                <button className = "num" value = "5" onClick = {clickNumberHandle}>5</button>
                <button className = "num" value = "6" onClick = {clickNumberHandle}>6</button>
                <button className = "num" value = "7" onClick = {clickNumberHandle}>7</button>
                <button className = "num" value = "8" onClick = {clickNumberHandle}>8</button>
                <button className = "num" value = "9" onClick = {clickNumberHandle}>9</button>
            </div>
            
            <div className = "num_secondPart">
                <button className = "num num_zero" value = "0" onClick = {clickNumberHandle}>0</button>
                <button className = "num" value = "." onClick = {clickNumberHandle}>.</button>
            </div>
        </div>
    );
};

export default Number;