import Navbar from "@/components/layouts/header/Navbar";
import HireForm from "@/components/hiring/HireForm";
import Hiring from "@/components/hiring/Hring";
import type { Metadata } from "next";
import Layouts from "@/components/layouts/Layouts";

export const metadata: Metadata = {
  title: "VIP Online Bus Ticketng | Bus Hiring",
  description: "Bus Hiring Request",
};

const BusHiring = () => {
  return (
    <Layouts>
      <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto sm:pb-20 py-12 px-4 sm:px-8">
        <Hiring />
        <HireForm />
      </div>
    </Layouts>
  );
};

export default BusHiring;
