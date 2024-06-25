import { useEffect, useState } from "react";

function UseEffect1(){

    const [counter,setCounter] = useState(1);
    const [counter2,setCounter2] =useState(10);

    useEffect(()=>{
        alert("Inside UseEffect 1 : No dependency")
    });

    return(
        <div>
            <h1>useEffect</h1>
            <h1>Type 1 :- No dependency</h1>
            <h2>Counter 1 : {counter}</h2>
            <button onClick={()=>{setCounter(counter+1)}}>+</button>
            <button onClick={()=>{setCounter(counter-1)}}>-</button>
            <h2>Counter 2 : {counter2}</h2>
            <button onClick={()=>{setCounter2(counter2+1)}}>+</button>
            <button onClick={()=>{setCounter2(counter2-1)}}>-</button>
        </div>
    );
}
export default UseEffect1;