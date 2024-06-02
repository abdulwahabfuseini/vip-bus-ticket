// // pages/my-bookings.tsx
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";

// // Interface for booking data
// interface Booking {
//   id: string;
//   route: string;
//   departureTime: string;
//   arrivalTime: string;
//   price: number;
//   status: "Pending" | "Confirmed" | "Cancelled";
// }

// // Mock booking data (replace with actual data from API or database)
// const mockBookings: Booking[] = [
//   {
//     id: "1",
//     route: "New York to Chicago",
//     departureTime: "2023-12-10 08:00",
//     arrivalTime: "2023-12-10 15:00",
//     price: 50,
//     status: "Confirmed",
//   },
//   {
//     id: "2",
//     route: "Los Angeles to San Francisco",
//     departureTime: "2023-12-15 10:00",
//     arrivalTime: "2023-12-15 13:00",
//     price: 30,
//     status: "Pending",
//   },
// ];

// const MyBookings = () => {
//   const router = useRouter();
//   const [bookings, setBookings] = useState<Booking[]>([]);

//   // Fetch user's bookings (replace with actual API call)
//   useEffect(() => {
//     // Simulate fetching data from an API
//     const fetchData = async () => {
//       // Replace this with your actual API call
//       const apiUrl = "https://api.example.com/bookings"; // Your API endpoint
//       const response = await fetch(apiUrl);
//       const data = await response.json();
//       setBookings(data);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>My Bookings</h2>
//       {bookings.length === 0 ? (
//         <p>You have no bookings yet.</p>
//       ) : (
//         <ul>
//           {bookings.map((booking) => (
//             <li key={booking.id}>
//               <h3>{booking.route}</h3>
//               <p>
//                 Departure:{" "}
//                 {new Date(booking.departureTime).toLocaleString()}
//               </p>
//               <p>
//                 Arrival: {new Date(booking.arrivalTime).toLocaleString()}
//               </p>
//               <p>Price: ${booking.price}</p>
//               <p>Status: {booking.status}</p>
//               {/* Add buttons for cancellation or viewing details */}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default MyBookings;


// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";

// // Interface for route details
// interface Route {
//   id: string;
//   origin: string;
//   destination: string;
//   schedule: {
//     departureTime: string;
//     arrivalTime: string;
//     price: number;
//     availableSeats: number;
//   }[];
// }

// // Mock route data (replace with actual data from API or database)
// const mockRoutes: Route[] = [
//   {
//     id: "1",
//     origin: "New York",
//     destination: "Chicago",
//     schedule: [
//       {
//         departureTime: "2023-12-10 08:00",
//         arrivalTime: "2023-12-10 15:00",
//         price: 50,
//         availableSeats: 20,
//       },
//       {
//         departureTime: "2023-12-10 12:00",
//         arrivalTime: "2023-12-10 19:00",
//         price: 45,
//         availableSeats: 15,
//       },
//     ],
//   },
//   {
//     id: "2",
//     origin: "Los Angeles",
//     destination: "San Francisco",
//     schedule: [
//       {
//         departureTime: "2023-12-15 10:00",
//         arrivalTime: "2023-12-15 13:00",
//         price: 30,
//         availableSeats: 10,
//       },
//     ],
//   },
// ];

// const RouteDetailsPage = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [route, setRoute] = useState<Route | null>(null);

//   // Fetch route details based on id (replace with actual API call)
//   useEffect(() => {
//     if (id) {
//       // Simulate fetching data from an API
//       const fetchData = async () => {
//         // Replace this with your actual API call
//         const apiUrl = `https://api.example.com/routes/${id}`; // Your API endpoint
//         const response = await fetch(apiUrl);
//         const data: Route = await response.json();
//         setRoute(data);
//       };

//       fetchData();
//     }
//   }, [id]);

//   if (!route) {
//     return <div>Loading route details...</div>;
//   }

//   return (
//     <div>
//       <h2>Route Details: {route.origin} to {route.destination}</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Departure Time</th>
//             <th>Arrival Time</th>
//             <th>Price</th>
//             <th>Available Seats</th>
//           </tr>
//         </thead>
//         <tbody>
//           {route.schedule.map((scheduleItem) => (
//             <tr key={scheduleItem.departureTime}>
//               <td>
//                 {new Date(scheduleItem.departureTime).toLocaleString()}
//               </td>
//               <td>
//                 {new Date(scheduleItem.arrivalTime).toLocaleString()}
//               </td>
//               <td>${scheduleItem.price}</td>
//               <td>{scheduleItem.availableSeats}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button onClick={() => router.push(`/book?routeId=${route.id}`)}>
//         Book Ticket
//       </button>
//     </div>
//   );
// };

// export default RouteDetailsPage;