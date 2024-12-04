import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage"; 
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Landing_About from "./pages/LandingAbout";
import CameraPage from "./pages/CameraPage";
import MyPage from "./pages/MyPage";
import SuccessLogin from "./components/Login/SuccessLogin";

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
    {
        path: "/About",
        element: <Landing_About />,
    },
    {
        path: "/Camera",
        element: <CameraPage />,
    },
    {
        path: "/MyPage",
        element: <MyPage />,
    },
    {
        path: "/Login/Success",
        element: <SuccessLogin />,
    },
]);
