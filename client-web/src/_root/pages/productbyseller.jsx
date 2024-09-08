import BorderYellow from "@/components/shared/BorderYellow";
import { floralbackground, yellowcloud1 } from "@/constants/borders";

export default function BySeller() {
  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="pl-10 text-6xl font-bold pt-10 pb-10">Featured Sellers</h1>
      <BorderYellow bg={"secondary"} />
      <div
        style={{ backgroundImage: `url(${floralbackground})` }}
        className="w-full h-full flex justify-center items-center"
      >
        <div className="w-full flex justify-center items-center flex-wrap gap-10 p-10">
          {Array.from({ length: 10 }).map((_, index) => (
            <SellerProfileCard />
          ))}
        </div>
      </div>
    </div>
  );
}

function SellerProfileCard() {
  return (
    <div className=" w-96 h-96 rounded-full bg-primary flex justify-center items-center">
      <img src={yellowcloud1} />
    </div>
  );
}
