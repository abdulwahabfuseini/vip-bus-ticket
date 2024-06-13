import Navbar from "@/components/header/Navbar";
import ContactForm from "@/components/help/ContactForm";
import Help from "@/components/help/Help";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIP Online Bus Ticketng | Contact",
  description: "Contact Us",
};

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="grid lg:grid-cols-3 gap-x-10 sm:place-content-center sm:place-items-center gap-y-4 max-w-7xl mx-auto sm:pt-20 sm:pb-40 py-10 px-3 sm:px-8">
        <div className="lg:col-span-2">
          <Help />
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
