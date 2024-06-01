import Banner from "@/components/accounts/HeadLogo";
import Register from "@/components/accounts/register/Register";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIP Bus Ticking | Signup",
  description: "Create an account",
};

const Signup = () => {
  return (
    <div className="w-full h-screen grid place-content-center place-items-center">
       <Register />
    </div>
  );
};

export default Signup;
