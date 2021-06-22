export const TASK_ADD = 'TASK_ADD'
export const CHANGE_STATUS = 'CHANGE_STATUS'

export const handleTaskAdd = (name, description, projectId) => ({
    type: TASK_ADD,
    projectId: projectId,
    name: name,
    description: description
})

export const handleChangeStatus = (id, completed) => ({
    type: CHANGE_STATUS,
    id: id,
    completed: completed
})