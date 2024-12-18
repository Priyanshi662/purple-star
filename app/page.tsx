"use client"
import Hero from "../components/Hero";
import Banner from "../components/banner";
import Sale from "@/components/sale";
import BestSeller from "@/components/bestseller";
import Blog from "@/components/blog";
import { useEffect, useState } from "react";
import { cartItem } from "@/lib/types/cart";

export default function App() {
  
  const [cart,setCart]= useState<cartItem[]>([]);
  // Load cart items from localStorage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems")
    if (storedCart) {
      setCart(JSON.parse(storedCart))
    }
  }, [])

  // Save cart items to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart))
  }, [cart])
  
  const addToCart=(product:any)=>{
    setCart(prev=>{
        const exists = prev.find(item => item.id===product.id)
        if(exists)
        {  return prev.map(item=>
            item.id === product.id ? {...item,quantity:item.quantity+1} : item
          )
        }
        return [...prev, {...product,quantity:1}]
    })
  } 

  const removeCartItem =( product :any )=>{
    setCart(prev=>prev.filter(item=>item.id!==product.id))
  }

  const updateQuantity =(productId: string, quantity:number) =>{
    setCart(prev=>
      prev.map(item=>
          item.id===productId? {...item,quantity} : item
      )
    )
  }
  
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
