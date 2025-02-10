import React from 'react'

const ChildComponent2 = ({setSelectedOption}) => {
  return (
    <div className='child2'>
      <h2>Child Component 2</h2>
      <button onClick={()=> setSelectedOption('Option 2')}>Option 2</button>
    </div>
  )
}

export default ChildComponent2