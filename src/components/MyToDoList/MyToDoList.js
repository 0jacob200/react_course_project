import React from 'react'
import Map from '../Map/Map'
import NewTask from '../NewTask/NewTask'

class MyToDoList extends React.Component {
    state = {
      tasks: [
        {
          id: 1,
          name: 'Name task 1',
          description: 'Doing somthing 1',
          completed: false
        },{
          id: 2,
          name: 'Name task 2',
          description: 'Doing somthing 2',
          completed: true
        },{
          id: 3,
          name: 'Name task 3',
          description: 'Doing somthing 3',
          completed: false
        },{
          id: 4,
          name: 'Name task 4',
          description: 'Doing somthing 4',
          completed: true
        },{
          id: 5,
          name: 'Name task 5',
          description: 'Doing somthing 5',
          completed: false
        },{
          id: 6,
          name: 'Name task 6',
          description: 'Doing somthing 6',
          completed: true
        }
      ]
    }
  
    handleClickChangeStatus = (id, completed) => {
      //console.log({id, completed})
      this.setState(curState =>{
        let index = curState.tasks.findIndex(x => x.id === id)
        //console.log({index, completed})
        curState.tasks[index] = {...curState.tasks[index], completed: !completed}
        return {
          tasks: curState.tasks
        }
      })
    }
  
    newTask = (name, description) => {
      this.setState(curState => {
        const tasknew = {
          id: curState.tasks.length +1,
          name: name,
          description: description,
          completed: false
        }
        const newState = [...curState.tasks, tasknew]
        return {tasks: newState} 
      })
    }
  
    render() { 
      return (
        <div>
          <NewTask newTask={this.newTask} />
          <Map state={this.state} handleClickChangeStatus={this.handleClickChangeStatus}/>
        </div>
      )
    }
  }

  export default MyToDoList