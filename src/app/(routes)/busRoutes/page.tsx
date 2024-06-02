import Navbar from "@/components/header/Navbar";
import Path from "@/components/path/Path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIP Online Bus Ticketng | Bus Routes",
  description: "Know Your Bus Routes",
};

const BusRoutes = () => {
  return (
    <div>
      <Navbar />
      <div className="py-4 sm:py-12">
        <Path />
      </div>
    </div>
  );
};

export default BusRoutes;
