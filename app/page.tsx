import Image from "next/image";
import { NavbarWithMegaMenu } from "./components/navbar";
import HeaderLogo from "./components/header-logo";
import HomepageHero from "./components/homepage-hero";

export default function Home() {
  return (
    <main className="w-full border border-transparent">
      <HomepageHero />
    </main>
  );
}
