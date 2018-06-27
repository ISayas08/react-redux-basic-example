import React from 'react';
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { HomePage } from '../pages/homePage/HomePage';
import { PostsListPage } from '../pages/postsListPage/PostsListPage';

let instance;

class Rutes {

    constructor() {
        if (!instance) {
            instance = this
        }

        this.BASIC_ROUTE = '/test-redux';
        this.routes = [
            { title: 'Home', route: `${this.BASIC_ROUTE}/home`, component: HomePage },
            { title: 'Posts', route: `${this.BASIC_ROUTE}/posts`, component: PostsListPage }
        ];

        return instance;
    }

    //====================================================================
    //  Getters
    //====================================================================

    getBasicRoute() {
        return this.BASIC_ROUTE;
    }

    getRouteByIndex(index) {
        return this.routes[index] ? this.routes[index] : this.routes[0];
    }

    getRoutes() {
        return this.routes;
    }

    getMapedRoutesAsLinks() {
        return this.routes.map((route, i) => <NavLink className='mItem' activeClassName='active' key={i} to={route.route}>
            {route.title}
        </NavLink>);
    }

    getMapedRoutes() {
        return this.routes.map((route, i) => <Route key={i} path={route.route} component={route.component} />);
    }

}

export const _rutes = new Rutes();