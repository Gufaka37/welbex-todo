import React from "react";
import './task.css';
import {useDispatch} from "react-redux";
import {deleteTask, enableDisableCheckbox, startEditTask} from "../../redux/actions";

export const Task = ({task}) => {
    const dispatch = useDispatch();

    return (
        <div className="card blue-grey lighten-5  task-card">
            <div className="card-content">
                <input
                    type="checkbox"
                    className="filled-in"
                    checked={task.checked}
                    onChange={() => dispatch(enableDisableCheckbox(task.id))}
                />
                <span onClick={() => dispatch(enableDisableCheckbox(task.id))}>{task.title}</span>
                <div className="task-controls">
                    <i className="material-icons" onClick={() => dispatch(startEditTask(task.id))}>edit</i>
                    <i className="material-icons" onClick={() => dispatch(deleteTask(task.id))}>delete_forever</i>
                </div>
            </div>
        </div>
    );
}