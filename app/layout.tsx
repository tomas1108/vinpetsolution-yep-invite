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

const aptima = localFont({
  src: [
    // Regular (400)
    {
      path: "../public/fonts/UTMAptima.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/UTMAptimaItalic.ttf",
      weight: "400",
      style: "italic",
    },
    // Bold (700)
    {
      path: "../public/fonts/UTMAptimaBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/UTMAptimaBold_Italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-aptima",
  display: "swap",
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
      <body className={`${mjKedanty.variable} ${aptima.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
