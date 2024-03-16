import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Card } from "@material-tailwind/react";

export const MainTemplate = () => {
    return (
        <div>
            <Header />
            <div className="min-h-screen p-4 bg-gray-300 flex justify-center">
                <Card className="p-8 xl:w-3/4 lg:w-3/4 md:w-3/4 w-full">
                    <Outlet />
                </Card>
            </div>
        </div>
    );
};
