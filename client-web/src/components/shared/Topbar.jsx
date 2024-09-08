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
import {
  complexflower1,
  floralbackground,
  painting2,
  potteryman,
  redflower1,
  redleaf1,
  slatestar1,
  yellowcloud1,
} from "@/constants/borders";
import { Input } from "@/components/ui/input";

import Borderbluered from "./Borderbluered";
import { indianwomen, roseflower } from "@/constants/borders";
import { Button } from "../ui/button";
import Headroom from "react-headroom";
import { backgroundflowers } from "@/constants/borders";
import { ChevronDown, MenuIcon, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <Headroom>
      <div>
        <header
          style={{ backgroundImage: `url(${backgroundflowers})` }}
          className="bg-accent h-16 p-4"
        >
          <div className="flex-1 flex-row justify-end gap-x-10  hidden lg:flex">
            <div className=" flex flex-row justify-center align-center gap-x-2">
              <img
                className="h-9 w-9 border-1 rounded-full bg-primary"
                src={indianwomen}
              />
              <p className="bg-transparent text-white text-4xl rounded-md font-serif">
                <Link to={"/"}>Heritage Haat</Link>
              </p>
            </div>
            <div className="flex flex-1 flex-row justify-end ">
              <Input
                placeholder={"🔎 Search a product,seller,shop etc."}
                className="justify-center w-full  bg-background text-xl"
              />
            </div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Our Store</NavigationMenuTrigger>
                  <NavigationMenuContent
                    className="bg-white"
                    style={{ backgroundImage: `url(${floralbackground})` }}
                  >
                    <ul className="grid gap-y-1 gap-x-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full"
                            to="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              <img src={painting2} />
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <Link
                        to="/seller"
                        title="BestSellers"
                        className="text-xl hover:bg-[rgba(0,0,0,0.2)]"
                      >
                        <div className="flex flex-1 flex-row h-full items-center pl-4">
                          Best Sellers <ChevronDown />{" "}
                        </div>
                      </Link>
                      <Link
                        to="/region"
                        title="RegionBasedProducts"
                        className="text-xl hover:bg-[rgba(0,0,0,0.2)]"
                      >
                        <div className="flex flex-1 flex-row h-full items-center pl-4">
                          Region Based Products <ChevronDown />{" "}
                        </div>
                      </Link>
                      <Link
                        to="/docs/primitives/typography"
                        title="Something"
                        className="text-xl hover:bg-[rgba(0,0,0,0.2)]"
                      >
                        <div className="flex flex-1 flex-row h-full items-center pl-4">
                          <Link to="/search">Explore</Link> <ChevronDown />{" "}
                        </div>
                      </Link>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Community</NavigationMenuTrigger>
                  <NavigationMenuContent
                    className="bg-white"
                    style={{ backgroundImage: `url(${floralbackground})` }}
                  >
                    <ul className="grid gap-y-1 gap-x-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            to="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              <img src={complexflower1} />
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <Link
                        to="/docs"
                        title="Blogs"
                        className="text-xl hover:bg-[rgba(0,0,0,0.2)]"
                      >
                        <div className="flex flex-1 flex-row h-full items-center pl-4">
                          Blogs <ChevronDown />{" "}
                        </div>
                      </Link>
                      <Link
                        to="/docs/installation"
                        title="ContactUs"
                        className="text-xl hover:bg-[rgba(0,0,0,0.2)]"
                      >
                        <div className="flex flex-1 flex-row h-full items-center pl-4">
                          Contact Us <ChevronDown />{" "}
                        </div>
                      </Link>
                      <Link
                        to="/docs/primitives/typography"
                        title="AboutUs"
                        className="text-xl hover:bg-[rgba(0,0,0,0.2)]"
                      >
                        <div className="flex flex-1 flex-row h-full items-center pl-4">
                          About Us
                          <ChevronDown />{" "}
                        </div>
                      </Link>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Collections</NavigationMenuTrigger>
                  <NavigationMenuContent
                    className="bg-white"
                    style={{ backgroundImage: `url(${floralbackground})` }}
                  >
                    <ul className="grid gap-y-1 gap-x-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            to="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              <img src={complexflower1} />
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <Link
                        to="/docs"
                        title="product1"
                        className="text-xl hover:bg-[rgba(0,0,0,0.2)]"
                      >
                        <div className="flex flex-1 flex-row h-full items-center pl-4">
                          Rajasthani Kettle <ChevronDown />{" "}
                        </div>
                      </Link>
                      <Link
                        to="/docs/installation"
                        title="product2"
                        className="text-xl hover:bg-[rgba(0,0,0,0.2)]"
                      >
                        <div className="flex flex-1 flex-row h-full items-center pl-4">
                          Kashmiri Shawl <ChevronDown />{" "}
                        </div>
                      </Link>
                      <Link
                        to="/docs/primitives/typography"
                        title="product3"
                        className="text-xl hover:bg-[rgba(0,0,0,0.2)]"
                      >
                        <div className="flex flex-1 flex-row h-full items-center pl-4">
                          Banarsi Saree <ChevronDown />{" "}
                        </div>
                      </Link>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
                  <NavigationMenuContent
                    className="rounded-md bg-white "
                    style={{ backgroundImage: `url(${floralbackground})` }}
                  >
                    <ul className="grid gap-y-1 gap-x-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            to="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              <img src={complexflower1} />
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <Link
                        to="/docs"
                        title="YourOrders"
                        className="text-xl hover:bg-[rgba(0,0,0,0.2)]"
                      >
                        <div className="flex flex-1 flex-row h-full items-center pl-4">
                          Your Orders <ChevronDown />{" "}
                        </div>
                      </Link>
                      <Link
                        to="/docs/installation"
                        title="YourWishlist"
                        className="text-xl hover:bg-[rgba(0,0,0,0.2)]"
                      >
                        <div className="flex flex-1 flex-row h-full items-center pl-4">
                          Your Wishlist <ChevronDown />{" "}
                        </div>
                      </Link>
                      <Link
                        to="/user"
                        title="ProfileSettings"
                        className="text-xl hover:bg-[rgba(0,0,0,0.2)]"
                      >
                        <div className="flex flex-1 flex-row h-full items-center pl-4">
                          Profile Settings <ChevronDown />{" "}
                        </div>
                      </Link>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex lg:hidden ">
            <Sheet>
              <SheetTrigger>
                <MenuIcon color="white" size={35} strokeWidth={3} />
              </SheetTrigger>
              <div className=" flex flex-1 flex-row justify-between items-center gap-x- ">
                <p className="bg-transparent flex-auto text-center text-white text-4xl rounded-md font-serif">
                  <Link to={"/"}>Heritage Haat</Link>
                </p>
                <Input placeholder="Search..." className="w-40 bg-white" />
              </div>
              <SheetContent
                style={{ backgroundImage: `url(${floralbackground})` }}
                side="left"
              >
                <SheetHeader>
                  <SheetTitle>
                    <div className="m-3">
                      <div
                        style={{ backgroundImage: `url(${floralbackground})` }}
                        className=" flex flex-row justify-center align-center gap-x-2 bg-background border-1 rounded-md p-1 "
                      >
                        <img
                          className="h-100 w-100 border-1 rounded-full bg-primary"
                          src={complexflower1}
                        />
                      </div>
                    </div>
                  </SheetTitle>
                  <SheetDescription>
                    <div className=" flex flex-1 flex-col justify-center gap-y-10">
                      <Button
                        style={{ backgroundImage: `url(${floralbackground})` }}
                        className="text-3xl bg-background hover:bg-[rgba(0,0,0,0.2)]"
                      >
                        Our Store <ChevronDown />
                      </Button>
                      <Button
                        style={{ backgroundImage: `url(${floralbackground})` }}
                        className="text-3xl bg-background hover:bg-[rgba(0,0,0,0.2)]"
                      >
                        Community <ChevronDown />
                      </Button>
                      <Button
                        style={{ backgroundImage: `url(${floralbackground})` }}
                        className="text-3xl bg-background hover:bg-[rgba(0,0,0,0.2)]"
                      >
                        Cart <ChevronDown />
                      </Button>
                      <Button
                        style={{ backgroundImage: `url(${floralbackground})` }}
                        className="text-3xl bg-background hover:bg-[rgba(0,0,0,0.2)]"
                      >
                        Profile <ChevronDown />
                      </Button>
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
