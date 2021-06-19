import React from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect, withRouter, Router  } from 'react-router-dom';
import { connect } from 'react-redux'

import NewProject from '../NewProject/NewProject'
import Project from '../Project/Project'
import StartPage from '../StartPage/StartPage'
import TaskList from '../TaskList/TaskList'
// import { dataproject, NormalisationState} from '../Data/Data'

const mapStateToProps = (state) => ({
    projectsById: state.projectsById.projectsById
})

class ProjectListComponent extends React.Component {

    render() {
        //console.log(this.props.projectsById)
        //console.log(Object.values(this.props.projectsById))
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={StartPage}/>
                    <Route exact path="/projects">
                        <NewProject/>
                        {Object.values(this.props.projectsById).map(prj =>
                            <Project key={prj.id} id={prj.id} tasksIds={prj.tasksById}
                                     name={prj.name}/>)}
                    </Route>
                    <Route exact path='/projects/:projId'>
                        <TaskList/>
                    </Route>
                </Switch>
                <Redirect path="/"/>
            </div>
        )
    }
}

const ProjectList = connect(mapStateToProps)(ProjectListComponent)

export default ProjectList
