
import React from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";
import "../styles/App.css";

const App = () => {
  const [selectedOption, setSelectedOption] = React.useState(null);
  return (
    <div className="App">
      <h1>Parent Component</h1>
        <ChildComponent1 setSelectedOption={setSelectedOption}/>
        <ChildComponent2 setSelectedOption={setSelectedOption} />
        <p>Selected Option: {selectedOption}</p>
    </div>
  )
}

export default App
