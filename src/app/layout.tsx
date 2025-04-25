import type { Metadata } from "next";
import { satoshiLight, satoshiRegular, satoshiMedium, satoshiBold } from './fonts';
import "./globals.css";

export const metadata: Metadata = {
  title: "Shelf Cue",
  description: "Discover your next great read based on your mood, journey, and preferences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshiLight.variable} ${satoshiRegular.variable} ${satoshiMedium.variable} ${satoshiBold.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
