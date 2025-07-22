import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fortune Institute of Computer Education",
  description: "(Authorised CSC centre of Central Govt. Of India), Bailoor Complex, 1st Floar, PPC College Road, Udupi, 576101E mail : ficeudupi@gmail.com 0820- 4291631, 8618638126, 9743294616",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>        
        <link rel="icon" href="/favicon.png" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#101129]`}
      >
        {children}
      </body>
    </html>
  );
}
