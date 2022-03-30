import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../components/App';
import NotFoundPage from '../components/NotFoundPage';
import Residents from '../components/PlanetDetails/Residents';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/residents' component={Residents} />
                <Route exact path='/residents/:restaurantsId' component={Residents} />
                <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
