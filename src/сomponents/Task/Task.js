import React from 'react';

const Task = ({id, name, description, completed}) => {
    const changeStClick = () => {
      console.log(`Task ${id} completed status = ${completed}`)
  
     }
  
    return(
    <div className='task'>
      <p>Task name: { name }</p>
      <p>Task description: {description}</p>
      <p>Task completed: {completed}</p>
      <button className="buttonChange" onClick={changeStClick}>Change status</button>
    </div>
    )
  }

export default Task