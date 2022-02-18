import React from "react";
import {useSelector} from "react-redux";
import {Task} from "./task/Task";

export const CompletedTasks = () => {
    const tasks = useSelector(state => state.tasks.tasks);

    if (!tasks.length) {
        return <p className="text-center">Выполненых тасков пока нет!</p>
    }

    return tasks.map(task => {
        if (task.checked) {
            return <Task task={task} key={task.id} />
        }
    })
}