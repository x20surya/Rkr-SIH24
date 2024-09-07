import ProductCard from "@/components/shared/productcard";
import { floralbackground } from "@/constants/borders";
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    image:
      "https://eddiebashacollection.com/wp-content/uploads/2016/06/Untitled-web.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    image:
      "https://cdn11.bigcommerce.com/s-3y1hjx24/images/stencil/1280x1280/products/28170/44754/90b__22963.1585676017.jpg?c=2",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    image:
      "https://canddgiftsnm.com/cdn/shop/products/LP0053B.jpg?v=1617149807",
  },
  {
    id: 4,
    name: "Product 4",
    price: 400,
    image:
      "https://i.ytimg.com/vi/R2-QEXCtVWM/maxresdefault.jpg",
  }
];
export default function Recommendation() {
  return (
    <div style={{ backgroundImage: `url(${floralbackground})` }} className="w-full h-full pr-20 bg-white ">
    <div className=" w-full m-8 mr-16 gap">
      <section  className="bg-background m-4 rounded-md w-full"  >
        <h1 className="m-8 text-4xl pt-6"><b>Trending Today </b></h1>
        <div className=" grid p-10 pt-0 grid-cols-2 lg:grid-cols-4 w-full">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
      <section className="bg-background m-4 rounded-md w-full">
      <h1 className="m-8 text-4xl pt-6 "><b>Based on your previos orders </b></h1>
        <div className=" grid p-10 pt-0  grid-cols-2 lg:grid-cols-4 ">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
      <section className="bg-background m-4 rounded-md w-full">
      <h1 className="m-8 text-4xl pt-6"><b>Top Rated</b></h1>
        <div className=" grid p-10 pt-0 grid-cols-2 lg:grid-cols-4 ">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section >
      <section className="bg-background m-4 rounded-md w-full">
      <h1 className="m-8 text-4xl pt-6"><b>People also bought these</b></h1>
        <div className="grid p-10 pt-0 grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
    </div>
    </div>
  );
}
