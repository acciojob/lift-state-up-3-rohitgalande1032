import React from 'react'
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";
import "../styles/App.css";

const Parent = () => {
  const [selectedOption, setSelectedOption] = React.useState(null);
  return (
    <div className="parent">
        <h1>Parent Component</h1>
        <ChildComponent1 setSelectedOption={setSelectedOption}/>
        <ChildComponent2 setSelectedOption={setSelectedOption} />
        <p>Selected Option: {selectedOption}</p>
    </div>
  )
}

export default Parent