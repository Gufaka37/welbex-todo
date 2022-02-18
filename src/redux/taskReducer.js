import {CREATE_TASK, DELETE_TASK, ENABLE_DISABLE_CHECKBOX, END_EDIT_TASK, START_EDIT_TASK} from "./types";

const initialState = {
    tasks: [],
    edit: false,
    editedTaskId: ''
}

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TASK: {
            return {...state, tasks: [...state.tasks, action.payload]}
        }
        case ENABLE_DISABLE_CHECKBOX: {
            return {...state, tasks: state.tasks.map(task => {
                if (task.id === action.payload) {
                    return {...task, checked: !task.checked }}
                return task })
            }
        }
        case DELETE_TASK: {
            return {...state, tasks: state.tasks.filter((task) => task.id !== action.payload)}

        }
        case START_EDIT_TASK: {
            return  {...state, edit: true, editedTaskId: action.payload}
        }
        case END_EDIT_TASK: {
            return {...state, edit: false, tasks: state.tasks.map(task => {
                if (task.id === state.editedTaskId) {
                    return {...task, title: action.payload}}
                return task })
            }
        }
        default: return state;
    }
}