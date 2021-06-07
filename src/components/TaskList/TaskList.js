import React from 'react'

import Map from '../Map/Map'
import NewTask from '../NewTask/NewTask'
import dataproject from '../Data/Data'

class TaskList extends React.Component {
    state = this.props.state
  
    handleClickChangeStatus = (id, completed) => {
      this.setState(curState =>{
        const oldTask = this.state.tasksById[id]
        const newTask = {...oldTask, completed: !completed}
        //curState.tasksById[index] = {...curState.tasksById[index], completed: !completed}
        return {
          tasksById: {...curState.tasksById, [id] : newTask}
        }
      })
    }

    

    newTask = (name, description) =>{
      this.setState(curSt =>{
        const newID = Object.keys(this.state.tasksById).length + 1
        const newSt = {...curSt.tasksById, [newID]: { 
          id: newID,
          name: name,
          description: description,
          completed: false
          }}
        return {tasksById: newSt}
      })
    }

    render() { 
      return (
        <div>
          <h3>Tasks of Project *name*</h3>
          <NewTask newTask={this.newTask} />
          <Map state={this.state} handleClickChangeStatus={this.handleClickChangeStatus}/>
        </div>
      )
    }
  }

  export default TaskList