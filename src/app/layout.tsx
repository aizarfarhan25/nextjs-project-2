import type { Metadata } from "next";
import { Inter, Calistoga, Nunito } from "next/font/google";
import localFonts from "next/font/local";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

const satoshi = localFonts({
  src: [
    {
      path: "../../public/font/Satoshi-Regular.otf",
      weight: "500",
    },
  ],
  variable: "--font-satoshi",
});
const beni = localFonts({
  src: [
    {
      path: "../../public/font/BeniRegular.woff2",
      weight: "500",
    },
  ],
  variable: "--font-beni",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Front-End Developer and Quality Assurance",
};

export const viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="none" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                document.documentElement.classList.add('dark');
              })();
            `,
          }}
        />
      </head>
      <body
        className={twMerge(
          // inter.className,
          // calistoga.className,
          // satoshi.className,
          `bg-black text-white antialiased ${inter.variable} ${calistoga.variable} ${satoshi.variable} ${beni.variable}`
        )}
        style={{ backgroundColor: "#000000", color: "#ffffff" }}
      >
        {children}
      </body>
    </html>
  );
}
