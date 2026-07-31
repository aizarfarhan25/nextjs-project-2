import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/providers/ModalProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description:
    "Quality Assurance Engineer and Front-End Developer portfolio of Andi Muh. Aizar Farhan.",
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        className={`bg-black text-white antialiased ${inter.variable} ${calistoga.variable}`}
        style={{ backgroundColor: "#000000", color: "#ffffff" }}
      >
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
