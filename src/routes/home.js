import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../views/home/App";

const HomeRouter = () => (
    <Fragment>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </Fragment>
);

export default HomeRouter;