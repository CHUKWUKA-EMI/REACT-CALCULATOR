import React from 'react';
import './style.css';

const KeypadComponent =(props)=> {
    
    return (
        <div className="keypad">
    
            
            <button name="log(" style={{backgroundColor:"aqua"}} onClick={props.onClick}>log</button>
            <button name="cos(" style={{backgroundColor:"aqua"}} onClick={props.onClick}>cos</button>
            <button name="sin(" style={{backgroundColor:"aqua"}} onClick={props.onClick}>sin</button>
            <button name="tan(" style={{backgroundColor:"aqua"}} onClick={props.onClick}>tan</button>
            <button name="C" style={{backgroundColor:"aqua"}} onClick={props.onClick}>C</button><br />
            

            
            <button name="7" onClick={props.onClick}>7</button>
            <button name="8" onClick={props.onClick}>8</button>
            <button name="9" onClick={props.onClick}>9</button>
            <button name="÷" style={{backgroundColor:"aqua"}} onClick={props.onClick}>÷</button>
            <button name="×" style={{backgroundColor:"aqua"}} onClick={props.onClick}>×</button><br />
            

            
            <button name="4" onClick={props.onClick}>4</button>
            <button name="5" onClick={props.onClick}>5</button>
            <button name="6" onClick={props.onClick}>6</button>
            <button name="+" style={{backgroundColor:"aqua"}} onClick={props.onClick}>+</button>
            <button name="-" style={{backgroundColor:"aqua"}} onClick={props.onClick}>-</button><br />
            

            
            <button name="1" onClick={props.onClick}>1</button>
            <button name="2" onClick={props.onClick}>2</button>
            <button name="3" onClick={props.onClick}>3</button>
            <button  name="Exp" style={{backgroundColor:"aqua"}} onClick={props.onClick}>Exp</button>
            <button name="√" style={{backgroundColor:"aqua"}} onClick={props.onClick}>√</button><br />
            

            
            <button name="." onClick={props.onClick}>.</button>
            <button name="0" onClick={props.onClick}>0</button>
            <button name="%" onClick={props.onClick}>%</button>
            <button name="π" onClick={props.onClick}>π</button>
            <button name="=" style={{backgroundColor:"red"}} onClick={props.onClick}>=</button>
            
      


        </div>
    );
}

export default KeypadComponent;
