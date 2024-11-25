"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import * as z from "zod"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "Importance of stationary",
    image: "/images/blog_1.png",
    date: "dec 01, 2024",
    author: "admin"
  },
  {
    id: 2,
    title: "Art Supplies",
    image: "/images/blog_2.png",
    date: "dec 26, 2024",
    author: "admin"
  },
  {
    id: 3,
    title: "Design trends",
    image: "/images/blog_3.png",
    date: "dec 05, 2024",
    author: "admin"
  }
];

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export default function Blog() {
  
  return (
    <div className="space-y-24 py-16">
      {/* Blog Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card 
              key={post.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-[300px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6 text-center space-y-4 bg-white">
                <h4 className="text-xl font-semibold group-hover:text-red-600 transition-colors">
                  {post.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  by {post.author} | {post.date}
                </p>
                <Button 
                  variant="link" 
                  className="text-red-600 hover:text-red-700"
                >
                  Read more
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}