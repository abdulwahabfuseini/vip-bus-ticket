import Book from "@/components/book/Book";
import Navbar from "@/components/layouts/header/Navbar";
import Layouts from "@/components/layouts/Layouts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIP Online Bus Ticketng | My Booking",
  description: "Know Our Current Fares",
};

const Booking = () => {
  return (
    <Layouts>
      <Book />
    </Layouts>
  );
};

export default Booking;
