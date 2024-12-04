const Booking = () => {
    return (
        <div className="p-8 bg-base-100 min-h-screen flex justify-center items-center">
            <div className="card w-full max-w-lg bg-base-200 shadow-xl p-6">
                <h1 className="text-3xl font-bold text-center mb-6">Confirm Your Booking</h1>
                <form className="space-y-4">
                    {/* Full Name Input */}
                    <div>
                        <label className="block text-lg font-semibold mb-2" htmlFor="name">
                            Full Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your full name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div>
                        <label className="block text-lg font-semibold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary w-full">
                            Confirm Booking
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Booking;
