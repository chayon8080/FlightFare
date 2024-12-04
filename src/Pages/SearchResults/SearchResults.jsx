import { Link } from "react-router-dom";
import { useState } from "react";

const SearchResults = () => {
    const flights = [
        { id: 1, airline: "Airline A", price: 200, origin: "New York", destination: "London", date: "2023-12-15" },
        { id: 2, airline: "Airline B", price: 150, origin: "Los Angeles", destination: "Paris", date: "2023-12-20" },
    ];

    const [selectedFlight, setSelectedFlight] = useState(null);

    const openModal = (flight) => {
        setSelectedFlight(flight);
        document.getElementById("flightDetailsModal").showModal();
    };

    const closeModal = () => {
        setSelectedFlight(null);
        document.getElementById("flightDetailsModal").close();
    };

    return (
        <div className="p-8 bg-base-100">
            <h1 className="text-3xl font-bold text-center mb-6">Search Results</h1>
            {flights.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {flights.map((flight) => (
                        <div key={flight.id} className="card bg-teal-200 shadow-md p-4">
                            <h2 className="text-xl font-semibold">{flight.airline}</h2>
                            <p>Price: ${flight.price}</p>
                            <p>{flight.origin} → {flight.destination}</p>
                            <button
                                onClick={() => openModal(flight)}
                                className="btn glass mt-4"
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-lg text-red-500">No flights found. Try a new search.</p>
            )}
            <dialog id="flightDetailsModal" className="modal">
                <div className="modal-box relative">
                    <button
                        onClick={closeModal}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    >
                        ✕
                    </button>
                    {selectedFlight ? (
                        <>
                            <h3 className="font-bold text-lg">{selectedFlight.airline}</h3>
                            <p className="py-2">Origin: {selectedFlight.origin}</p>
                            <p className="py-2">Destination: {selectedFlight.destination}</p>
                            <p className="py-2">Date: {selectedFlight.date}</p>
                            <p className="py-2">Price: ${selectedFlight.price}</p>
                            
                            <Link
                                to={`/flight-details/${selectedFlight.id}`}
                                className="btn btn-primary mt-4"
                            >
                                Go to Flight Details
                            </Link>
                        </>
                    ) : (
                        <p>Loading details...</p>
                    )}
                </div>
            </dialog>
        </div>
    );
};

export default SearchResults;
