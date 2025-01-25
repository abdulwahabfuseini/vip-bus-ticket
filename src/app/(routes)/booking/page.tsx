import Book from "@/components/book/Book";
import HeadTitle from "@/components/HeadTitle";
import Navbar from "@/components/layouts/header/Navbar";
import Layouts from "@/components/layouts/Layouts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIP Online Bus Ticketng | My Booking",
  description: "Know Our Current Fares",
};

const Booking = () => {
  return (
    <div>
      <Navbar />
      <div className="grid gap-x-10 gap-y-4 max-w-7xl mx-auto sm:pt-14 sm:pb-20 py-10 px-3 sm:px-6">
        <HeadTitle path="My Bookings" />
        <Book />
      </div>
    </div>
  );
};

export default Booking;
