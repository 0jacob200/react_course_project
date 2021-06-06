import React from 'react'
import Map from '../Map/Map'
import NewTask from '../NewTask/NewTask'

class TaskList extends React.Component {
    state = {
      projectsById: {
        1: {
          id: 1,
          name: 'Учеба',
          tasksIds: [1]
        },
        2: {
          id: 2,
          name: 'Дом',
          tasksIds: [2]
        },
        // ...
      },
    
      tasksById: {
        1: {
          id: 1,
          name: 'Task #1',
          description: 'descr',
          completed: false,
        },
        2: {
          id: 2,
          name: 'Task #2',
          description: 'descr',
          completed: true,
        },
        // ...
      }
    }
  
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
  
    // newTask = (name, description) => {
    //   this.setState(curState => {
    //     const tasknew = {
    //       id: curState.tasks.length +1,
    //       name: name,
    //       description: description,
    //       completed: false
    //     }
    //     const newState = [...curState.tasks, tasknew]
    //     return {tasks: newState} 
    //   })
    // }

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