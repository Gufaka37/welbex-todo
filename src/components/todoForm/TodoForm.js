import React, {useState} from "react";
import './todoForm.css';

export const TodoForm = () => {
    const [title, setTitle] = useState('');

    const submitHandler = event => {
        event.preventDefault();

    }

    const changeHandler = event => {
        setTitle(event.target.value);
    }

    return (
        <div className='row'>
            <form className='col s12' onSubmit={submitHandler}>
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
                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                </div>
                </div>
            </form>
        </div>

    );
}