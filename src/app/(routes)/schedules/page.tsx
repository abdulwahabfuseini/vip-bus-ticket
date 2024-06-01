import Navbar from "@/components/header/Navbar";
import Schedule from "@/components/schedule/Schedule";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIP Online Bus Ticketng | Schedules",
  description: "Know Your Schedules",
};

const Schedules = () => {
  return (
    <div>
      <Navbar />
      <Schedule />
    </div>
  );
};

export default Schedules;
