import React from 'react'
import Task from '../Task/Task'

const Map = ({state, handleClickChangeStatus}) =>{
    return(
      <div>
        {Object.values(state.tasksById).map(task => <Task id={task.id} name={task.name} description={task.description} 
        completed={task.completed} handleClickChangeStatus={()=> handleClickChangeStatus(task.id, task.completed)}/>)}
      </div>
    )
}

export default Map