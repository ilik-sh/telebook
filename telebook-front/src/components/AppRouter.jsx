import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { navRoutes, unitRoute } from '../routes';

const AppRouter = () => {
    return (
        <Routes>
        {navRoutes.map(({path, Element}) =>
            <Route key={path} path={path} element={<Element/>} exact/>
        )}
        <Route key={unitRoute.path} path={unitRoute.path} element={<unitRoute.Element/>} exact/>
        </Routes>
    )
}

export default AppRouter