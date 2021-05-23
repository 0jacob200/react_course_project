import React from 'react'

const Task = ({id, name, description, completed, handleClickChangeStatus}) => {
    /*
    const changeStatusClick = () => {
      console.log(`Task ${id} completed status = ${completed}`)
      handleClickChangeStatus(id, completed)
    }
    */
    return(
    <div className='task'>
      <p>Task name: { name }</p>
      <p>Task description: {description}</p>
      <p>Task completed: {String(completed)}</p>
      <button className="buttonChange" onClick={()=> handleClickChangeStatus(id, completed)}>Change status</button>
    </div>
    )
}

export default Task