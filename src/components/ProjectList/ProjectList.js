import React from 'react'
import Project from '../Project/Project'

/*
const DataProjectNotNorm = [
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
            id: 0,
            name: '2.1',
            description: 'ggg',
            completed: false
          },
          {
              id: 1,
              name: '2.2',
              description: 'lhnv',
              completed: false
            },
        ]
    },
]
*/

const dataproject = {
    projectsById: {
      1: {
        id: 1,
        name: 'Project 1',
        tasksIds: [1]
      },
      2: {
        id: 2,
        name: 'Project 2',
        tasksIds: [2]
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

const NormalisationState = (stateToNorm) => {
    return stateToNorm
}

class ProjectList extends React.Component {
    state = NormalisationState(dataproject)

    newProject = (name, tasksIds) => {
        //this.setState()
        const prjnew = {
            id: Object.keys(this.state.projectsById) +1,
            name: name,
            tasksIds: tasksIds
        }
        this.state.projectsById = [...this.state.projectsById, prjnew]
        return
    }

    render() {
        //console.log(Object.keys(this.state.projectsById))
        return (
            <div>
                {Object.values(this.state.projectsById).map(prj => 
                    <Project id={prj.id} tasksIds={prj.tasksById} name={prj.name}/>
                )}
            </div>
        )
    }
}

export default ProjectList