import CityTerminalForm from "@/components/availablePath/CityTerminalForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIP Bus Ticking | Add Terminal",
  description: "Add Terminal",
};

const AvailableRoutes = () => {
  return (
    <div className="w-full md:h-screen py-16 md:py-20 px-4 sm:px-8 max-w-lg grid mx-auto">
      <CityTerminalForm />
    </div>
  );
};

export default AvailableRoutes;
