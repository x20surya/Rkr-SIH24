import {
  backgroundflowers,
  borderblue,
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
import { Button } from "@/components/ui/button";
export default function SellerInfo(props) {
  return (
    <div className="h-[100%] w-full relative -top-8">
      <div className=" h-60 bg-card-foreground flex flex-col items-center justify-center">
        <div className="h-60 w-60  bg-card relative top-32  rounded-[50%]"></div>
      </div>
      <Borderbluered />

      <div className="relative flex flex-col items-center justify-center mt-20">
        <h1 className="text-center font-bold text-3xl">Name</h1>
        <div className="flex flex-row gap-4 items-center justify-center mt-4 ">
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
        <Button className="mt-4 w-40">Follow</Button>
        <p className="mt-3 mb-2 text-center text-lg font-semibold">
          Detaiked description of user , his locality products he manufacture
          etc
        </p>
      </div>
      <Tabs
        defaultValue="account"
        className="w-full flex flex-col items-center mt-6"
      >
        <TabsList className="w-52 h-fit">
          <TabsTrigger value="Products" className="text-base">
            Products
          </TabsTrigger>
          <TabsTrigger value="Blogs" className="text-base">
            Blogs
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="Products"
          className="w-screen flex  items-center justify-center "
        >
          <div className="w-[95%] h-[20rem] bg-white rounded-lg flex flex-col  mt-2 mb-8">
            <div className="flex flex-row justify-between ">
              <img
                src={complexflower1}
                alt="flower"
                className="relative scale-x-[-1] rotate-180"
              />
              <img
                src={complexflower1}
                alt="flower"
                className="relative rotate-180"
              />
            </div>
            <p className="relative -top-20 text-center text-2xl font-bold z-10">Products</p>
            <img src={slateflower1} alt="" className="h-5 relative -top-20 " />
          </div>
        </TabsContent>
        <TabsContent
          value="Blogs"
          className="w-screen flex items-center justify-center "
        >
          <div className="w-[95%] h-[20rem] bg-white rounded-lg flex flex-col mb-8">
          <div className="flex flex-row justify-between ">
              <img
                src={complexflower1}
                alt="flower"
                className="relative scale-x-[-1] rotate-180"
              />
              <img
                src={complexflower1}
                alt="flower"
                className="relative rotate-180"
              />
            </div>
            <p className="relative -top-20 text-center text-2xl font-bold z-10">Blogs</p>
            <img src={slateflower1} alt="" className="h-4 relative -top-20 " />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
