import {CREATE_TASK} from "./types";

export function createTask(task) {
    return {
        type: CREATE_TASK,
        payload: task
    }
}