import {
    backgroundflowers,
    complexflower1,
    slateflower1,
    slatebg,
    redflower1,
    greenbg1,
    yellowcloud1,
    borderblue,
    roseflower,
  } from "@/constants/borders";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Twitter, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import ProductCard from "./productcard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    image: "https://picsum.photos/200",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    image: "https://picsum.photos/200",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    image: "https://picsum.photos/200",
  },
  {
    id: 4,
    name: "Product 4",
    price: 400,
    image: "https://picsum.photos/200",
  },
  {
    id: 5,
    name: "Product 5",
    price: 500,
    image: "https://picsum.photos/200",
  },
];

const Sellercard = () => {
  return (
    <div>
      <Card className="border-none bg-background">
        <CardContent className="flex flex-col p-0">
          <div className="h-full w-full  grid grid-cols-2 ">
            <div>
             <img src="https://picsum.photos/200" alt="" className="w-full lg:h-96 h-full" />
            </div>
            <div className="flex flex-col items-center justify-center gap-3 pl-2 pr-2 bg-card">
                
              <h1 className="text-3xl font-bold mt-3">Name</h1>
              <p className="text-sm font-medium text-center max-w-full lg:max-w-[60%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>
              <div className="flex flex-row gap-4 mb-4">
                <Link>
                  <Facebook
                    color="white"
                    className="bg-primary rounded-lg  lg:h-10 lg:w-10 lg:p-2 max-sm:h-8 max-sm:w-8 max-sm:p-1 sm:h-8 sm:w-8 sm:p-1"
                  />
                </Link>
                <Link>
                  <Instagram
                    color="white"
                    className="bg-primary rounded-lg p-1 lg:h-10 lg:w-10 lg:p-2 max-sm:h-8 max-sm:w-8 max-sm:p-1 sm:h-8 sm:w-8 sm:p-1"
                  />
                </Link>
                <Link>
                  <Twitter
                    color="white"
                    className="bg-primary rounded-lg p-1 lg:h-10 lg:w-10 lg:p-2 max-sm:h-8 max-sm:w-8 max-sm:p-1 sm:h-8 sm:w-8 sm:p-1"
                  />
                </Link>
              </div>
              <Button className="w-24 h-8 lg:w-40 lg:h-10 -mt-4 mb-2">View Profile</Button>
            </div>
          </div>
          <div className="flex w-full justify-center items-center rounded-lg max-sm:hidden sm:hidden lg:contents relative -top-10 rounded-t-lg">
            <Carousel className="ml-[3.2rem] mr-[3.2rem] mt-3 rounded-lg mb-4">
              <CarouselContent className="bg-background">
                {products.map((product, index) => (
                  <CarouselItem className=" md:basis-1/2 lg:basis-1/3">
                    <ProductCard key={index} product={product} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default Sellercard;
