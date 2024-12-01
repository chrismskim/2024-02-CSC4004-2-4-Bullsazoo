import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage"; 
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

export const router = createBrowserRouter([
    {
        path: "/Main",
        element: <MainPage />,
        errorElement: <NotFound />,
    },
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/Signup",
        element: <SignupPage />,
    },
    {
        path: "/Login",
        element: <LoginPage />,
    },
]);
