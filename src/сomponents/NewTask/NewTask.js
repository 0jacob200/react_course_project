//import { render } from '@testing-library/react'
import React from 'react'
//import MyToDoList from './/..//MyToDoList/MyToDoList'

class NewTask extends React.Component {
    state = {
        id: NaN,
        name: "",
        description: "",
        completed: false
    }

    // onChange = (e) => {
    //     const {value, name} = e.currentTarget

    //     this.setState({[name]: value})
    // } 

    // onClick= (e) => {
    //     const newObj = {... this.state}
    //     newObj.id = 99
    //     this.setState((stateChange)=> {
    //         stateChange.id = NaN
    //         stateChange.name = ""
    //         stateChange.description = ""
    //         return stateChange
    //     })
    //     //this.data.tasks
    //     //MyToDoList.AddNewTask(this.state)
    // }

    render() {
        console.log()
        return(<div>sdfdslfjdol</div>)
        //     <div>
        //         <p>Add name for new task:</p>
        //         <input name="name" value={this.state.name} onChange={this.onChange}/>
        //         <p>Add description:</p>
        //         <input name="description" value={this.state.description} onChange={this.onChange}/>
        //         <button onClick={this.onClick}>Add task</button>
        //     </div>
        // )
    }
}

export default NewTask