import React, { useContext } from 'react';
import {Route, Routes} from 'react-router-dom';
import { navRoutes, unitRoute } from '../routes';
import { TelebookContext } from '../index';
import UnitPage from '../screens/UnitPage/UnitPage';

const AppRouter = () => {
    const {user} = useContext(TelebookContext)
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