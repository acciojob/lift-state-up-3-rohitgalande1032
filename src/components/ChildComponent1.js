import React from 'react'

const ChildComponent1 = ({setSelectedOption}) => {
  
  return (
    <div className='child1'>
      <h2>Child Component 1</h2>
      <button onClick={() => setSelectedOption('Option 1')}>Option 1</button>
    </div>
  )
}

export default ChildComponent1