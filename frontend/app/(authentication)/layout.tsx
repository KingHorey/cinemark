import React from "react";
import AuthNav from "../ui/general/authNav";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-11/12 mx-auto max-h-screen py-2 space-y-5 ">
      <AuthNav />
      {children}
    </main>
  );
}
