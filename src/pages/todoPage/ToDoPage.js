import React from "react";
import {TodoForm} from "../../components/todoForm/TodoForm";
import './todoPage.css';
import {Tasks} from "../../components/Tasks";
import {CompletedTasks} from "../../components/CompletedTasks";
import {Pagination} from "../../components/Pagination";

export const ToDoPage = () => {
    return (
      <div className="todos-container">
          <div className="uncompleted-todos-container">
              <div className="todos-input">
                <TodoForm />
              </div>
              <div className="todos">
                    <h2>Tasks:</h2>
                    <Tasks />
                    <div className="tasks-pagination">
                        <Pagination  />
                    </div>
              </div>
          </div>
          <div className="completed-todos">
                <h2>Completed Tasks:</h2>
                <CompletedTasks />
              <div className="tasks-pagination">
                  <Pagination />
              </div>
          </div>
      </div>
    );
}