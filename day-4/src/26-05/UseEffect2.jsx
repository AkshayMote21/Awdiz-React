import { useEffect, useState } from "react";

function UseEffect2(){

    const [counter,setCounter] = useState(4);

    useEffect(()=>{
        alert("Inside useEffect Type 2 : Empty dependency ")
    },[]);
    return(
        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={()=>{setCounter(counter+2)}}>+</button>
        </div>
    );
}
export default UseEffect2;