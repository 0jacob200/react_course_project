import {PROJECT_TASK_ADD} from "../actions/project";
import {PROJECT_ADD} from "../actions/project";
import { dataproject, NormalisationState} from "../components/Data/Data";

const { projectsById, tasksById } = NormalisationState(dataproject)

const initialState = {
    projects: projectsById,
    tasks: tasksById
}

const projectreducer = (state = initialState, action) => {
    switch (action.type) {
        case PROJECT_ADD: {
            const projectId = Object.keys(state.projects).length + 1
            const newProject = {
                id: projectId,
                name: action.name,
                tasks: []
            }
            const newProjects = { ...state.projects }
            newProjects[projectId] = newProject
            return {
                ...state,
                projects: newProjects
            }
        }
        case PROJECT_TASK_ADD: {
            const projectId = action.projectId
            const taskId = action.taskId
            let newProjTasks = { ...state.projects }
            newProjTasks[projectId].tasks = [...newProjTasks[projectId].tasks, taskId]
            return {
                ...state,
                projects: newProjTasks
            }
        }
        default:
            return state;
    }
}

export default projectreducer
