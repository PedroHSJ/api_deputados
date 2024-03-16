import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

export const MainTemplate = () => {
    return (
        <div>
            <Header />
            <div className="min-h-screen p-4 bg-gray-300 flex justify-center">
                <Outlet />
            </div>
        </div>
    );
};
