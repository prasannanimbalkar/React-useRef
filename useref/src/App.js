import React, {useState, useRef} from 'react';

const App = () => {
  const [myNum, setMyNum] = useState(0)

  //displays entire dom element on which useRef is used
  const inputOne = useRef();
  const inputTwo = useRef();

  const getNumBox = () => {
    console.log("Hello");
    alert("check console")
    console.log(inputOne.current)
    inputOne.current.style.width = "400px";
    inputOne.current.style.backgroundColor = "teal";
  };

  const getTextBox = () => {
    console.log("World");
    alert("check console")
    console.log(inputTwo.current)
  };

  return (<>
      <h2>Learncodeonline</h2>

      <input
          ref={inputOne}  // useRef used on the input element
          value={myNum} 
          type="number" 
          style={{width:"100px"}}
          onChange={(e) => setMyNum(e.target.value)} />

      <input 
          ref={inputTwo}
          value={myNum} 
          type="text" 
          onChange={(e) => setMyNum(e.target.value)} />

      <h3>Value is : {myNum}</h3>
      <button onClick={()  => getNumBox()}>Rupees</button>
      <button onClick={() => getTextBox()}>Dollars</button>

    </>
  ) ;
};

export default App;

//useRef is used to store reference of the element
//never re-renders dom elements
// Returns  mutable reference object
 