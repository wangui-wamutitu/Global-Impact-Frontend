import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const dmSans = DM_Sans({
  variable: '--font-display',
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Global Impact",
  description: "Global impact frontend app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} antialiased`}
      >
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
