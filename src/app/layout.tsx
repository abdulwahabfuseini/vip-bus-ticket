import type { Metadata } from "next";
import "./globals.css";
import Loading from "./Loading";
import AuthProvider from "@/contexts/AuthProvider";

export const metadata: Metadata = {
  title: "VIP Online Bus Ticketng | Book Online Now",
  description: "Book Your V.I.P  Ticket Online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full h-full bg-slate-50">
        <Loading>
          <AuthProvider>{children}</AuthProvider>
        </Loading>
      </body>
    </html>
  );
}
