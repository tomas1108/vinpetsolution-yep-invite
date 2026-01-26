import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const mjKedanty = localFont({
  src: [
    {
      path: "../public/fonts/MJ Kedanty.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/MJ Kedanty-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-mj-kedanty",
});

export const metadata: Metadata = {
  title: "VINPET SOLUTIONS",
  description: "Vinpet Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mjKedanty.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
