//import { useEffect, useState } from "react";

// 6.2 useEffect //

//function App() {
//  const [counter, setCounter] = useState(0);
//  const [keyword, setKeyword] = useState("");
//  const onClick = () => setCounter((prev) => prev + 1);
//  const onChange = (event) => setKeyword(event.target.value);
//  console.log("run all time");
//  useEffect(() => {
//    if (keyword !== "")
//      console.log("keyword change")
//  }, [keyword]);
//  useEffect(() => {
//    console.log("counter change")
//  }, [counter]);
//  return (
//    <div>
//      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
//      <h1>{counter}</h1>
//      <button onClick={onClick}>
//        Click
//      </button>
//    </div>
//  );
//}

// 6.4 clean up //

//function Hello() {
//  useEffect(() => {
//    console.log("Create");
//    return () => console.log("Destroy");
//  }, [])
//  return (
//    <div>hello</div>
//  )
//}


//function App() {
//  const [showing, setShowing] = useState(false);
//  const onClick = () => setShowing((prev) => !prev);
//  return (
//    <div>
//      {showing ? <Hello /> : null}
//      <button onClick={onClick}>
//        {showing ? "hide" : "show"}
//      </button>
//    </div>
//  )
//}



//export default App;
