import { useParams, Link } from "react-router-dom";

const FlightDetails = () => {
    const { id } = useParams();

    return (
        <div className="p-8 bg-base-100 min-h-screen flex flex-col items-center">
            <div className="card w-full max-w-md bg-base-200 shadow-xl p-6">
                <h1 className="text-3xl font-bold text-center mb-6">Flight Details</h1>
                <p className="text-lg">
                    <span className="font-bold">Flight ID:</span> {id}
                </p>
                <p className="text-lg">
                    <span className="font-bold">Airline:</span> Airline A
                </p>
                <p className="text-lg">
                    <span className="font-bold">Price:</span> $200
                </p>
                <div className="mt-6 flex justify-center">
                    <Link to={`/booking/${id}`} className="btn glass">
                        Book Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FlightDetails;
