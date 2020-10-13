import React from 'react';
import {BrowserRouter, Switch, Route} from  'react-router-dom';

import Landing from './pages/landing';
import OrphanageMap from './pages/OrphanagesMap';

const Routes = () => {

    return (
        <BrowserRouter>
        <Switch>
            <Route exact path='/'  component={Landing} />
            <Route path='/Orphanage' component={OrphanageMap} />
        </Switch>
        </BrowserRouter>
    );

}
export default Routes;