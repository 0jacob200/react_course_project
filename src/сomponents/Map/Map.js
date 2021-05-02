import React from 'react';
import Task from './/..//Task/Taskn'

const Map = ({state}) =>{
    return(
      <div>
        {state.tasks.map(tasks => <Task id={tasks.id} name={tasks.name} description={tasks.description} completed={String(tasks.completed)}/>)}
      </div>
    )
  }

export default Map