import { Geist, Geist_Mono ,Limelight} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const limelight = Limelight({
  variable: "--font-Limelight",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "MemoBus",
  description: "Reserve ton ticket",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${limelight.variable} antialiased bg-gray-100 overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
