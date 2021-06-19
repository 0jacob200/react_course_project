import React from 'react'
import { connect } from 'react-redux'

class NewProject extends React.Component {
    state ={
        id: NaN,
        name: '',
        tasksIds: []
    }

    handleChangeTask = (event) => {
      const {value, name} = event.currentTarget
      this.setState({[name]: value})
    }
  
    handleClick = (props) => {
      this.props.newProj(this.state.name)
      this.setState(curState => {
          const cleardata = {
            id: NaN,
            name: '',
            tasksIds: []
          }
          return cleardata
      })
    }
  
    render() {
      return (
        <div>
          <p>Add name for new project:</p>
          <input id="nameInput" name="name" value={this.state.newTask} onChange={this.handleChangeTask} placeholder={''}/>
          <button type="reset" onClick={this.handleClick}>Add task</button>
      </div>
      )
    }
  }

  export default NewProject