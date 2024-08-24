import Navbar from "@/components/layouts/header/Navbar";
import Layouts from "@/components/layouts/Layouts";
import Path from "@/components/path/Path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIP Online Bus Ticketng | Bus Routes",
  description: "Know Your Bus Routes",
};

const BusRoutes = () => {
  return (
    <Layouts>
      <div className="py-4 sm:py-12">
        <Path />
      </div>
    </Layouts>
  );
};

export default BusRoutes;
