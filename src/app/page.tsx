import Navbar from "@/components/layouts/header/Navbar";
import Banner from "@/components/home/Banner";
import FaqAccordion from "@/components/home/faq/FaqAccordion";
import Path from "@/components/path/Path";
import type { Metadata } from "next";
import Layouts from "@/components/layouts/Layouts";

export const metadata: Metadata = {
  title: "VIP Bus Ticketng | Book Online Now",
  description: "Book Your VIP Ticket Online",
};

export default function Home() {
  return (
    <div>
     <Layouts>
     <Banner />
      <div className="h-[900px] sm:h-[500px] max-w-7xl mt-20 mb-6 sm:my-10 mx-auto overflow-auto">
        <Path />
      </div>
      <FaqAccordion />
     </Layouts>
      
    </div>
  );
}
