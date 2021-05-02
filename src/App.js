import logo from './logo.svg';
//import './App.css';
import { render } from '@testing-library/react';
import React from 'react'

/*
ДЗ 4 - Add tasks - deadline 23:59 30.04
Необходимо реализовать добавление задач в TaskTracker:

Должны появится инпуты для ввода name имени и description описания задачи

Кнопка для добавления задачи с введенными именем и описанием в список задач

Разделить приложение на разные компоненты, например 
(не обязательно именно такое разделение):

App - корневой
Task - рисует одну таску
TaskList - рисует список тасок
TaskAdd - два инпута для ввода имени и описания
Для каждого компонента отдельная папка components/ComponentName,
 внутри которой js файл для самого компонента и css файл для его стилизации

При нажатии на кнопу внутри таски ее свойство completed должно меняться 
на противоположное. Это изменение должно быть отображено на UI.
Для реализации этого пункта вам понадобится метод массива findIndex. 
Будте внимательны, не допускайте мутаций стейта!

Новое дз - новая ветка и новый PR
*/

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
    newTask: {
      id: NaN,
      name: '',
      description: '',
      completed: false
    }
  }

  handleAddDataTask = (event) =>{
    var { value, name} = event.currentTarget
    //console.log(value)
    //console.log(name)
    this.state.newTask[name] = value
  }

  handleAddTask = (event) => {
    const newObj = {... this.state.newTask}
    newObj.id = this.state.tasks.length + 1
    this.setState((stateChange)=> {
      this.state.newTask.id = NaN
      this.state.newTask.name = ""
      this.state.newTask.description = ""
      return stateChange.tasks.push(newObj)
    })
  }

  TaskAdd = (state) => {
    return(
    <div>
      <p>Add name for new task:</p>
      <input id="nameInput" name="name" value={state.newTask} onChange={this.handleAddDataTask}/>
      <p>Add description:</p>
      <input id="descripInput" name="description" value={state.newTask} onChange={this.handleAddDataTask}/>
      <button onClick={this.handleAddTask}>Add task</button>
    </div>
    )
  }

  render() { 
    return (
      <div>
        <this.TaskAdd state={this.state}   />
        <Map state={this.state}/>
      </div>
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
    <button className="buttonChange" onClick={changeStClick}>Change status</button>
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

export default App;
