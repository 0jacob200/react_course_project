import React from 'react'
import { connect } from 'react-redux'

//import Map from '../Map/Map'
import NewTask from '../NewTask/NewTask'
import Task from "../Task/Task";

const mapStateToProps = (state) => ({
    projectsById: state.projectsById.projectsById[getIdProject()],
    tasksById: state.tasksById.tasksById
})

const getIdProject = () => {
    const url = window.location.pathname
    const id = url.slice(10)
    return id
}

class TaskListComponent extends React.Component {
    //state = this.props.state
    //
    // handleClickChangeStatus = (id, completed) => {
    //     const oldTask = this.props.tasksById[id]
    //     const newTask = {...oldTask, completed: !completed}
    //     return {
    //         tasksById: {...this.props.tasksById, [id]: newTask}
    //     }
    // }
    //
    // newTask = (name, description) =>{
    //     const newID = Object.keys(this.state.tasksById).length + 1
    //     this.addNewTaskToProj(newID)
    //     this.setState(curSt =>{
    //         const newSt = {...curSt.tasksById, [newID]: {
    //         id: newID,
    //         name: name,
    //         description: description,
    //         completed: false
    //         }}
    //         return {tasksById: newSt}
    //     })
    //
    // }
    //
    // addNewTaskToProj = (idTask) => {
    //     const taskslist = this.state.projectsById[this.getIdProject()].tasksIds
    //     taskslist.push(idTask)
    //     //console.log(taskslist)
    //     this.setState(curSt => {
    //         const newSt = {...curSt.projectsById}
    //         newSt[this.getIdProject()] = {...newSt[this.getIdProject()]}
    //         //console.log(newSt)
    //         newSt[this.getIdProject()].tasksIds = taskslist
    //         //console.log(newSt)
    //         return {projectsById: newSt}
    //     })
    // }
    //

    getProjectTask = () => {
        //const project = this.props.projectsById[this.getIdProject()]
        const project = this.props.projectsById
        const { tasksIds } = project
        const tasks = tasksIds.map(taskId => this.props.tasksById[taskId])
        return tasks
    }

    render() {
        //console.log(this.props.tasksById)
        return (
            <div>
                <h3>Tasks of Project {this.props.projectsById.name}</h3>
                {/*<NewTask newTask={this.newTask} />*/}
                {this.getProjectTask().map(task => <Task id={task.id} key={task.id}/>)}

            </div>
        )
    }
}

  const TaskList = connect(mapStateToProps)(TaskListComponent)
  export default TaskList