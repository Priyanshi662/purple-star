"use client"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { useCart } from "@/context/cartContext"
import BackButton from "@/components/backButton"
import { useToast } from "@/hooks/use-toast"

const products = [
    {
      id: "1",
      name: "Classic Hardcover Notebook",
      price: 15.00,
      originalPrice: 20.00,
      image: "/images/product_1.png",
      category: "notebooks",
      discount: 20,
      isNew: false,
      quantity: 1
    },
    {
      id: "2",
      name: "Premium Ballpoint Pen Set",
      price: 10.00,
      originalPrice: null,
      image: "/images/product_2.png",
      category: "pens",
      discount: null,
      isNew: true,
      quantity: 1
    },
    {
      id: "3",
      name: "A4 Document Folder",
      price: 5.00,
      originalPrice: null,
      image: "/images/product_3.png",
      category: "folders",
      discount: null,
      isNew: false,
      quantity: 1
    },
    {
      id: "4",
      name: "Acrylic Paint Set",
      price: 25.00,
      originalPrice: null,
      image: "/images/product_4.png",
      category: "art-supplies",
      discount: null,
      isNew: false,
      quantity: 1
    },
    {
      id: "5",
      name: "Desk Organizer Set",
      price: 30.00,
      originalPrice: null,
      image: "/images/product_5.png",
      category: "office-supplies",
      discount: null,
      isNew: false,
      quantity: 1
    },
    {
      id: "6",
      name: "Spiral Notebook",
      price: 8.00,
      originalPrice: 13.00,
      image: "/images/product_6.png",
      category: "notebooks",
      discount: 5,
      isNew: false,
      quantity: 1
    }
  ];

const categories = [
  { value: "all", label: "All" },
  { value: "notebooks", label: "Notebooks" },
  { value: "pens", label: "Pens & Pencils" },
  { value: "folders", label: "Folders" },
  { value: "art-supplies", label: "Art Supplies" },
  { value: "office-supplies", label: "Office Supplies" },
];

export default function Shop() {
  const {addToCart}= useCart();
  const [activeCategory, setActiveCategory] = useState("all");
  const {toast} = useToast();
  const filteredProducts = products.filter(product => 
    activeCategory === "all" ? true : product.category === activeCategory
  );
  const handleAddToCart=()=>{
    toast({
      title:"Cart Updated",
      description:"Added to cart successfully",
    })
  }
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-row gap-x-60">
      <BackButton title="back" />
      <h2 className="text-3xl font-bold text-center mb-8 ">
        Stationery Products
      </h2>
      </div>

<Tabs defaultValue="all" className="w-full mb-10">
  <TabsList className="flex flex-row justify-center gap-2 h-14">
    {categories.map((category) => (
      <TabsTrigger 
        key={category.value}
        value={category.value}
        onClick={() => setActiveCategory(category.value)}
        className="px-4 py-2 data-[state=active]:bg-red-600 data-[state=active]:text-white transition-colors"
      >
        {category.label}
      </TabsTrigger>
    ))}
  </TabsList>

        <TabsContent value={activeCategory} className="mt-6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (


              <Card key={product.id} className="group relative overflow-hidden">
                <CardContent className="p-4">
                  <div className="relative h-64 mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white">
                      <Heart className="h-5 w-5" />
                    </button>
                    {product.discount && (
                      <Badge className="absolute top-4 left-4 bg-red-500">
                        -{product.discount}%
                      </Badge>
                    )}
                    {product.isNew && (
                      <Badge className="absolute top-4 left-4 bg-green-500">
                        New
                      </Badge>
                    )}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">{product.name}</h3>
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
                <CardFooter>
                  <Button className="w-full" variant="outline" onClick={()=>{addToCart(product); handleAddToCart()}}>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}