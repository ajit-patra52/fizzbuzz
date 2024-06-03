import "./App.css";
import { Context } from "./Context";
import { useState, useEffect, React } from "react";
import InputTxt from "./Components/InputTxt";

function App() {
  const [context, setContext] = useState([""]);
  useEffect(() => {
    setContext((newVal) => {
      console.log(newVal);
      context?.concat(newVal);
      console.log(`new context:${context}`);
    });
  }, [context]);

  return (
    <div className="App">
      <h1 className="text-center">Fizz Buzz App</h1>
      <hr />
      <Context.Provider value={[context, setContext]}>
        <InputTxt />
      </Context.Provider>
    </div>
  );
}

export default App;
