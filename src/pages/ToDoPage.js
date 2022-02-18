import React from "react";
import {TodoForm} from "../components/todoForm/TodoForm";
import './todoPage.css';
import {Tasks} from "../components/Tasks";

export const ToDoPage = () => {
    return (
      <div className="todos-container">
          <div className="uncompleted-todos-container">
              <div className="todos-input">
                <TodoForm />
              </div>
              <div className="todos">
                    <Tasks />
              </div>
          </div>
          <div className="completed-todos">

          </div>
      </div>
    );
}