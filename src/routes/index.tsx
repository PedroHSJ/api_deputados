import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";
import { Home } from "../Pages/Home";
import { MainTemplate } from "../Templates/MainTemplate";

const router = createBrowserRouter([
    {
        element: <MainTemplate />,
        children: [{ path: "/", element: <Home /> }],
    },
    {
        path: "/*",
        element: <Navigate to="/home" replace />,
    },
]);

export const AppRoutes = () => {
    return <RouterProvider router={router} />;
};
