import React from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect, withRouter, Router  } from 'react-router-dom';
import { connect } from 'react-reduce'

import NewProject from '../NewProject/NewProject'
import Project from '../Project/Project'
import StartPage from '../StartPage/StartPage'
import TaskList from '../TaskList/TaskList'
// import { dataproject, NormalisationState} from '../Data/Data'

const mapStateToProps = (state) => ({
    projectsById: state.projectsById
})

class ProjectListComponent extends React.Component {
    //state = NormalisationState(dataproject)
    //
    // newProj = (name) =>{
    //   this.setState(curSt =>{
    //     const newID = Object.keys(this.state.projectsById).length + 1
    //     const newSt = {...curSt.projectsById, [newID]: {
    //       id: newID,
    //       name: name,
    //       tasksIds: []
    //       }}
    //     return {projectsById: newSt}
    //   })
    // }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={StartPage}/>
                    <Route exact path="/projects">
                        <NewProject newProj={this.newProj}/>
                        {this.props.projectsById.map(prj =>
                            <Project id={prj.id} tasksIds={prj.tasksById}
                                     name={prj.name}/>
                        )}
                    </Route>
                    <Route exact path='/projects/:projId'>
                        <TaskList/>
                    </Route>
                </Switch>
                <Redirect path="/"/>
            </div>
        )
    }
    // render() {
    //     return (
    //         <div>
    //             <Switch>
    //               <Route exact path="/" component={StartPage}/>
    //               <Route exact path="/projects">
    //                 <NewProject newProj={this.newProj}/>
    //                 {Object.values(this.state.projectsById).map(prj =>
    //                   <Project id={prj.id} tasksIds={prj.tasksById}
    //                     name={prj.name}/>
    //                 )}
    //               </Route>
    //               <Route exact path='/projects/:projId'>
    //                 <TaskList state={this.state}/>
    //               </Route>
    //             </Switch>
    //             <Redirect path="/"/>
    //         </div>
    //     )
    // }
}

const ProjectList = connect(mapStateToProps)(ProjectListComponent)

export default ProjectList
