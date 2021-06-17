import logo from './logo.svg';
import { render } from '@testing-library/react';
import React from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect, withRouter  } from 'react-router-dom'
import  { createStore} from "redux"
import { Provider } from 'react-redux'

//import './App.css';
//import TaskList from './components/TaskList/TaskList'
import ProjectList from './components/ProjectList/ProjectList'
//import NewProject from './components/NewProject/NewProject'
//import StartPage from './components/StartPage/StartPage'
import {rootReducer} from "./reducers/rootreducer";

/* ДЗ 7 - Redux - deadline 23:59 06.06

Необходимо подключить redux к проекту
1. Хранение тасок и проектов в нормализованном виде в redux
2. Любые действия с тасками и проектами должны осуществляться через actions

Шаги для подключения redux:
1. Установить redux, react-redux +
2. Создать reducer +
3. Создать store +
4. Обернуть весь проект в Provider +
5. Создать actions
6. Подключть компоненты к стору через connect
*/

/*
ДЗ 8 - Client-server communication - deadline 23:59 16.06
Необходимо связать приложение с сервером.

    Требования:

Любые действия с проектами и тасками осуществляются через backend
Функция request - обертка над fetch. Могут быть также реализованы отдельные ф-ии get, post и тд для еще большего удобства. Этот функционал может быть реализован в виде класса ApiService.
    Каждый апи вызов - это отдельная функция или это методы класса ApiService
Сохранять полученные данные нужно в redux store

Документация к API*ссылка*
 */

 /* ДЗ 5 - Styling - deadline 23:59 19.05 (можно сдать до 22.06)

1. Необходимо стилизовать проект по своему вкусу, используя
- css модули (Filename.module.scss)
- scss синтаксис (npm install node-sass@5) - использование знака &
- библиотека classnames - условные стили
- flexbox - вся верстка должна быть осуществлена на нем

2.Добавить возможность переключения тем - светлая/темная.
Значение выбранной темы хранить в стейте корневого компонента. Потребителям поставлять
с помощью context API. НЕ КЛАСТЬ В КОНТЕКСТ МАССИВ ЗАДАЧ!
*/

const store = createStore(rootReducer)


const App = () => {
  return(
      <Provider store={store}>
          <BrowserRouter>
              <Route path="/" component={Header}/>
              <ProjectList/>
          </BrowserRouter>
      </Provider>
  )
}

const Header = () => {
  return (
    <div>
      <h2>Menu of Task Manager</h2>
      <ul>
        {/* <li>
          <Link to="/newproject">Add New Project</Link>
        </li> */}
        <li>
          <Link to="/projects">Project List</Link>
        </li>
      </ul>
    </div>
  )
}

export default App;
