import Navbar from "@/components/header/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIP Bus Ticking | Dashboard",
  description: "User Dashboard",
};


const Dashboard = () => {
  return (
    <div>
      <Navbar />
      Dashboard
    </div>
  )
}

export default Dashboard