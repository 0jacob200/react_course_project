import React from 'react'
import Task from '../Task/Task'

const Map = ({state, handleClickChangeStatus}) =>{
    return(
      <div>
        {state.tasks.map(tasks => <Task id={tasks.id} name={tasks.name} description={tasks.description} 
        completed={tasks.completed} handleClickChangeStatus={()=> handleClickChangeStatus(tasks.id, tasks.completed)}/>)}
      </div>
    )
}

export default Map