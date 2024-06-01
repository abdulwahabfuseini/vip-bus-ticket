import Navbar from "@/components/header/Navbar";
import Banner from "@/components/home/Banner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIP Bus Ticketng | Book Online Now",
  description: "Login with your credentials",
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
    </main>
  );
}
