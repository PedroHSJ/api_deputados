import { Bounce, ToastContainer } from "react-toastify";
import { AppRoutes } from "./routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
            <AppRoutes />
        </>
    );
}

export default App;
