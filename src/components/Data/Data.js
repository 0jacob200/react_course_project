import React from "react";

const dataproject = [
    {
        id: 0,
        name: '*Project1Name*',
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
        name: '*Project2name*',
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

// пример нормалтизованного стейта
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
    const normalizedProjects = {}
    const normalizedTasks = {}

    const normalizedState = {
        projectsById : normalizedProjects,
        tasksById : normalizedTasks
    }

    const getTaskId = (tasks) => {
        const tasksIds = []
        tasks.map(task => tasksIds.push(task.id))
        return tasksIds;
    }

    projects.map(proj => {
        const projTasks = proj.tasks;
        projTasks.map(it => {
            return normalizedTasks[it.id] = {
                id: it.id,
                name: it.name,
                description: it.description,
                completed: it.completed
            }
        })
        return normalizedProjects[proj.id] = {
            id: proj.id,
            name: proj.name,
            tasksIds: getTaskId(proj.tasks)
        }
    })
    //console.log(normalizedState)
    return normalizedState
}

export {dataproject, NormalisationState}