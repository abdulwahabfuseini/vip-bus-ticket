import FareLists from "@/components/fareList/FareLists";
import Navbar from "@/components/header/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIP Online Bus Ticketng | Fares",
  description: "Know Our Current Fares",
};

const Fare = () => {
  return (
    <div>
      <Navbar />
      <FareLists />
    </div>
  );
};

export default Fare;
