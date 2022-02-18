import React from "react";

export const Task = ({task}) => {
    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{task.title}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}