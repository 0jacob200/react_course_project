import logo from './logo.svg';
import { render } from '@testing-library/react';
import React from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect, withRouter  } from 'react-router-dom';

//import './App.css';

//import TaskList from './components/TaskList/TaskList'
import ProjectList from './components/ProjectList/ProjectList'
//import NewProject from './components/NewProject/NewProject'
//import StartPage from './components/StartPage/StartPage'


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

/* ДЗ 6 - React router - deadline 23:59 26.05 (на 02.06 макс 8,9)
Необходимо подключить react-router-dom к проекту

Появляется новая сущность - projects. Project ~ папка для создания задач внутри. 
Например, "Домашние дела", "Универ", "Список покупок" и тд.

В вашем react-проекте должно быть как минимум 2 страницы:

страница со списком всех проектов
создание нового проекта либо на этой же странице, либо на отдельной
страница проекта; в url должен быть отражен id project'a
на странице проекта отоброжаются все таски, принадлежащие данному проекту.
создание новой таски либо на странице проекта, либо отдельная страница
При попытке перехода по несуществующему url необходимо редиректить на страницу со списком проектов
 или на страницу 404

Желательно предусмотреть навигацию между страницами, чтобы со страницы конкретного проекта 
можно было вернуться к списку проектов

Нормализовать стейт. В этом пунтке нужно написать ф-ию для преобразования массива проектов из такого формата

projects = [
  {
    id: 1234,
    name: 'Project name',
    tasks: [
      {
        id: 4321,
        name: '',
        description: '',
        completed: false
      },
      // ...
    ]
  },
  // ...
]
в такой

state = {
  projectsById: {
    1: {
      id: 1,
      name: 'Project name',
      tasksIds: [1, 2, 3]
    },
    2: {
      id: 1,
      name: 'Project name 2',
      tasksIds: [4, 5]
    },
    // ...
  },

  tasksById: {
    1: {
      id: 1,
      name: 'Task #1',
      description: 'descr',
      completed: false,
    },
    2: {
      id: 2,
      name: 'Task #2',
      description: 'descr',
      completed: true,
    },
    // ...
  }
}
т.е. должна появиться ф-ия

const normalizeState = (projectArray) => { // projectArray - массив проектов из первого код сниппета
  // some magic
  return normalizedState // normalizedState - нормализованный стейт из второго код сниппета
}
Это необходимо для более легкой интеграцией с беком в будущем, тк он будет отвечать в похожем 
на первый код сниппет формате.

Стилизовать можно как угодно, это оцениваться не будет.
*/

/* ДЗ 7 - Redux - deadline 23:59 06.06

Необходимо подключить redux к проекту

Хранение тасок и проектов в нормализованном виде в redux
Любые действия с тасками и проектами должны осуществляться через actions
Шаги для подключения redux:

Установить redux, react-redux
Создать reducer
Создать store
Обернуть весь проект в Provider
Создать actions
Подключть компоненты к стору через connect
*/

const App = () => {
  return(
    <BrowserRouter>
      {/* <Route path="/" component={Header}/>
      <Switch>
        <Route exact path="/" component={StartPage}/>
        <Route exact path="/projects" component={ProjectList}/>
        //<Route exact path="/newproject" component={NewProject}/>
        <Route exact path="/projects/:projectId" component={TaskList}/>
        <Redirect to="/" />
      </Switch> */}
      <Route path="/" component={Header}/>
      <ProjectList/>
    </BrowserRouter>
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
