import Image from "next/image";
import Herosection from "@/component/Herosection";
import Feature from "@/component/Feature";
import ChooseUs from "@/component/ChooseUs";
import Testomonial from "@/component/Testomonial";
import UpcomingWebinars from "@/component/UpcomingWebinars";
import Instructors from "@/component/Instructors";
import Footer from "@/component/Footer";

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <h1 className="text-2xl text-center text-white"> Learn Next</h1>
    <Herosection />
    <Feature />
    <ChooseUs />
    <Testomonial />
    <UpcomingWebinars />
    <Instructors />
    <Footer />
   </main>
  );
}
