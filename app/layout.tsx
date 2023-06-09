import "./globals.css";
import { Montserrat } from "next/font/google";

import Sidebar from "@/components/Sidebar";

const font = Montserrat({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Tunehive",
  description: "Your ultimate playlist, Tunehive",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
