import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-100">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLw3J-R2xhbWHM72q-3yXvLtXl_6-Uj8Bd_w&s"
                alt="Page Not Found"
                className="w-96 h-auto rounded-xl"
            />
            <p className="text-2xl mt-4">Oops! The page you are looking for does not exist.</p>
            <Link to="/" className="btn glass mt-6">
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;
