import BG from "../../../Assets/BG.jpg"
const Home = () => {
    return (
        <div className="bg-base-100">
            <header
                className="hero min-h-screen bg-cover bg-center  relative"
                style={{ backgroundImage: `url(${BG})` }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="text-5xl font-bold">Welcome to FlightFare</h1>
                        <p className="mt-4 text-xl">
                            Your ultimate destination for booking flights with ease.
                        </p>
                    </div>
                </div>
                <div>
                    <section className="p-8 absolute bottom-0 right-0">
                        <h2 className="text-3xl font-bold text-center text-orange-400">Search Flights</h2>
                        <form className="mt-6 flex flex-wrap justify-center gap-4">
                            <input
                                type="text"
                                placeholder="Origin"
                                className="input input-bordered w-full max-w-xs"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Destination"
                                className="input input-bordered w-full max-w-xs"
                                required
                            />
                            <input
                                type="date"
                                className="input input-bordered w-full max-w-xs"
                                required
                            />
                            <button type="submit" className="btn glass btn-primary w-full max-w-xs">
                                Search
                            </button>
                        </form>
                    </section>

                </div>
            </header>

            <section className="p-8 bg-slate-300">
                <h2 className="text-3xl font-bold text-center">Why Choose FlightFare?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    <div className="card bg-base-200 shadow-md p-6">
                        <h3 className="text-xl font-bold">Fast Booking</h3>
                        <p className="mt-2">
                            Book flights instantly with our user-friendly platform.
                        </p>
                    </div>
                    <div className="card bg-base-200 shadow-md p-6">
                        <h3 className="text-xl font-bold">Best Prices</h3>
                        <p className="mt-2">
                            Get the best deals and discounts on your favorite airlines.
                        </p>
                    </div>
                    <div className="card bg-base-200 shadow-md p-6">
                        <h3 className="text-xl font-bold">Global Coverage</h3>
                        <p className="mt-2">
                            Explore destinations worldwide with ease.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
