import Navbar from "@/components/header/Navbar";
import HireForm from "@/components/hiring/HireForm";
import Hiring from "@/components/hiring/Hring";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIP Online Bus Ticketng | Bus Hiring",
  description: "Bus Hiring Request",
};

const BusHiring = () => {
  return (
    <div>
      <Navbar />
      <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto sm:pt-20 sm:pb-40 py-10 px-3 sm:px-8">
        <Hiring />
        <HireForm />
      </div>
    </div>
  );
};

export default BusHiring;
