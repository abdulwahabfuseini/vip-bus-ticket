import AvailablePath from "@/components/availablePath/AvailablePath";
import Layouts from "@/components/layouts/Layouts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIP Online Bus Ticketng | Bus Routes",
  description: "Know Your Bus Routes",
};

const BusRoutes = () => {
  return (
    <Layouts>
      <div className="py-4 sm:py-12">
        <AvailablePath />
      </div>
    </Layouts>
  );
};

export default BusRoutes;
