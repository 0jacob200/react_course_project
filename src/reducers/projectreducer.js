import {PROJECT_TASK_ADD} from "../actions/project";
import {PROJECT_ADD} from "../actions/project";
import { dataproject, NormalisationState} from "../components/Data/Data";

const { projectsById } = NormalisationState(dataproject)

const initialState = {
    // projectsById: NormalisationState(dataproject).projectsById.projectsById // правильно но не работает

    projectsById: projectsById
}

const projectreducer = (state = initialState, action) => {
    switch (action.type) {
        case PROJECT_ADD: {
            const projectId = Object.keys(state.projectsById).length + 1
            const newProject = {
                id: projectId,
                name: action.name,
                tasks: []
            }
            const newProjects = { ...state.projectsById }
            newProjects[projectId] = newProject
            return {
                ...state,
                projectsById: newProjects
            }
        }
        case PROJECT_TASK_ADD: {
            const projectId = action.projectId
            const taskId = action.taskId
            let newProjTasks = { ...state.projectsById}
            newProjTasks[projectId].tasksIds = [...newProjTasks[projectId].tasksIds, taskId]
            return {
                ...state,
                projectsById: newProjTasks
            }
        }
        default:
            return state;
    }
}

export default projectreducer
