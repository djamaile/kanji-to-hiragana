import React, { Fragment } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../utils/history";
import Home from "./home";

const AppRouter = () => (
    <Fragment>
        <Router history={history} basename={window.location.pathname || ''}>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    </Fragment>
);

export default AppRouter;
