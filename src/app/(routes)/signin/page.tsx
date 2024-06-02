import Login from "@/components/accounts/login/Login";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIP Bus Ticking | Signin",
  description: "Login with your credentials",
};

const Signin = () => {
  return (
    <div className="w-full h-screen px-4 grid place-content-center place-items-center">
      <Login />
    </div>
  );
};

export default Signin;
