import React from 'react'
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    tasks: state.tasksById.tasksById,
})

const TaskComponent = ({id, tasks})=> {

    // handleClickChangeStatus = () => {
    //     const oldTask = this.props.tasksById[id]
    //     const newTask = {...oldTask, completed: !completed}
    //     return {
    //         tasksById: {...this.props.tasksById, [id]: newTask}
    //     }
    // }


    //console.log(tasks)
    return(
        <div className='task'>
          <p>Task name: { tasks[id].name }</p>
          <p>Task description: {tasks[id].description}</p>
          <p>Task completed: {String(tasks[id].completed)}</p>
          <button className="buttonChange" >Change status</button>
        </div>
    )
}

const Task = connect(mapStateToProps)(TaskComponent)
export default Task