import React from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect, withRouter, Router  } from 'react-router-dom';

import NewProject from '../NewProject/NewProject'
import Project from '../Project/Project'
import StartPage from '../StartPage/StartPage'
import TaskList from '../TaskList/TaskList'

const dataproject = [
    {
        id: 0,
        name: 'Project 1',
        tasks: [
            {
                id: 0,
                name: '1.1',
                description: 'www',
                completed: false
            },
            {
                id: 1,
                name: '1.2',
                description: 'eee',
                completed: true
            },
        ]
    },
    {
        id: 1,
        name: 'Project 2',
        tasks: [
            {
                id: 2,
                name: '2.1',
                description: 'ggg',
                completed: false
            },
            {
                id: 3,
                name: '2.2',
                description: 'lhnv',
                completed: false
            },
        ]
    },
]


// const dataproject = {
//     projectsById: {
//         1: {
//             id: 1,
//             name: 'Учеба',
//             tasksIds: [1]
//         },
//         2: {
//             id: 2,
//             name: 'Дом',
//             tasksIds: [2]
//         },
//         // ...
//     },
//     tasksById: {
//         1: {
//             id: 1,
//             name: 'Task #1',
//             description: 'descr',
//             completed: false,
//         },
//         2: {
//             id: 2,
//             name: 'Task #2',
//             description: 'descr',
//             completed: true,
//         },
//         // ...
//     }
// }


const NormalisationState = (projects) => {

    const normalizeBy = (key) => {
        return (data, item) => {
            data[item[key]] = item
            return data
        }
    }

    const normTasks =
        projects.map(project =>
            project.tasks).flat().reduce(normalizeBy('id'),
            {})

    const normProject = projects.map(project =>
        ({
            ...project,
            tasksIds: project.tasks.map(task => task.id)
        })).reduce(normalizeBy('id'),
        {})

    const normState = {
        projectsById: normProject,
        tasksById: normTasks,
    }

    return normState
}

class ProjectList extends React.Component {
    state = NormalisationState(dataproject)

    newProj = (name) =>{
      this.setState(curSt =>{
        const newID = Object.keys(this.state.projectsById).length + 1
        const newSt = {...curSt.projectsById, [newID]: { 
          id: newID,
          name: name,
          tasksIds: []
          }}
        return {projectsById: newSt}
      })
    }



    render() {
        return (
            <div>
                <Switch>
                  <Route exact path="/" component={StartPage}/>
                  <Route exact path="/projects">
                    <NewProject newProj={this.newProj}/>
                    {Object.values(this.state.projectsById).map(prj => 
                      <Project id={prj.id} tasksIds={prj.tasksById}
                        name={prj.name}/>
                    )}
                  </Route>
                  <Route exact path='/projects/:projId'>
                    <TaskList state={this.state}/>
                  </Route>
                </Switch>
                <Redirect path="/"/>
            </div>
        )
    }
}

export default ProjectList