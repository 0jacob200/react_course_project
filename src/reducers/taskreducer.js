import {CHANGE_STATUS} from "../actions/task";
import {TASK_ADD} from "../actions/task";
import {dataproject, NormalisationState} from "../components/Data/Data";

const NormState = NormalisationState(dataproject)
const initialState = {
    tasksById: NormState.tasksById
}

const taskreducer = (state = initialState, action) => {
    switch (action.type) {
        case TASK_ADD: {
            const taskId = Object.keys(state.tasksById).length + 1
            const newTasks = { ...state.tasksById }
            const newTask = {
                id: taskId,
                name: action.name,
                description: action.description,
                completed: false
            }
            newTasks[taskId] = newTask
            return {
                ...state,
                tasksById: newTasks
            }
        }
        case CHANGE_STATUS: {
            const taskId = action.id
            const newTasks = { ...state.tasksById }
            newTasks[taskId].completed = !action.completed
            return {
                ...state,
                tasksById: newTasks
            }
        }
        default:
            return state;
    }
}

export default taskreducer