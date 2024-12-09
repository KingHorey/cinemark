import React from "react";
import Navbar from "@/app/ui/general/navbar"; // Update this path
import Footer from "@/app/ui/general/footer"; // Update this path

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("Main layout rendered"); // Add this
  return (
    <>
      <Navbar />
      <main className="w-full mx-auto space-y-10">{children}</main>
      <Footer />
    </>
  );
}
