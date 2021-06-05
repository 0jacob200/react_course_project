import React from 'react'

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
      this.props.newTask(this.state.name, this.state.description)
      this.setState(curState => {
          curState.name = ''
      })
    }
  
    render() {
      return (
        <div>
          <p>Add name for new project:</p>
          <input id="nameInput" name="name" value={this.state.newTask} onChange={this.handleChangeTask} placeholder={''}/>
          <p>Add description:</p>
          <input id="descripInput" name="description" value={this.state.newTask} onChange={this.handleChangeTask} placeholder={''}/>
          <button type="reset" onClick={this.handleClick}>Add task</button>
      </div>
      )
    }
  }

  export default NewProject