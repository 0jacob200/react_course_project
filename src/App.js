import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React from 'react'

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
    ]
  }

  render() {
    return (
      <Map state={this.state}/>
    )
  }
}

const Task = ({id, name, description, completed}) => {
  const changeStClick = () => {
    console.log(`Task ${id} completed status = ${completed}`)
  }

  return(
  <div className='task'>
    <p>Task name: { name }</p>
    <p>Task description: {description}</p>
    <p>Task completed: {completed}</p>
    <button className="buttonChange" onClick={changeStClick}>Change status completed</button>
  </div>
  )
}

const Map = ({state}) =>{
  return(
    <div>
      {state.tasks.map(tasks => <Task id={tasks.id} name={tasks.name} description={tasks.description} completed={String(tasks.completed)}/>)}
    </div>
  )
}

const App = () => {
  return(
  <MyTodoList/>
  )
}


/* Old code

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
