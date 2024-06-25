import { useState } from "react";

function UseState(){
    
    const [counter,setCounter] =useState(1);
    const [counter2,setCounter2] =useState(10);

    function Increament(){
        // setCounter(counter+1);
        setCounter((previousValue)=>previousValue+1);
    }
    function Decreament(){
        // setCounter(counter-1);
        if(counter > 1){
            setCounter((previousValue)=>previousValue-1);
        }  
    }
    function Reset(){
        setCounter(1);
    }
    
    function Increament2(){
        // setCounter2(counter2+1);
        if(counter >= 10){
            setCounter2((previousValue)=>previousValue+1);
        }
    }
    function Decreament2(){
        // setCounter2(counter2-1);
        if(counter2 > 10){
            setCounter2((previousValue)=>previousValue-1);
        } 
    }
    function Reset2(){
        setCounter2(10);
    }

    return (
        <div>
            <h1>Counter 1 : {counter}</h1>
            <button onClick={Increament}>+</button>
            <button onClick={Decreament}>-</button>
            <button onClick={Reset}>Reset</button>

            <h1>Counter 2 : {counter2}</h1>
            <button onClick={Increament2}>+</button>
            <button onClick={Decreament2}>-</button>
            <button onClick={Reset2}>Reset</button>
        </div>
    );
}
export default UseState;