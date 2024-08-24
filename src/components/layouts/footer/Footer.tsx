import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-4 bg-black">
      <nav
        aria-label="footer"
        className="grid flex-wrap px-5 py-2 text-white bg-black sm:justify-between place-content-center md:flex sm:px-20 md:px-10 lg:px-36 gap-y-4"
      >
         <p className="text-center w-full font-mono text-lg">
            ALL RIGHT RESERVED <span className=" font-serif">&copy;</span> 2024 <br className="sm:hidden" /> V.I.P JEOUN TRANSPORTS
          </p>
      </nav>
    </div>
  );
};

export default Footer;
