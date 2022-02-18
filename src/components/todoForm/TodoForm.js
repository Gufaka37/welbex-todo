import React, {useState} from "react";
import './todoForm.css';
import {useDispatch, useSelector} from "react-redux";
import {createTask, endEditTask} from "../../redux/actions";

export const TodoForm = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const edit = useSelector(state => state.tasks.edit);

    const submitHandler = event => {
        event.preventDefault();

        const newTask = {
            title, checked: false, id: Date.now().toString()
        }

        if (!title.trim()) {
            return ;
        }

        dispatch(createTask(newTask));
        setTitle('');
    }

    const editHandler = event => {
        event.preventDefault();

        dispatch(endEditTask(title));
        setTitle('');
    }

    const changeHandler = event => {
        setTitle(event.target.value);
    }

    return (
        <div className={`row`}>
            <form className={`col s12 ${edit ? 'hide' : ''}`} onSubmit={submitHandler}>
                <div className='row'>
                <div className="input-field col s6">
                    <input
                        placeholder="Enter new task"
                        id="new_task_input"
                        type="text"
                        className="validate"
                        name="title"
                        value={title}
                        onChange={changeHandler}
                    />
                    <button className={`btn waves-effect waves-light `} type="submit" name="action">Submit</button>
                </div>
                </div>
            </form>
            <form className={`col s12 ${edit ? '' : 'hide'}`} onSubmit={editHandler}>
                <div className='row'>
                    <div className="input-field col s6">
                        <input
                            placeholder="Enter new task"
                            id="new_task_input"
                            type="text"
                            className="validate"
                            name="title"
                            value={title}
                            onChange={changeHandler}
                        />
                        <button className={`btn waves-effect waves-light`} type="submit" name="action">Edit</button>
                    </div>
                </div>
            </form>
        </div>


    );
}