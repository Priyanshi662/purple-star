"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs"
import Image from "next/image"

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 -mt-12">
      <Card className="w-full max-w-md overflow-hidden shadow-xl">
        <div className="relative h-32 bg-purple-200">
          <Image
            src="/images/stationary-hero.png"
            alt="Stationary items"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-purple-600/60" />
        </div>
        
        <CardHeader className="space-y-1 text-center relative -mt-8">
          <div className="inline-flex items-center justify-center gap-2 mt-4">
          <h1 className="text-2xl font-bold ">Welcome to 
            PURPLE</h1>
            <span className="text-red-600 text-2xl font-bold">STAR</span>
        </div>
          <p className="text-sm text-muted-foreground">
            Your one-stop shop for premium stationery
          </p>
        </CardHeader>

        <CardContent className="space-y-4 text-center px-6">
          <p className="text-sm text-muted-foreground">
            Sign in to explore our collection of high-quality stationery products, 
            exclusive deals, and personalized recommendations.
          </p>
        </CardContent>

        <CardFooter className="flex flex-col gap-4 px-6 pb-8">
          <LoginLink className="w-full">
            <Button 
              className="w-full bg-purple-500 hover:bg-purple-700 text-white transition-all duration-200 py-6"
            >
              Sign in to continue
            </Button>
          </LoginLink>
          <p className="text-xs text-center text-muted-foreground">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}