import type { Metadata } from "next";
import { Inter, Calistoga, Nunito } from "next/font/google";
import localFonts from "next/font/local"
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

const satoshi = localFonts ({
  src: [{
    path: "../../public/font/Satoshi-Regular.otf",
    weight: "500"
  }],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Front-End Developer and Quality Assurance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          // inter.className,
          // calistoga.className,
          // satoshi.className,
          `bg-black text-white antialiased ${inter.variable} ${calistoga.variable} ${satoshi.variable}`
        )}
      >
        {children}
      </body>
    </html>
  );
}
