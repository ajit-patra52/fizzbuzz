import "./App.css";
import { Context } from "./Context";
import { useState, useEffect, React } from "react";
import InputTxt from "./Components/InputTxt";
import FizzBuzzList from "./Components/FizzBuzzList";

function App() {
  const [context, setContext] = useState(null);
  const [numList, setNumList] = useState([]);
  useEffect(() => {
    if (context) {
      console.log(`new context:${context}`);
      setNumList(() => numList.concat(context));
      console.log(`new numList:${numList}`);
    }
  }, [context]);

  return (
    <div className="App">
      <h1>Fizz Buzz App</h1>
      <hr />
      <Context.Provider value={[context, setContext]}>
        <InputTxt />
        {!!numList?.length && <FizzBuzzList list={numList} />}
      </Context.Provider>
    </div>
  );
}

export default App;
