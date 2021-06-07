import React from 'react'

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
        name: 'Учеба',
        tasksIds: [1]
      },
      2: {
        id: 2,
        name: 'Дом',
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

/*
const NormalisationState = (stateToNorm) => {
    return stateToNorm
}
*/

export default dataproject