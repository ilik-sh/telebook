import Rectorate from "./screens/Rectorate";
import Deaneries from "./screens/Deaneries";
import Search from "./screens/Search";
import { DEANERIES_ROUTE, RECTORATE_ROUTE, SEARCH_ROUTE } from "./utils/consts";

export const publicRoutes = [
    {
        path: DEANERIES_ROUTE,
        Element: Deaneries
    },
    {
        path: RECTORATE_ROUTE,
        Element: Rectorate
    },
    {
        path: SEARCH_ROUTE,
        Element: Search
    }
]