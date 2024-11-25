import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Minus, Plus, Search, ShoppingCartIcon, Trash2, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { cartItem } from "@/lib/types/cart"
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export default function Navbar(

    {   
        cartItems,
        removeFromCart,
        updateQuantity
    } :
        {
            
            cartItems:cartItem[],
            removeFromCart: (id:string) =>void,
            updateQuantity:(id:string, quantity:number) =>void
        }
    )   
{
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    return(
        <>
        <div className="flex flex-row p-4 items-center top-0 sticky justify-between bg-purple-300 z-20">
            <Link href="/">
            <span className="flex p-4">
                <h2 className="text-2xl font-bold">
                    PURPLE
                </h2>
                <h2 className="text-2xl text-red-600 font-bold">
                    STAR
                </h2>
            </span>
            </Link>
        
        <div className="flex flex-row border-none ml-40">
        <Menubar className="bg-purple-300 shadow-none border-none flex-1 mx-20 ml-40 flex justify-between w-full"> 
                <MenubarMenu>
                    <MenubarTrigger className="font-semibold hover:bg-purple-500/50">Home</MenubarTrigger>
                    <MenubarTrigger className="font-semibold hover:bg-purple-500/50">Shop</MenubarTrigger>
                    <MenubarTrigger className="font-semibold hover:bg-purple-500/50">Books</MenubarTrigger>
                    <MenubarTrigger className="font-semibold hover:bg-purple-500/50">Pages</MenubarTrigger>
                    <Link href="/contactUs">
                    <MenubarTrigger className="font-semibold hover:bg-purple-500/50">Contact</MenubarTrigger>
                    </Link>
                </MenubarMenu>
            </Menubar>
            </div>
            <div className="flex items-center gap-6 mr-5">
                <Search className="cursor-pointer hover:text-purple-500"/>
                <User className="cursor-pointer hover:text-purple-500"/>
                
                <Sheet>
                <SheetTrigger>
                    <ShoppingCartIcon className="cursor-pointer hover:text-purple-500"/>
                </SheetTrigger>
                <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col gap-4 mt-6">
          {cartItems.length === 0 ? (
            <p className="text-center text-muted-foreground">Your cart is empty</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="relative w-20 h-20">
                      <Image 
                        src={item.image} 
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </CardContent>
                </Card>
              ))}

              <div className="mt-4 space-y-4">
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                
                <Button 
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  asChild
                >
                  <Link href="/checkout">
                    Proceed to Checkout
                  </Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
                </Sheet>
            </div>
        </div>
        </>
    )
}


// // components/Navbar.tsx
// import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Minus, Plus, Trash2 } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"

// export default function Navbar({ cartItems, updateQuantity, removeFromCart }) {
//   const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

//   return (
//     <Sheet>
//       <SheetTrigger>
//         <div className="relative">
//           <ShoppingCartIcon className="cursor-pointer hover:text-purple-500"/>
//           {cartItems.length > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
//               {cartItems.length}
//             </span>
//           )}
//         </div>
//       </SheetTrigger>
     
//     </Sheet>
//   )
// }