import {
  backgroundflowers,
  borderblue,
  greenflower,
  redleaf1,
  complexflower1,
  slateflower1,
  slatebg,
  redflower1,
  greenbg1,
  yellowcloud1,
} from "@/constants/borders";
import Borderbluered from "@/components/shared/Borderbluered";
import { Facebook, Instagram, Twitter, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SellerInfo(props) {
  return (
    <div className="h-[100%] w-full ">
      <div className="h-48  bg-card-foreground flex flex-col items-center justify-center">
      <Borderbluered/>
        <div className="h-40 w-40 bg-card relative top-20  rounded-[50%]"></div>
      </div>
      <div className="flex flex-row justify-between ">
        <img src={complexflower1} alt="flower" className="relative scale-x-[-1] rotate-180" />
        <img
          src={complexflower1}
          alt="flower"
          className="relative rotate-180"
        />
      </div>
      <div className="relative">
        <h1 className="text-center font-bold text-2xl">Name</h1>
        <div className="flex flex-row gap-4 items-center justify-center mt-2">
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
        <p className="mt-2 text-center text-sm font-semibold">
          Detaiked description of user , his locality products he manufacture
          etc
        </p>
      </div>
      <Tabs
        defaultValue="account"
        className="w-full flex flex-col items-center mt-6"
      >
        <TabsList>
          <TabsTrigger value="Products">Products</TabsTrigger>
          <TabsTrigger value="Blogs">Blogs</TabsTrigger>
        </TabsList>
        <TabsContent value="Products">
            <div className="w-full h-10 bg-white">

            </div>
        </TabsContent>
        <TabsContent value="Blogs">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
