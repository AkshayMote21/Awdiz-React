import { useEffect, useState } from "react";

function UseEffect3() {
  const [counter, setCounter] = useState(0);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // true
  const [isNumberBetween10_20,setIsNumberBetween10_20 ] = useState(false);

  function SwitchFlag() {
    setIsUserLoggedIn((prevState) => !prevState); // false => !false => true   // true => !true => false
  }


  function Increment() {
    setCounter(counter + 1);
  }
  function Between1020() {
    if(isNumberBetween10_20 >= 10 || isNumberBetween10_20 <=20){
        isNumberBetween10_20 = true;
    }
  }
  //   useEffect(() => {
  //     alert("Calling from useeffect.");
  //   }, [counter]);

//   useEffect(() => {
//     alert("Calling from useeffect.");
//   }, [counter, isUserLoggedIn]);
  return (
    <div>
        
        {/* Assigment && -> if counter is more than 10 and less than 20 then display "counter is in between 10-20" else display "counter is out of range". */}
      {/* {condition ? 1st statement : 2nd statement } */}

      {/* {isUserLoggedIn ? (
        <button onClick={SwitchFlag}>Welcome! Logout?</button>
      ) : (
        <button onClick={SwitchFlag}>Please login!</button>
      )} */}

      {isNumberBetween10_20 ? (<div>counter is in between 10-20"</div>) : (<div>counter is out of range</div>)}
      <h2></h2>
      <h1>Counter : {counter}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
}

export default UseEffect3;