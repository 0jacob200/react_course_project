import React from 'react';
import Map from './..//..//App';

class MyTodoList extends React.Component {
    state = {
      tasks: [
        {
          id: 1,
          name: 'Name task 1',
          description: 'Doing somthing 1',
          completed: false
        },{
          id: 2,
          name: 'Name task 2',
          description: 'Doing somthing 2',
          completed: true
        },{
          id: 3,
          name: 'Name task 3',
          description: 'Doing somthing 3',
          completed: false
        },{
          id: 4,
          name: 'Name task 4',
          description: 'Doing somthing 4',
          completed: true
        },{
          id: 5,
          name: 'Name task 5',
          description: 'Doing somthing 5',
          completed: false
        },{
          id: 6,
          name: 'Name task 6',
          description: 'Doing somthing 6',
          completed: true
        }
      ],
    }

    // AddNewTask = (newTask) => {
    //   this.state.tasks.push(newTask)
    // }
  
    render() { 
      return (<div>dsfsdgsd</div>)
      //   <div>
      //     <NewTask data={this.state}/>
      //     <Map state={this.state}/>
      //   </div>
      // )
    }
  }

export default MyTodoList  