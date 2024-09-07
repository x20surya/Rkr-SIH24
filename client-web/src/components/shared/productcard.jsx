import { useState } from "react";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "../ui/button";
const ProductCard = ({ product, size }) => {
  const [liked, setLiked] = useState(false);
  const rating = 4;
  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="relative p-5 border rounded-lg shadow-md bg-white">
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className="absolute top-0 right-0 p-2 flex space-x-2">
        <Button onClick={toggleLike}>
          <Heart
            size={24}
            className={liked ? "text-red-500" : "text-gray-500"}
          />
        </Button>
        <Button>
          <ShoppingCart size={24} />
        </Button>
      </div>
      <div className="px-3 py-2">
        <div className="font-bold text-lg mb-1">{product.name}</div>
        <div className="flex flex-row  justify-between -mb-5  relative ">
          <p className="text-gray-700 text-sm">${product.price}</p>
          <div className="relative grid grid-cols-5 gap-[1px] left-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-5 h-5  ${
                  star <= rating ? "text-[#e89a00]" : "text-muted-foreground"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.392 2.46a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.392-2.46a1 1 0 00-1.176 0l-3.392 2.46c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.245 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
              </svg>
            ))}
          </div>

        </div>
        <div className=" mt-4 justify-center hidden md:justify-start">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className={`w-5 h-5  ${
                star <= rating ? "text-[#e89a00]" : "text-muted-foreground"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.392 2.46a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.392-2.46a1 1 0 00-1.176 0l-3.392 2.46c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.245 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
