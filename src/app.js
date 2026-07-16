import React from "react";

function App() {
  return (
    <div className="container">
      <h1>🏨 Paradise Hotel</h1>

      <img
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900"
        alt="Hotel"
      />

      <h2>Welcome to Paradise Hotel</h2>

      <p>
        Enjoy a luxurious stay with world-class facilities.
      </p>

      <table>
        <thead>
          <tr>
            <th>Room Type</th>
            <th>Price/Night</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Standard Room</td>
            <td>₹2,500</td>
          </tr>
          <tr>
            <td>Deluxe Room</td>
            <td>₹4,500</td>
          </tr>
          <tr>
            <td>Suite Room</td>
            <td>₹7,000</td>
          </tr>
        </tbody>
      </table>

      <button onClick={() => alert("Booking Successful!")}>
        Book Now
      </button>
    </div>
  );
}

export default App;
