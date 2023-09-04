import Rectorate from "./screens/Rectorate";
import Deaneries from "./screens/Deaneries";
import Search from "./screens/Search";
import { CHAIRS_ROUTE, DEANERIES_ROUTE, EMPLOYEE_DATABASE_ROUTE, RECTORATE_ROUTE, SEARCH_ROUTE, UNITS_ROUTE, UNIT_ROUTE } from "./utils/consts";
import EmployeeDatabase from './screens/EmployeeDatabase'
import UnitPage from "./screens/UnitPage/UnitPage";
import Chairs from "./screens/Chairs";

export const navRoutes = [
    {
        path: RECTORATE_ROUTE,
        Element: Rectorate,
        name: "Ректорат"
    },
    {
        path: DEANERIES_ROUTE,
        Element: Deaneries,
        name: "Деканаты"
    },
    {
        path: CHAIRS_ROUTE,
        Element: Chairs,
        name: "Кафедры"
    },
    {
        path: UNITS_ROUTE,
        Element: Chairs,
        name: "Подразделения"
    },
    {
        path: EMPLOYEE_DATABASE_ROUTE,
        Element: EmployeeDatabase,
        name: "База сотрудников"
    }
]

export const unitRoute = {path: UNIT_ROUTE + '/:unitId', Element: UnitPage, name: "Страница подразделения"}

export const publicRoutes = [
   
]