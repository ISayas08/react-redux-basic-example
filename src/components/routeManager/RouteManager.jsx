import React, { Component } from 'react';
import { Switch, Redirect } from "react-router-dom";

import { _rutes } from "./../../services";
const HOME_ROUTE_INDEX = 0;

export default class RouteManager extends Component {

    render() {
        return <div>
            <Switch>
                {/* Load all routes as Route component */}
                {_rutes.getMapedRoutes()}

                {/*To define default route*/}
                <Redirect from='*' to={_rutes.getRouteByIndex(HOME_ROUTE_INDEX).route} />
            </Switch>
        </div>;
    }
}
