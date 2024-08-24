import FareLists from "@/components/fareList/FareLists";
import Navbar from "@/components/layouts/header/Navbar";
import Layouts from "@/components/layouts/Layouts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIP Online Bus Ticketng | Fares",
  description: "Know Our Current Fares",
};

const Fare = () => {
  return (
    <Layouts>
      <FareLists />
    </Layouts>
  );
};

export default Fare;
