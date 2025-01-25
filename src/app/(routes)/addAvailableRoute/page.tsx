import RoutesForm from "@/components/availablePath/RoutesForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIP Bus Ticking | Add Available Route",
  description: "Add Available Route",
};

const AvailableRoutes = () => {
  return (
    <div className="w-full md:h-screen py-16 md:py-20 px-4 sm:px-8 max-w-xl grid mx-auto">
      <RoutesForm />
    </div>
  );
};

export default AvailableRoutes;
