import HeadTitle from "@/components/HeadTitle";
import Navbar from "@/components/layouts/header/Navbar";
import UserDetails from "@/components/accounts/userDetails/UserDetails";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIP Bus Ticking | Dashboard",
  description: "User Dashboard",
};

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="grid gap-x-10 gap-y-4 max-w-5xl mx-auto sm:pt-14 sm:pb-20 py-10 px-3 sm:px-6">
        <HeadTitle path="User Details" />
        <UserDetails />
      </div>
    </div>
  );
};

export default Dashboard;
