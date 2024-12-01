import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import Aboutpage from "./pages/LandingAbout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        errorElement: <NotFound />,
    },
    {
        path: "/AboutPage",
        element: <Aboutpage />,
        errorElement: <NotFound />,
    }
]);
