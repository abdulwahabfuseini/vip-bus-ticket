import Navbar from "@/components/header/Navbar";
import Banner from "@/components/home/Banner";
import SearchTrip from "@/components/home/SearchTrip";
import Path from "@/components/path/Path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIP Bus Ticketng | Book Online Now",
  description: "Book Your VIP Ticket Online",
};

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="h-full sm:h-[500px] max-w-7xl  my-10 mx-auto sm:overflow-auto">
        <Path />
      </div>
    </div>
  );
}
