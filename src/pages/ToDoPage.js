import React from "react";
import {TodoForm} from "../components/todoForm/TodoForm";
import './todoPage.css';

export const ToDoPage = () => {
    return (
      <div className="todos-container">
          <div className="uncompleted-todos-container">
              <div className="todos-input">
                <TodoForm />
              </div>
              <div className="todos">

              </div>
          </div>
          <div className="completed-todos">

          </div>
      </div>
    );
}