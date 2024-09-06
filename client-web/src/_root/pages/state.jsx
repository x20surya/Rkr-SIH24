import Borderbluered from "@/components/shared/Borderbluered";
import {
    backgroundflowers,
    complexflower1,
    slateflower1,
    slatebg,
    redflower1,
    greenbg1,
    yellowcloud1,
    borderblue,
    roseflower
  } from "@/constants/borders";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function State() {
  return (
<div className="h-full w-full">
<div className=" flex flex-col items-center h-40 w-screen bg-primary mb-4 shadow-md">
      <Borderbluered />
      <div className="flex items-center justify-center gap-3 mt-2  backdrop-sepia bg-secondary/20">
      <img src={roseflower} alt="rose" className="relative left-8 scale-x-[-1] drop-shadow-md h-20 w-20 lg:h-24 lg:w-24"/>
      <h1 className="font-bold lg:text-6xl text-5xl z-10 backdrop-contrast-75">Rajasthan</h1>
      <img src={roseflower} alt="rose"  className="relative right-8 scale-x-[-1] drop-shadow-md h-20 w-20 lg:h-24 lg:w-24" />
      </div>
    </div>
    <div className="h-full w-full">
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
                className="relative scale-x-[-1] rotate-180 "
              />
              <img
                src={complexflower1}
                alt="flower"
                className="relative rotate-180 "
              />
            </div>
            <p className="relative -top-20 text-center text-2xl font-bold z-10">Blogs</p>
            <img src={slateflower1} alt="" className="h-4 relative -top-20 " />
          </div>
        </TabsContent>
      </Tabs>
      </div>
    </div>
    
  );
}
