import React from 'react'
import { connect } from 'react-redux'

import Map from '../Map/Map'
import NewTask from '../NewTask/NewTask'

const mapStateToProps = (state) => ({
    tasksById: state.tasksById
})


class TaskListComponent extends React.Component {
    //state = this.props.state

    handleClickChangeStatus = (id, completed) => {
        const oldTask = this.props.tasksById[id]
        const newTask = {...oldTask, completed: !completed}
        return {
            tasksById: {...this.props.tasksById, [id]: newTask}
        }
    }

    getProjectTask = (projId) => {
      const project = this.state.projectsById[projId]
      const { tasksIds } = project
      const tasks = tasksIds.map(taskId => this.state.tasksById[taskId])
      return tasks
    }

    newTask = (name, description) =>{
        const newID = Object.keys(this.state.tasksById).length + 1
        this.addNewTaskToProj(newID)
        this.setState(curSt =>{
            const newSt = {...curSt.tasksById, [newID]: {
            id: newID,
            name: name,
            description: description,
            completed: false
            }}
            return {tasksById: newSt}
        })

    }

    addNewTaskToProj = (idTask) => {
        const taskslist = this.state.projectsById[this.getIdProject()].tasksIds
        taskslist.push(idTask)
        //console.log(taskslist)
        this.setState(curSt => {
            const newSt = {...curSt.projectsById}
            newSt[this.getIdProject()] = {...newSt[this.getIdProject()]}
            //console.log(newSt)
            newSt[this.getIdProject()].tasksIds = taskslist
            //console.log(newSt)
            return {projectsById: newSt}
        })
    }

    getIdProject = () => {
        const url = window.location.pathname
        const id = url.slice(10)
        return id
    }

    render() {
      return (
        <div>
          <h3>Tasks of Project {this.getIdProject()} </h3>
          <NewTask newTask={this.newTask} />
          <Map tasks={this.getProjectTask(this.getIdProject())} handleClickChangeStatus={this.handleClickChangeStatus}/>
        </div>
      )
    }
  }

  const TaskList = connect(mapStateToProps)(TaskListComponent)
  export default TaskList