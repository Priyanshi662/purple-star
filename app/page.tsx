"use client"
import Hero from "../components/Hero";
import Banner from "../components/banner";
import Sale from "@/components/sale";
import BestSeller from "@/components/bestseller";
import Blog from "@/components/blog";

export default function App() {

  return (
    <div>
       <Hero/>
       <Banner/>
       <Sale/>
       <BestSeller/>
       <Blog/>
    </div>
  );
}
