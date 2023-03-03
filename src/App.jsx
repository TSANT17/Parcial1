import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { FirstApp } from "./Components/FirstApp";
import { Contador } from "./Components/Contador";
import { Prodcutos } from "./Components/Prodcutos";

function App() {
  const [count, setCount] = useState(0);git add README.md

  return (
    <div className="App">
      <h1>Hola</h1>
      <FirstApp title={"NADA Y TU"} numero={10} />
      <div>
        <select name="productos">
          {categories.map((category, key) => {
            return <li key={key}>{category}</li>;
          })}
        </select>
      </div>
      <Contador />
      <Prodcutos />
    </div>
  );
}

export default App;
