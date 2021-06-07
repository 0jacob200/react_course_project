import React from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect, withRouter, Router  } from 'react-router-dom';

import NewProject from '../NewProject/NewProject'
import Project from '../Project/Project'
import dataproject from '../Data/Data'
import StartPage from '../StartPage/StartPage'
import TaskList from '../TaskList/TaskList'

class ProjectList extends React.Component {
    state = dataproject

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
    
    //ProjIdPrint =

    ProjectIdentify = (id) => {
      const oldState = this.state
      const newState = {...oldState, idProjRender: id  }
      this.state = newState
    }

    render() {
        return (
            <div>
                <Switch>
                  <Route exact path="/" component={StartPage}/>
                  <Route exact path="/projects">
                    <NewProject newProj={this.newProj}/>
                    {Object.values(this.state.projectsById).map(prj => 
                      <Project key={prj.id} tasksIds={prj.tasksById} 
                        name={prj.name} onClick={ProjectIdentify}/>
                    )}
                  </Route>
                  <Route exact path='/projects/:projId'>
                    <TaskList state={this.state}/>
                  </Route>
                </Switch>
            </div>
        )
    }
}

export default ProjectList