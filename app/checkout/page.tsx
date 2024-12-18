// app/checkout/page.tsx
"use client"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Image from "next/image"
import { useEffect, useState } from "react"
import { cartItem } from "@/lib/types/cart"
import BackButton from "@/components/backButton"

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  address: z.string().min(10, "Full address is required"),
})

export default function CheckoutPage() {
    const [cart,setCart]= useState<cartItem[]>([])
    useEffect(() => {
        const storedCart = localStorage.getItem("cartItems")
        if (storedCart) {
          setCart(JSON.parse(storedCart))
        }
      }, [])   
  const form = useForm({
    resolver: zodResolver(formSchema),
  })

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div >
        <BackButton className="ml-6 p-4 h-4 mt-6" variant="outline" title="Back" />
    <div className="container mx-auto px-4 py-8">
        
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order Summary */}
        <Card className="lg:col-span-2 p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 py-4 border-b">
                <div className="relative w-20 h-20">
                    {item.image?(
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                    ):(
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500">No Image</span>
                        </div>
                    )}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <p className="font-medium">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Checkout Form */}
        <Card className="p-6 space-y-6">
          <h2 className="text-xl font-semibold">Billing Details</h2>
          <form onSubmit={form.handleSubmit(console.log)} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name">Full Name</label>
              <Input
                id="name"
                {...form.register("name")}
                className="w-full"
              />
              {form.formState.errors.name && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.name.message?.toString()}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="email">Email Address</label>
              <Input
                id="email"
                type="email"
                {...form.register("email")}
                className="w-full"
              />
              {form.formState.errors.email && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.email.message?.toString()}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="phone">Phone Number</label>
              <Input
                id="phone"
                {...form.register("phone")}
                className="w-full"
              />
              {form.formState.errors.phone && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.phone.message?.toString()}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="address">Shipping Address</label>
              <Textarea
                id="address"
                {...form.register("address")}
                className="w-full"
              />
              {form.formState.errors.address && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.address.message?.toString()}
                </p>
              )}
            </div>

            <div className="border-t pt-4 mt-6">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Button 
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            >
              Place Order
            </Button>
          </form>
        </Card>
      </div>
      </div>
    </div>
  )
}