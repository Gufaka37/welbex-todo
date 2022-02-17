import React from "react";
import {Route, Switch} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {ToDoPage} from "./pages/ToDoPage";

export const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact>
                <MainPage />
            </Route>
            <Route path='/todo' exact>
                <ToDoPage />
            </Route>
        </Switch>
    );
}