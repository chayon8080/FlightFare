const AdminDashboard = () => {
  const bookings = [
    { id: 1, user: "John Doe", flight: "Flight A" },
    { id: 2, user: "Jane Smith", flight: "Flight B" },
  ];

  return (
    <div className="p-8 bg-base-200 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">Admin Dashboard</h1>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button className="btn btn-success">Add Flight</button>
        <button className="btn btn-warning">Update Flight</button>
        <button className="btn btn-error">Delete Flight</button>
      </div>
      <div className="card w-full max-w-4xl mx-auto bg-teal-200 shadow-xl p-6">
        <h2 className="text-2xl font-bold mb-4">All Bookings</h2>
        {bookings.length > 0 ? (
          <ul className="list-disc list-inside space-y-2">
            {bookings.map((booking) => (
              <li key={booking.id} className="text-lg">
                <span className="font-semibold">User:</span> {booking.user},{" "}
                <span className="font-semibold">Flight:</span> {booking.flight}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center">No bookings available.</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
