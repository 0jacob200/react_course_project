import React from 'react'
import { connect } from 'react-redux'

import NewTask from '../NewTask/NewTask'
import Task from "../Task/Task";

const mapStateToProps = (state) => ({
    projectsById: state.projectsById.projectsById[getIdProject()],
    tasksById: state.tasksById.tasksById

    // projectsById: state.projectsById.projectsById[getIdProject()], //правильно но не работает
    // tasksById: state.tasksById.tasksById
})

const getIdProject = () => {
    const url = window.location.pathname
    const id = url.slice(10)
    return id
}

class TaskListComponent extends React.Component {
    NewTaskId = () => {
        return Object.keys(this.props.tasksById).length + 1
    }

    getProjectTask = () => {
        const project = this.props.projectsById
        const { tasksIds } = project
        const tasks = tasksIds.map(taskId => this.props.tasksById[taskId])
        return tasks
    }

    render() {
        return (
            <div>
                <h3>Tasks of Project {this.props.projectsById.name}</h3>
                <NewTask projid={getIdProject()} newid={ this.NewTaskId()}/>
                {this.getProjectTask().map(task => <Task id={task.id} key={task.id}/>)}

            </div>
        )
    }
}

const TaskList = connect(mapStateToProps)(TaskListComponent)
export default TaskList