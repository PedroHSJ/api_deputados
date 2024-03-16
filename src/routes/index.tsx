import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";
import { Home } from "../Pages/Home";
import { MainTemplate } from "../Templates/MainTemplate";
import { DeputadoDetails } from "../Pages/DeputadoDetails";

const router = createBrowserRouter([
    {
        element: <MainTemplate />,
        children: [
            { path: "/", element: <Home /> },
            {
                path: "/deputado/:id",
                element: <DeputadoDetails />,
            },
        ],
    },
    {
        path: "/*",
        element: <Navigate to="/" replace />,
    },
]);

export const AppRoutes = () => {
    return <RouterProvider router={router} />;
};
