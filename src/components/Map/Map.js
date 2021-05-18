import React from 'react'
import Task from '../Task/Task'

const Map = ({state, handleClickChangeStatus}) =>{
    return(
      <div>
        {state.tasks.map(tasks => <Task id={tasks.id} name={tasks.name} description={tasks.description} 
        completed={String(tasks.completed)} handleClickChangeStatus={handleClickChangeStatus}/>)}
      </div>
    )
}

export default Map