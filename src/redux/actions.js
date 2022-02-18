import {CREATE_TASK, DELETE_TASK, ENABLE_DISABLE_CHECKBOX, END_EDIT_TASK, START_EDIT_TASK} from "./types";

export function createTask(task) {
    return {
        type: CREATE_TASK,
        payload: task
    }
}

export function enableDisableCheckbox(id) {
    return {
        type: ENABLE_DISABLE_CHECKBOX,
        payload: id
    }
}

export function deleteTask(id) {
    return {
        type: DELETE_TASK,
        payload: id
    }
}

export function startEditTask(id) {
    return {
        type: START_EDIT_TASK,
        payload: id
    }
}

export function endEditTask(title) {
    return {
        type: END_EDIT_TASK,
        payload: title
    }
}