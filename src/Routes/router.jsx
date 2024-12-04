import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SearchResults from "../Pages/SearchResults/SearchResults";
import FlightDetails from "../Pages/FlightDetails/FlightDetails";
import Bookings from "../Pages/Bookings/Bookings";
import Profile from "../Pages/Profile/Profile";
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import NotFound from "../Pages/NotFound/NotFound";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            { path: "/", element: <Home /> },
            { path: "/search-results", element: <SearchResults /> },
            { path: "/flight-details/:id", element: <FlightDetails /> },
            { path: "/booking/:id", element: <Bookings /> },
            { path: "/profile", element: <Profile /> },
            { path: "/admin", element: <AdminDashboard /> },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
            { path: "*", element: <NotFound /> }
        ]
    },
]);
