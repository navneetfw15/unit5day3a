import './App.css';
import {useState} from "react";
import {Counter} from "./componets/counter";

function App() {
  const [counter,setCounter] = useState(0);

  function Double(){
    setCounter(counter*2);
  }

  return (
    <div className="App">
      <Counter prop={counter} set={setCounter} />
      <button onClick={()=>Double()}>Double</button>
      <h1>number is:<span className={counter%2==0?"greentext":"redtext"}>{counter%2==0?"Even":"Odd"}</span></h1>
    </div>
    
  );
}

export default App;

