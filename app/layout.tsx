import type { Metadata } from "next";
import { Inria_Sans, Inria_Serif } from "next/font/google";
import "./globals.css";
import { NavbarWithMegaMenu } from "./_components/navbar/navbar";
import Footer from "./_components/footer";

const inriaSans = Inria_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-inria-sans",
});
const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  variable: "--font-inria-serif",
});

export const metadata: Metadata = {
  title: "Visit Jericho",
  description: "Explore top Jericho attractions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inriaSans.variable} ${inriaSerif.variable}`}>
      <body className={`${inriaSans.variable} ${inriaSerif.variable}`}>
        <div className="flex flex-col items-center justify-between px-5 py-10 md:px-20">
          <NavbarWithMegaMenu />
        </div>
        <main>{children}</main>
        <footer className="border-t border-orange mt-20">
          <div className="flex flex-col items-center justify-between px-5 py-10 md:px-20">
            <Footer />
          </div>
        </footer>
      </body>
    </html>
  );
}
