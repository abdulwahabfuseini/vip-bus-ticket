"use client";

import React, { useState, useEffect } from "react";
import HeadTitle from "../HeadTitle";

// Interface for booking data
interface Booking {
  id: string;
  route: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  status: "Pending" | "Confirmed" | "Cancelled";
}

// Mock booking data (replace with actual data from API or database)
const mockBookings: Booking[] = [
  {
    id: "1",
    route: "New York to Chicago",
    departureTime: "2023-12-10 08:00",
    arrivalTime: "2023-12-10 15:00",
    price: 50,
    status: "Confirmed",
  },
  {
    id: "2",
    route: "Los Angeles to San Francisco",
    departureTime: "2023-12-15 10:00",
    arrivalTime: "2023-12-15 13:00",
    price: 30,
    status: "Pending",
  },
];

const MyBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  // Fetch user's bookings (replace with actual API call)
  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      // Replace this with your actual API call
      const apiUrl = "https://api.example.com/bookings"; // Your API endpoint
      const response = await fetch(apiUrl);
      const data = await response.json();
      setBookings(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <HeadTitle path="My Bookings" />

      {bookings.length === 0 ? (
        <p>You have no bookings yet.</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li key={booking.id}>
              <h3>{booking.route}</h3>
              <p>
                Departure: {new Date(booking.departureTime).toLocaleString()}
              </p>
              <p>Arrival: {new Date(booking.arrivalTime).toLocaleString()}</p>
              <p>Price: ${booking.price}</p>
              <p>Status: {booking.status}</p>
              {/* Add buttons for cancellation or viewing details */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyBookings;
