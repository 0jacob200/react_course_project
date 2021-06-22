import ApiService from "../components/ApiService/ApiService"

export const PROJECT_ADD = 'PROJECT_ADD'
export const PROJECT_TASK_ADD = 'PROJECT_TASK_ADD'
export const LOAD_DATA = 'LOAD_DATA'
export const LOAD_TASKS = 'LOAD_TASKS'

export const fetchDataLoaded = () => (dispatch) => {
    const api = new ApiService()
    api.loadProj().then(resp => {
        const { projectsById, tasksById } = resp
        dispatch({
            type: LOAD_DATA,
            projectsById: projectsById,
            tasksById: tasksById
        })
    })
}

export const fetchTasksLoad = (projectId) => (dispatch) => {
    const api = new ApiService()
    api.loadTasks(projectId).then( response => {
        const tasks = response
        dispatch({
            type: LOAD_TASKS,
            tasks: tasks
        })
    })
}

export const fetchProjectUpload = (name) => (dispatch) => {
    const api = new ApiService()
    api.uploadNewProj(name)
        .then(() => dispatch(fetchDataLoaded()))
}

export const fetchTaskUpload = (projectId, name, description) => (dispatch) => {
    const api = new ApiService()
    api.uploadNewTask(projectId, name, description)
        .then(() => dispatch(fetchDataLoaded()))
}

export const fetchStatusChange = (projectId, id, name, description, completed) => (dispatch) => {
    const api = new ApiService()
    api.changeStatus(projectId, id, name, description, completed)
        .then(() => dispatch(fetchTasksLoad(projectId)))
}

// export const handleProjectAdd = (name) => ({
//     type: PROJECT_ADD,
//     name: name
// })
//
// export const handleProjectTaskAdd = (projectId, taskId) => ({
//     type: PROJECT_TASK_ADD,
//     projectId: projectId,
//     taskId: taskId
// })