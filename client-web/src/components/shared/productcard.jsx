import { useEffect, useState } from "react";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "../ui/button";
import { yellowcloud1 } from "@/constants/borders";
import axios from "axios";
import { baseURL } from "@/lib/backend/api";

const ProductCard = ({ id }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios({
          url: "product/getProduct",
          method: "post",
          baseURL: baseURL,
          data: {
            productId: id,
          },
          headers: {
            authentication: `Pookie ${token}`,
          },
        });
        if (response.data.error) {
          throw Error(response.data.error);
        }
        if(response.data.product)
        setData(response.data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, [id]);

  if (loading) return <div>Loading</div>;

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-transparent flex flex-col justify-center items-center h-72 w-72 p-3">
      <div className="w-full flex-1 flex items-center justify-center">
        <img src={yellowcloud1} />
      </div>
      <div className="bg-foreground border-2 w-full h-2 border-card-foreground"></div>
      <div className="flex flex-col w-full flex-1">
        <div className="w-full">
          <h1 className="text-xl font-bold pt-3">{"Product name"}</h1>
        </div>
        <div className="flex h-full items-center">
          <div className="flex-1">
            <Button className="border-4 border-card-foreground">
              Add to cart
            </Button>
          </div>
          <div className="flex-1">Ratings</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
