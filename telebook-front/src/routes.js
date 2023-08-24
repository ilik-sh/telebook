import Rectorate from "./screens/Rectorate";
import Deaneries from "./screens/Deaneries";
import Search from "./screens/Search";
import { DEANERIES_ROUTE, RECTORATE_ROUTE, SEARCH_ROUTE } from "./utils/consts";
import employeeDatabase from "./screens/employeeDatabase";
import Departments from "./screens/Departments";

export const publicRoutes = [
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
        path: SEARCH_ROUTE,
        Element: Search,
        name: "Кафедры"
    },
    {
        path: SEARCH_ROUTE,
        Element: Departments,
        name: "Подразделения"
    },
    {
        path: SEARCH_ROUTE,
        Element: employeeDatabase,
        name: "База сотрудников"
    }
]