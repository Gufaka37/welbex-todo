import React from "react";
import {useSelector} from "react-redux";
import {Task} from "./Task";

export const Tasks = () => {
    const tasks = useSelector(state => state.tasks.tasks);

    if (!tasks.length) {
        return <p className="text-center">Тасков пока нет!</p>
    }
    return tasks.map(task => <Task task={task} key={task.id} />);
}