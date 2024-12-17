"use client"
import {createContext,useContext, useEffect, useState} from "react";
import { cartItem } from "@/lib/types/cart";

type cartContextType={
    cartItems:cartItem[],
    addToCart: (product : cartItem)=>void,
    removeFromCart:(id:number)=>void,
    updateQuantity:(id:number, quantity:number)=>void,
    clearCart: ()=>void
}

const CartContext= createContext<cartContextType|undefined>(undefined);

export function CartProvider({children}:{children:React.ReactNode}){
    const [cartItems,setCartItems]= useState<cartItem[]>([]);
    useEffect(()=>{
        const stored= localStorage.getItem('cartItems');
        if(stored)
        {
            setCartItems(JSON.parse(stored));
        }
    },[])
    const addToCart=(product:cartItem)=>{
        setCartItems(prev=>{
            const exists=prev.find(item=>item.id===product.id)
            const newCart=exists? 
                   (prev.map(item=>
                        item.id===product.id ? 
                        {...item, quantity:item.quantity+1}:item))
                    :
                    [...prev,{...product,quantity:1}]
                    localStorage.setItem('cartItems',JSON.stringify(newCart))
                    return newCart
            })
    }
    const removeFromCart=(id:number)=>{
        setCartItems(prev=>{
            const newCart=prev.filter(item=>(item.id!==id))
            localStorage.setItem('cartItems',JSON.stringify(newCart))
            return newCart
        })
    }
    const updateQuantity=(id:number,quantity:number)=>{
        setCartItems(prev=>{
            const newCart=prev.map(item=>
                item.id===id ? ({...item,quantity}):item
            )
            localStorage.setItem('cartItems',JSON.stringify(newCart))
            return newCart
        })
    }
    const clearCart=()=>{
        setCartItems([]);
        localStorage.removeItem('cartItems')
    }
    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart=()=>{
    const context=useContext(CartContext)
    if(!context)    throw new Error('use cart must be used withing cartProvider')
    return context
}
