"use client"
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const bannerItems = [
  {
    image: "/images/banner_1.png",
    category: "Notepads",
    link: "/categories"
  },
  {
    image: "/images/banner_2.png",
    category: "Daily Planner",
    link: "/categories"
  },
  {
    image: "/images/banner_3.png",
    category: "Wall Decor Sets",
    link: "/categories"
  }
];

export default function Banner() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        New Arrivals
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bannerItems.map((item, index) => (
          <Link href={item.link} key={index}>
            <Card className="relative h-[300px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative w-full h-full">
                <Image
                  src={item.image}
                  alt={item.category}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-colors" />
                <div className="absolute bottom-6 left-0 right-0">
                  <h3 className="mb-5 py-20 text-white text-xl font-semibold text-center">
                    {item.category}
                  </h3>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}