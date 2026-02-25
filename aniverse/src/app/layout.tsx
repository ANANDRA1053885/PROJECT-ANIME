import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/common/NavBar";

export const metadata: Metadata = {
  title: "Giron — Anime Community",
  description: "The ultimate anime community platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}