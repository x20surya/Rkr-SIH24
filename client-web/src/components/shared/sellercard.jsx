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
    <div className="flex items-center justify-center">
      <Card className="border-none shadow-lg h-fit w-fit bg-background rounded-md p-0">
        <CardContent className="flex flex-col w-full">
          <div className="flex items-center justify-center p-2 bg-card ">
            <img
              src="https://picsum.photos/200"
              alt=""
              className="w-40 h-40 p-1"
            />
          </div>
          <div className="mb-10 flex flex-col  gap-3 items-center justify-center">
            <h1 className=" mt-4 text-3xl font-bold">Name</h1>
            <p className="text-lg font-medium">description of the seller</p>
            <div className="flex flex-row gap-4 mt-4">
              <Link>
                <Facebook
                  color="white"
                  className="bg-primary rounded-lg h-8 w-8 p-1 "
                />
              </Link>
              <Link>
                <Instagram
                  color="white"
                  className="bg-primary rounded-lg h-8 w-8 p-1 "
                />
              </Link>
              <Link>
                <Twitter
                  color="white"
                  className="bg-primary rounded-lg h-8 w-8 p-1 "
                />
              </Link>
            </div>
            <Link to="/region/state/seller-id">
              <Button className="mt-4">View Profile</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default Sellercard;
