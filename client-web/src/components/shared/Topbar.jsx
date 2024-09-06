import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { floralbackground } from "@/constants/borders";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";

import Borderbluered from "./Borderbluered";
import { indianwomen, roseflower } from "@/constants/borders";
import { Button } from "../ui/button";
import Headroom from "react-headroom"; 

export default function Topbar() {
  return (
    <Headroom>
    <div>
      <header className="bg-accent h-100px p-4">
        <div className="flex-1 flex-row gap-x-10 justify-end  hidden lg:flex">
          <div className=" flex flex-row justify-center align-center gap-x-2">
            <img
              className="h-9 w-9 border-1 rounded-full bg-primary"
              src={indianwomen}
            />
            <p className="bg-background rounded-md">NavbyUtkarsh</p>
          </div>
          <div className="flex flex-1 flex-row justify-end gap-x-(-1)">
            <Input
              placeholder={"🔎 Search a product,seller,shop etc."}
              className="justify-center w-1/2 bg-background"
            />
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Our Store</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink></NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Community</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Cart</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex lg:hidden">
          <Sheet >
            <SheetTrigger>
              <HamburgerMenuIcon className=" bg-background rounded-sm"></HamburgerMenuIcon>
            </SheetTrigger >
            <SheetContent style={{backgroundImage : `url(${floralbackground})`}} side="left">
              <SheetHeader >
                <SheetTitle>
                  <div className="m-3">
                    <div className=" flex flex-row justify-center align-center gap-x-2 bg-accent border-1 rounded-md p-1 ">
                      <img
                        className="h-9 w-9 border-1 rounded-full bg-primary"
                        src={indianwomen}
                      />
                    </div>
                    <Borderbluered />
                  </div>
                </SheetTitle>
                <SheetDescription>
                  <div className=" flex flex-1 flex-col justify-center gap-y-1">
                    <Button className=" border-2 border-primary-foreground">Our Store</Button>
                    <Button className=" border-2 border-primary-foreground">Community</Button>
                    <Button className=" border-2 border-primary-foreground">Cart</Button>
                    <Button className=" border-2 border-primary-foreground">Profile</Button>
                    
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <Borderbluered />
    </div>
    </Headroom>
  );
}
