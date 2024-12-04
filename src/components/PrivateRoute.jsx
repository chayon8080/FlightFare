// import { Navigate } from "react-router-dom";
// import { auth } from "../components/firebase"; // Import Firebase Auth
// import { useAuthState } from "react-firebase-hooks/auth";

// /**
//  * PrivateRoute component for protecting routes.
//  * @param {Object} props - Props passed to the component.
//  * @param {React.ReactNode} props.children - Child components to render if access is granted.
//  * @param {string[]} props.allowedEmails - Optional list of allowed admin emails.
//  * @returns {React.ReactNode} - Rendered component or redirection.
//  */
// const PrivateRoute = (props) => {
//     const { children, allowedEmails = [] } = props; // Explicitly destructure props
//     const [user, loading] = useAuthState(auth);

//     if (loading) {
//         return <p>Loading...</p>; // Show a loading message while checking authentication
//     }

//     if (!user) {
//         return <Navigate to="/login" replace />; // Redirect to login if not authenticated
//     }

//     if (allowedEmails.length > 0 && !allowedEmails.includes(user.email || "")) {
//         return <Navigate to="/unauthorized" replace />; // Redirect unauthorized users
//     }

//     return <>{children}</>; // Render the protected component if all checks pass
// };

// export default PrivateRoute;
