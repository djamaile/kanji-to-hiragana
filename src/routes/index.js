import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import history from "../utils/history";
import Home from "./home";

const AppRouter = () => (
    <Fragment>
        <BrowserRouter history={history} basename={window.location.pathname || ''}>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    </Fragment>
);

export default AppRouter;
