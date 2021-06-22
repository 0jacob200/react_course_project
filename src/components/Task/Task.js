import React from 'react'
import {connect} from "react-redux"
import { handleChangeStatus } from "../../actions/task"

const mapStateToProps = (state) => ({
    tasks: state.tasksById.tasksById,
})

const mapDispatchToProps = (dispatch) => ({
    dispatchOnStatusChange: (id, completed) => dispatch(handleChangeStatus(id, completed))
})

const TaskComponent = ({id, tasks, dispatchOnStatusChange})=> {

    const handleClickChangeStatus = () => {
        dispatchOnStatusChange(id, tasks[id].completed)
    }

    return(
        <div className='task'>
          <p>Task name: { tasks[id].name }</p>
          <p>Task description: {tasks[id].description}</p>
          <p>Task completed: {String(tasks[id].completed)}</p>
          <button className="buttonChange" onClick={() => handleClickChangeStatus()}>Change status</button>
        </div>
    )
}

const Task = connect(mapStateToProps, mapDispatchToProps)(TaskComponent)
export default Task