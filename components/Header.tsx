import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { LogIn} from "lucide-react";
import React from "react";


export default function Header(){
    return(
        <div className="flex flex-row p-4 items-center top-0 justify-between h-15 bg-slate-900 z-[100]">
            <p className="flex text-muted-foreground w-full ">
                FREE SHIPPING ON ALL ORDERS
            </p>
            <div className="flex gap-2">
              <NavigationMenu >
                  <NavigationMenuList className="relative ">
                    <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-8 px-3 text-muted-foreground bg-slate-900">
                      US
                    </NavigationMenuTrigger>
                    <NavigationMenuContent
                    >
                    <ul>
                      {["CAD","AUD","EUR","GBP"].map((currency)=>(
                          <ListItem key={currency} className="cursor-pointer border-b pb-4 items-center">
                            {currency}
                          </ListItem>
                      ))}
                    </ul>
                    </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
              </NavigationMenu>
                      
              <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-slate-900 text-muted-foreground">
                      English
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                    <ul>
                      {["French","Italian","German","spanish"].map((language)=>(
                          <ListItem key={language} className="cursor-pointer border-b pb-4 items-center">
                            {language}
                          </ListItem>
                      ))}
                    </ul>
                    </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>

              </NavigationMenu>

              <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-slate-900 text-muted-foreground">
                      My account
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                    <ul>
                          <ListItem className="cursor-pointer p-2 items-center w-35">
                            <span className="flex">
                            Sign in
                            <LogIn/>
                            </span>
                          </ListItem>
                    </ul>
                    </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>

              </NavigationMenu>
            </div>

        </div>
    )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"