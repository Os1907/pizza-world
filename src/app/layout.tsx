import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./Css/globals.css";
import "./Css/scrollbar.css";
import "./Css/animation.css";
import ReduxProvider from "@/Redux/Provider";

const font = Inter({
  subsets: ["latin"],
  weight: [ "100","200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Pizza World",
  description: "Enjoy with most delicious pizza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
      <ReduxProvider>
        {children}
      </ReduxProvider>
      </body>
    </html>
  );
}
