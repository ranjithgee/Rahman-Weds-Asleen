import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./style.css";
import "./bootstrap.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rahman Weds Asleen",
  description: "Join us on our special day and be part of the celebration!",
  openGraph:{
    title: 'Rahman Weds Asleen',
    description: 'Join us on our special day and be part of the celebration!',
    siteName: 'Rahman Weds Asleen',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
