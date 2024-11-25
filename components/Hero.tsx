"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";


const sliderData = [
  {
    image: "/images/slider_1.png",
    subtitle: "Autumn / Winter Collection 2024",
    title: "Up to 40% Off Selected Items",
    link: "#",
  },
  {
    image: "/images/slider_2.png",
    subtitle: "Exclusive Collection 2024",
    title: "50% Off on First Purchase",
    link: "/categories",
  },
  {
    image: "/images/slider_3.png",
    subtitle: "Holiday Special Collection 2024",
    title: "Get Free Shipping on Orders Over $50",
    link: "/categories",
  },
];

export default function Hero(){
  const [api, setApi] = useState<any>()

  useEffect(() => {
    if (!api) return

    const autoplay = setInterval(() => {
      api.scrollNext()
    }, 3000)

    return () => clearInterval(autoplay)
  }, [api])

  return (
    <Carousel 
      opts={{
        align: "start",
        loop: true,
      }}
      setApi={setApi}
      className="w-full relative"
    >
      <CarouselContent>
        {sliderData.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[600px] w-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/40">
                <div className="container mx-auto h-full flex items-center justify-center">
                  <div className="text-center text-white space-y-6">
                    <h2 className="text-xl font-semibold">{slide.subtitle}</h2>
                    <h1 className="text-5xl font-bold">{slide.title}</h1>
                    <Button 
                      size="lg"
                      className="bg-red-600 hover:bg-red-700"
                      asChild
                    >
                      <a href={slide.link}>Shop Now</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2" />
      <CarouselNext className="absolute right-4 top-1/2" />
    </Carousel>
  )
}
