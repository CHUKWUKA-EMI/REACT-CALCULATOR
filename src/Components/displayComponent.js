import React from 'react';
import './style.css';

const DisplayComponent =(props)=> {
    
    
    return (
        <div className="display">
            <div className="equation" style={{color:'navy'}}>{props.equation}</div>
            <div className="result" style={{color:'red'}}>{props.result}</div>
            <div>{props.operator}</div>
           <div>{props.specialOperators}</div>
        </div>
    );
}

export default DisplayComponent;
