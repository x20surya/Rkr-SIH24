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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function State() {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="relative -top-6 flex flex-col  items-center h-[35rem] bg-[url('@/assets/rajasthan.jpeg')] bg-cover bg-no-repeat shadow-md ">
        <div className="flex items-center justify-center gap-3 h-full w-full bg-black/50">
          
          <div>
            <h1 className="text-9xl font-bold  z-10 drop-shadow-md text-white">
              राजस्थान
            </h1>
            <p className="font-bold text-5xl -top-1 relative left-[55%] z-10 text-yellow-200 w-fit border-t-2 border-yellow-200">
              Rajasthan
            </p>
          </div>

          
        </div>
        
      </div>
      <div className="relative -top-6">
          <Borderbluered />
        </div>
      <div>
        <div className="flex items-center justify-center ">
          <Card className="flex flex-col justify-center items-center w-[90%] border-none mt-3 shadow-md">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">
                About
              </CardTitle>
            </CardHeader>
            <CardContent className="w-[80%]">
              <p className="text-center ">
                Rajasthan is famous for textiles, semi-precious stones, and
                handicrafts, as well as for its traditional and colorful
                commonly balladsart. Rajasthani furniture is known for its
                intricate carvings and bright colours. Block prints, tie and dye
                prints, Bagaru prints, Sanganer prints and Zari embroidery are
                famous.Block prints, tie and dye prints, Bagaru prints, Sanganer
                prints and Zari embroidery are famous. Rajasthanis are skilled
                in making textile products, handicrafts, gems and jewellery,
                dimensional stones, agro and food products.
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Tabs
            defaultValue="account"
            className="flex flex-col items-center mt-6"
          >
            <TabsList className="w-52 h-fit">
              <TabsTrigger value="Products" className="text-base">
                Products
              </TabsTrigger>
              <TabsTrigger value="Sellers" className="text-base">
                Sellers
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="Products"
              className="w-full flex  items-center justify-center "
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
                <p className="relative -top-20 text-center text-2xl font-bold z-10">
                  Products
                </p>
                <img
                  src={slateflower1}
                  alt=""
                  className="h-5 relative -top-20 "
                />
              </div>
            </TabsContent>
            <TabsContent
              value="Sellers"
              className="w-full flex items-center justify-center "
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
                <p className="relative -top-20 text-center text-2xl font-bold z-10">
                  Sellers
                </p>
                <img
                  src={slateflower1}
                  alt=""
                  className="h-4 relative -top-20 "
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
