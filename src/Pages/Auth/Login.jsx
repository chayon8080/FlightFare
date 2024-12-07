import { useState, useEffect } from "react";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../components/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Both fields are required.");
            return;
        }

        setError("");
        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login successful!");
            setLoading(false);
            navigate("/");
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            alert("Logout successful!");
            setUser(null);
        } catch  {
            toast.error("Failed to logout. Try again.");
        }
    };

    return (
        <div className="p-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex justify-center items-center">
            <div className="card w-full max-w-sm bg-teal-200 shadow-xl p-6">
                {user ? (
                    <div className="text-center">
                        <h1 className="text-xl font-bold text-lime-400 mb-6">Welcome, {user.email}</h1>
                        <button
                            onClick={handleLogout}
                            className="btn w-full bg-gradient-to-r from-red-500 to-red-700 text-white"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <>
                        <h1 className="text-3xl font-bold text-center mb-6 text-white">Login</h1>
                        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <label className="block text-lg font-semibold mb-2 text-white" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-semibold mb-2 text-white" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className={`btn w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white ${loading && "opacity-50 cursor-not-allowed"}`}
                                    disabled={loading}
                                >
                                    {loading ? "Logging In..." : "Login"}
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default Login;
