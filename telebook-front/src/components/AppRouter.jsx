import React, { useContext } from 'react';
import {Route, Routes} from 'react-router-dom';
import { publicRoutes } from '../routes';
import { TelebookContext } from '../index';

const AppRouter = () => {
    const {user} = useContext(TelebookContext)
    return (
        <Routes>
        {publicRoutes.map(({path, Element}) =>
            <Route key={path} path={path} element={<Element/>} exact/>
        )}
        </Routes>
    )
}

export default AppRouter