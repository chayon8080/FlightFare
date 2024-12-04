const Profile = () => {
  const bookingHistory = [
    { id: 1, flight: "Flight A", price: 200 },
    { id: 2, flight: "Flight B", price: 150 },
  ];

  return (
    <div className="p-8 bg-base-200 min-h-screen flex flex-col items-center">
      <div className="card w-full max-w-md bg-teal-200 shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Your Profile</h1>
        <p className="text-lg">
          <span className="font-semibold">Name:</span> John Doe
        </p>
        <p className="text-lg">
          <span className="font-semibold">Email:</span> john.doe@example.com
        </p>
      </div>
      <div className="card w-full max-w-md bg-teal-200 shadow-xl mt-8 p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Booking History</h2>
        <ul className="list-disc list-inside space-y-2">
          {bookingHistory.map((booking) => (
            <li key={booking.id} className="text-lg">
              {booking.flight} - <span className="font-semibold">${booking.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
