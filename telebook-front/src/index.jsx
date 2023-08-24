import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import EmployeeStore from './store/EmployeeStore';

export const TelebookContext = createContext(null)
console.log(process.env.REACT_APP_API_ROUTE);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TelebookContext.Provider value={{
        user: new UserStore(),
        employee: new EmployeeStore()
    }}>
        <App />
    </TelebookContext.Provider> 
);
