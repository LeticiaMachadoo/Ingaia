import React from 'react';
import { Router } from '@reach/router';
import Page1 from '../../Page1/Page1';
import Page2 from '../../Page2/Page2';

/**
 * For the time being we are using @reach/router.
 * Whenever react-router releases version 6.0 we will migrate to react-route.
 * @reach/router and react-router v6.0 have similar interfaces.
 */

const AppRouter = (): JSX.Element => {
    return (
        <Router>
            <Page1 path="/" />
            <Page1 path="page1" />
            <Page2 path="page2" />
        </Router>
    );
};

export default AppRouter;
