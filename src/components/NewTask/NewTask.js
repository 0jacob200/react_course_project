import React from 'react'
class NewTask extends React.Component {
    state ={
      name: '',
      description: ''
    }
  
    handleChangeTask = (event) => {
      const {value, name} = event.currentTarget
      this.setState({[name]: value})
    }
  
    handleClick = (props) => {
      this.props.newTask(this.state.name, this.state.description)
      this.setState(curState => {
            curState.name = ''
            curState.description = ''
      })
    }
  
    render() {
      return (
        <div>
          <p>Add name for new task:</p>
          <input id="nameInput" name="name" value={this.state.newTask} onChange={this.handleChangeTask} placeholder={''}/>
          <p>Add description:</p>
          <input id="descripInput" name="description" value={this.state.newTask} onChange={this.handleChangeTask} placeholder={''}/>
          <button type="reset" onClick={this.handleClick}>Add task</button>
      </div>
      )
    }
  }

  export default NewTask