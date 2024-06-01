import Book from "@/components/book/Book";
import Navbar from "@/components/header/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIP Online Bus Ticketng | Booking",
  description: "Know Our Current Fares",
};

const Booking = () => {
  return (
    <div>
      <Navbar />
      <Book />
    </div>
  );
};

export default Booking;
