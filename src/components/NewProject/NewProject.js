import React from 'react'
import { connect } from 'react-redux'
import {handleProjectAdd} from "../../actions/project";

const mapDispatchToProps = (dispatch) => ({
    dispatchProjAdd: (name) => dispatch(handleProjectAdd(name))
})

class NewProjectComponent extends React.Component {
    state ={
        name: ''
    }

    handleChangeTask = (event) => {
      const {value, name} = event.currentTarget
      this.setState({[name]: value})
    }
  
    handleClick = () => {
        this.props.dispatchProjAdd(this.state.name)
    }
  
    render() {
        return (
            <div>
               <p>Add name for new project:</p>
               <input id="nameInput" name="name" value={this.state.newTask} onChange={this.handleChangeTask} placeholder={''}/>
               <button type="reset" onClick={this.handleClick}>Add project</button>
            </div>
        )
    }
}


const NewProject = connect(null, mapDispatchToProps)(NewProjectComponent)
export default NewProject