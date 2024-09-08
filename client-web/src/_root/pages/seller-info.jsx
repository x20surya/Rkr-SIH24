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
import { Link, useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/shared/productcard";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "@/lib/backend/api";

export default function SellerInfo(props) {
  const { sellerId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
  useEffect(() => {
    const fetchdata = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios({
          url: "user/getSeller",
          method: "post",
          baseURL: baseURL,
          data: {
            sellerId: sellerId,
          },
          headers: {
            authentication: `Pookie ${token}`,
          },
        });
        if (response.data.error) {
          throw Error(response.data.error);
        }
        console.log(response.data)
        setData(response.data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, [sellerId]);

  if (loading) return <div>Loading..</div>;

  if (error) return <div>Error : {error}</div>;

  return (
    <div className="h-[100%] w-full relative -top-8">
      <div className=" h-60 bg-card-foreground flex flex-col items-center justify-center">
        <div className="h-60 w-60  bg-card relative top-32  rounded-[50%]"></div>
      </div>
      <Borderbluered />

      <div className="relative flex flex-col items-center justify-center mt-20">
        <h1 className="text-center font-bold text-3xl">{data.user.first_name} {data.user.last_name}</h1>
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
          {data.seller.description}
        </p>
      </div>
      <Tabs
        defaultValue="Products"
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
          <div className="w-[95%]  bg-white rounded-lg flex flex-col  mt-2 mb-8">
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
            <p className="relative -top-20 text-center text-4xl font-bold z-10">
              Products
            </p>
            <img src={slateflower1} alt="" className="h-7 relative -top-20 " />
            <div className="relative -top-12 grid lg:grid-cols-4 grid-cols-2 gap-4 p-3">
              {products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
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
            <p className="relative -top-20 text-center text-4xl font-bold z-10">
              Blogs
            </p>
            <img src={slateflower1} alt="" className="h-6 relative -top-20 " />
            <div></div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
