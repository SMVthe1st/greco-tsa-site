import { lato } from "@/app/ui/fonts";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "G R E C O",
  description: "Green Renewable Energy Consolidation Operation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className="antialiased">    
          <body className={lato.className}>
            <Nav />
            <main className="min-w-screen min-h-screen overflow-x-hidden">{children}</main>
            < Footer />
          </body>    
      </html>
  );
}
