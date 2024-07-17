import React, { memo, useCallback, useState } from 'react'

function UseCallbackComponent() {
    const[data,setData] = useState('');
    const[counter,setCounter] = useState(1)
    console.log(data,"data");
    // const Increment = () => {
    //     setCounter((previousValue)=>previousValue+1);
    // }
    const Increment = useCallback(() => {
      setCounter((prevValue) => prevValue + 1);
    }, []);

    return (
    <div>
        <h1>Input</h1>
        <input onChange={(event) =>setData(event.target.value)}/>
        <MemoComponent counter={counter} Increment={Increment} />
    </div>
  )
}

const MemoComponent = memo(function ChildrenComponent({ counter, Increment }) {
    console.log("Children Component rerendered.");
    return (
      <div>
        <h1>Counter {counter}</h1>
        <button onClick={Increment}>+</button>
      </div>
    );
  });

//   const MemoComponent = function ChildrenComponent({ counter, Increment }) {
//     console.log("Children Component rerendered.");
//     return (
//       <div>
//         <h1>Counter {counter}</h1>
//         <button onClick={Increment}>+</button>
//       </div>
//     );
//   };
  

export default UseCallbackComponent;