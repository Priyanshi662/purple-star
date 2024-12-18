"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Truck, DollarSign, RotateCcw, Clock } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { useEffect } from "react"
import Image from "next/image"

const products = [
    {
      id: 1,
      name: "Classic Hardcover Notebook",
      price: 15.00,
      originalPrice: 20.00,
      image: "/images/product_1.png",
      category: "notebooks",
      discount: 20,
      isNew: false
    },
    {
      id: 2,
      name: "Premium Ballpoint Pen Set",
      price: 10.00,
      originalPrice: null,
      image: "/images/product_2.png",
      category: "pens",
      discount: 3,
      isNew: true
    },
    {
      id: 3,
      name: "A4 Document Folder",
      price: 5.00,
      originalPrice: null,
      image: "/images/product_3.png",
      category: "folders",
      discount: 20,
      isNew: false
    }, 
    {
      id: 4,
      name: "Spiral Notebook",
      price: 8.00,
      originalPrice: 13.00,
      image: "/images/product_6.png",
      category: "notebooks",
      discount: 5,
      isNew: false
    }
  ];

const benefits = [
  {
    icon: <Truck className="h-8 w-8"/>,
    title: "Free Shipping",
  },
  {
    icon: <DollarSign className="h-8 w-8"/>,
    title: "Cash on Delivery",
  },
  {
    icon: <RotateCcw className="h-8 w-8"/>,
    title: "45 Days Return",
  },
  {
    icon: <Clock className="h-8 w-8"/>,
    title: "Opening All Week",
  }
];

export default function BestSeller() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
    }
  });

  useEffect(() => {
    if (emblaApi) {
      const intervalId = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000);
      return () => clearInterval(intervalId);
    }
  }, [emblaApi]);

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      {/* Best Sellers Section */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Best Sellers</h2>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {products.map((product) => (
              <div key={product.id} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] p-4">
                <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-4">
                    <div className="relative h-64 mb-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain transition-transform group-hover:scale-105"
                      />
                      <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white">
                        <Heart className="h-5 w-5" />
                      </button>
                      {product.discount && (
                        <Badge className="absolute top-4 left-4 bg-red-600">
                          -${product.discount}
                        </Badge>
                      )}
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold truncate">{product.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="text-red-600 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <div>
                <h3 className="font-semibold uppercase">{benefit.title}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}