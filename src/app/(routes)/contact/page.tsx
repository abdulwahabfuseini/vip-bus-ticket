import Navbar from "@/components/layouts/header/Navbar";
import ContactForm from "@/components/help/ContactForm";
import Help from "@/components/help/Help";
import type { Metadata } from "next";
import Layouts from "@/components/layouts/Layouts";

export const metadata: Metadata = {
  title: "VIP Online Bus Ticketng | Contact",
  description: "Contact Us",
};

const Contact = () => {
  return (
    <Layouts>
      <div className="grid lg:grid-cols-3 gap-x-10 sm:place-content-center sm:place-items-center gap-y-4 max-w-7xl mx-auto sm:pt-14 sm:pb-20 py-10 px-3 sm:px-6">
        <div className="lg:col-span-2">
          <Help />
        </div>
        <ContactForm />
      </div>
    </Layouts>
  );
};

export default Contact;
