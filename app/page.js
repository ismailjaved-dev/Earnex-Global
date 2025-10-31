import About from "@/components/sections/about";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import LogoGrid from "@/components/sections/logoGrid";
import Navbar from "@/components/sections/navbar";
import Trade from "@/components/sections/trade";
import TradingPortfolio from "@/components/sections/tradingPortfolio";
import TradingPotential from "@/components/sections/tradingPotential";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
  {/* <Navbar /> */}
    <Hero />
    <About />
    <LogoGrid />
    <TradingPotential />
    <Trade />
    <TradingPortfolio />
    <Footer />
    </div>
  );
}
