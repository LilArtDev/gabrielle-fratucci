import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" bg-gradient-to-b to-rose-300 from-orange-200 w-full h-full">
      <body className={` ${jost.className} h-fit`}>{children}</body>
    </html>
  );
}
