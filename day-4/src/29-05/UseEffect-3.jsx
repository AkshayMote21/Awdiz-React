import { useEffect, useState } from "react";

function UseEffect31() {
  const [counter, setCounter] = useState(0);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  function SwitchFlag() {
    setIsUserLoggedIn((prevState) => !prevState);
  }

  //   Type 3 :- Single dependency
  //   useEffect(() => {
  //     alert("Calling from useeffect 1.");
  //   }, [counter]);

  //   Type 4 :- Multiple dependencies
  // useEffect(() => {
  //   alert("Calling from useeffect 2.");
  // }, [counter, isUserLoggedIn ]);

  return (
    <div>
      {isUserLoggedIn ? (<button onClick={SwitchFlag}>Welcome! Logout?</button>) : (<button onClick={SwitchFlag}>Please Login here!</button>)}
      <h1>Counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      {counter > 10 && counter < 20 ? (<h1>counter is in between 10-20</h1>) : (<h1>counter is out of range</h1>)}
    </div>
  );
}

export default UseEffect31;
