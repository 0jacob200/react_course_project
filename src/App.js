import logo from './logo.svg';
import { render } from '@testing-library/react';
import React from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect, withRouter  } from 'react-router-dom'
import  { createStore} from "redux"
import { Provider } from 'react-redux'

import ProjectList from './components/ProjectList/ProjectList'
import {rootReducer} from "./reducers/rootreducer";


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
        <li>
          <Link to="/projects">Project List</Link>
        </li>
      </ul>
    </div>
  )
}

export default App;
