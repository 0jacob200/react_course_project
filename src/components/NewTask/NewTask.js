import React from 'react'
import {connect} from "react-redux"
import {handleTaskAdd} from "../../actions/task"
import {handleProjectTaskAdd} from "../../actions/project";

const mapDispatchToProps = (dispatch) => ({
    dispatchClick: (name, description, projectId) => dispatch(handleTaskAdd(name, description, projectId)),
    dispatchAddTaskToProj: (projId, taskId) => dispatch(handleProjectTaskAdd(projId, taskId))
})

class NewTaskComponent extends React.Component {
    state ={
      name: '',
      description: ''
    }
  
    handleChangeTask = (event) => {
      const {value, name} = event.currentTarget
      this.setState({[name]: value})
    }
  
    handleClick = () => {
        this.props.dispatchClick(this.state.name, this.state.description, this.props.projid)
        this.props.dispatchAddTaskToProj(this.props.projid, this.props.newid)
    }
  
    render() {
      return (
        <div>
          <p>Add name for new task:</p>
          <input id="nameInput" name="name" onChange={this.handleChangeTask} placeholder={''}/>
          <p>Add description:</p>
          <input id="descripInput" name="description" onChange={this.handleChangeTask} placeholder={''}/>
          <button type="reset" onClick={this.handleClick}>Add task</button>
      </div>
      )
    }
  }

const NewTask = connect(null,mapDispatchToProps)(NewTaskComponent)
export default NewTask