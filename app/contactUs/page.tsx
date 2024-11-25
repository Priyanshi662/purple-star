// app/contact/page.tsx
"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, ArrowLeft } from "lucide-react"
import dynamic from "next/dynamic"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"
import Header from "@/components/Header"
import Link from "next/link"

// Dynamically import Map component to avoid SSR issues
const Map = dynamic(() => import("@/components/Map"), { ssr: false })

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  website: z.string().url().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export default function ContactPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)
    // Handle form submission
  }

  return (
    <div className="container mx-auto px-4 py-8">
     <Header/>
        <div className="p-4 h-4">
        <Link href="/">
            <ArrowLeft/>
        </Link>
        </div>
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm mb-8">
        <a href="/" className="text-muted-foreground hover:text-foreground">Home</a>
        <span>/</span>
        <span>Contact</span>
      </div>

      {/* Map */}
      <div className="h-[400px] mb-12 rounded-lg overflow-hidden">
        <Map />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <Card>
            <CardContent className="p-6 space-y-6">
              <h1 className="text-3xl font-bold">Contact Us</h1>
              <p className="text-muted-foreground">
                There are many ways to contact us. You may drop us a line, give us a call or send an email.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-red-600" />
                  <p>(800) 686-6688</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-red-600" />
                  <p>info.purple@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <p>123 Street Name, City, Country</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-red-600" />
                  <div>
                    <p>Open hours: 8.00-18.00 Mon-Fri</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Follow Us</h2>
                <div className="flex gap-4">
                  {[
                    { icon: <Facebook className="h-5 w-5" />, color: "bg-blue-600" },
                    { icon: <Twitter className="h-5 w-5" />, color: "bg-sky-500" },
                    { icon: <Instagram className="h-5 w-5" />, color: "bg-pink-600" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`${social.color} p-2 rounded-full text-white hover:opacity-80 transition-opacity`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card>
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold mb-4">Get In Touch With Us!</h1>
            <p className="text-muted-foreground mb-6">
              Fill out the form below to receive a free and confidential response.
            </p>
            
            {/* <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <Input
                placeholder="Name"
                {...form.register("name")}
                className="border-gray-200"
              />
              <Input
                placeholder="Email"
                type="email"
                {...form.register("email")}
                className="border-gray-200"
              />
              <Input
                placeholder="Website"
                {...form.register("website")}
                className="border-gray-200"
              />
              <Textarea
                placeholder="Message"
                rows={4}
                {...form.register("message")}
                className="border-gray-200"
              />
              <Button 
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white"
              >
                Send Message
              </Button>
            </form> */}
          </CardContent>
        </Card>
      </div>
      <Footer/>
    </div>
  )
}