import logo from './logo.svg';
//import './App.css';
import { render } from '@testing-library/react';
import React from 'react'
import MyToDoList from './components/MyToDoList/MyToDoList'

/*
ДЗ 4 - Add tasks - deadline 23:59 30.04
1. Необходимо реализовать добавление задач в TaskTracker:
Должны появится инпуты для ввода name имени и description описания задачи
Кнопка для добавления задачи с введенными именем и описанием в список задач

2. Разделить приложение на разные компоненты, например 
(не обязательно именно такое разделение):
App - корневой
Task - рисует одну таску
TaskList - рисует список тасок
TaskAdd - два инпута для ввода имени и описания
Для каждого компонента отдельная папка components/ComponentName, 
внутри которой js файл для самого компонента и css файл для его стилизации

3. При нажатии на кнопу внутри таски ее свойство completed должно меняться 
на противоположное. Это изменение должно быть отображено на UI.
Для реализации этого пункта вам понадобится метод массива findIndex. 
Будте внимательны, не допускайте мутаций стейта!


ДЗ 5 - Styling - deadline 23:59 19.05
1. Необходимо стилизовать проект по своему вкусу, используя
css модули (Filename.module.scss)
scss синтаксис (npm install node-sass@5) - использование знака &
библиотека classnames - условные стили
flexbox - вся верстка должна быть осуществлена на нем

2.Добавить возможность переключения тем - светлая/темная. 
Значение выбранной темы хранить в стейте корневого компонента. Потребителям поставлять 
с помощью context API. НЕ КЛАСТЬ В КОНТЕКСТ МАССИВ ЗАДАЧ!
*/

/*
class MyToDoList extends React.Component {
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

  handleClickChangeStatus = (props) => {
    this.setState(curState =>{
      let index = [...curState.tasks].findIndex(x => x.id === props.id)
      curState.tasks[index] = {...curState.tasks[index], completed: !props.completed}
      return {
        tasks: curState.tasks
      }
    })
  }

  newTask = (name, description) => {
    this.setState(curState => {
      const tasknew = {
        id: curState.tasks.length +1,
        name: name,
        description: description,
        completed: false
      }
      const newState = [...curState.tasks, tasknew]
      return {tasks: newState} 
    })
  }

  render() { 
    return (
      <div>
        <NewTask newTask={this.newTask} />
        <Map state={this.state} handleClickChangeStatus={this.handleClickChangeStatus}/>
      </div>
    )
  }
}
*/

/*
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
  }

  render() {
    return (
      <div>
        <p>Add name for new task:</p>
        <input id="nameInput" name="name" value={this.state.newTask} onChange={this.handleChangeTask}/>
        <p>Add description:</p>
        <input id="descripInput" name="description" value={this.state.newTask} onChange={this.handleChangeTask}/>
        <button type="reset" onClick={this.handleClick}>Add task</button>
    </div>
    )
  }
}
*/

/*
const Task = ({id, name, description, completed, handleClickChangeStatus}) => {
  
  const changeStatusClick = () => {
    console.log(`Task ${id} completed status = ${completed}`)
    handleClickChangeStatus(id, completed)
  }
  
  return(
  <div className='task'>
    <p>Task name: { name }</p>
    <p>Task description: {description}</p>
    <p>Task completed: {completed}</p>
    <button className="buttonChange" onClick={()=> handleClickChangeStatus(id, completed)}>Change status</button>
  </div>
  )
}
*/

/*
const Map = ({state, handleClickChangeStatus}) =>{
  return(
    <div>
      {state.tasks.map(tasks => <Task id={tasks.id} name={tasks.name} description={tasks.description} 
      completed={String(tasks.completed)} handleClickChangeStatus={handleClickChangeStatus}/>)}
    </div>
  )
}
*/

const App = () => {
  return(
  <MyToDoList/>
  )
}

export default App;
