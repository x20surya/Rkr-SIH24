import Borderbluered from "@/components/shared/Borderbluered";
import BorderYellow from "@/components/shared/BorderYellow";
import CarousalComponent from "@/components/shared/Carousel";
import { Button } from "@/components/ui/button";
import {
  indianart,
  potteryman,
  redleaf1,
  yellowcloud1,
} from "@/constants/borders";
import { floralbackground } from "@/constants/borders";
import { sidepattern } from "@/constants/borders";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative w-full h-full flex flex-col items-center bg-background">
      <div className="w-full h-full flex items-center justify-center">
        <div
          style={{
            backgroundImage: `url(${sidepattern})`,
            backgroundPosition: "center",
            backgroundSize: "200px",
          }}
          className="h-full w-[10%]"
        ></div>
        <CarousalComponent />
        <div
          style={{
            backgroundImage: `url(${sidepattern})`,
            backgroundPosition: "center",
            backgroundSize: "200px",
          }}
          className="h-full w-[10%] rotate-180"
        ></div>
      </div>
      <div className="w-full h-5"></div>
      <BorderYellow bg={"secondary"} />
      <div
        style={{ backgroundImage: `url(${floralbackground})` }}
        className="w-full flex flex-col lg:flex-row"
      >
        <div className="h-full w-full flex justify-center items-center">
          <img className="w-full" src={potteryman} />
        </div>
        <div className=" w-full flex flex-col px-20 py-20 gap-10">
          <div className="flex gap-5">
            <h1 className=" text-5xl font-bold text-primary-foreground">
              Shop by Seller
            </h1>
            <img src={yellowcloud1} />
          </div>

          <p>
            Praesent a quam enim. Integer tristique ultricies massa sit amet
            tempus. Nulla sed dictum sem. Vivamus tincidunt purus vel sagittis
            porttitor. In aliquet vel purus ac lacinia. Nam volutpat, mi id
            varius aliquet, erat nisl commodo sapien, in mattis arcu turpis at
            purus. Integer non nisi laoreet, consectetur lacus fermentum,
            sagittis nisi.
          </p>
          <Button
            size="lg"
            className="self-start border-4 border-primary-foreground"
          >
            {" "}
            <Link to={"/seller"}>Shop Now</Link>
          </Button>
        </div>
      </div>
      <BorderYellow bg={"primary"} />
      <div className="w-full flex flex-col lg:flex-row">
        <div className="h-full w-full flex justify-center items-center lg:order-1">
          <img className="w-full" src={indianart} />
        </div>
        <div className=" w-full flex flex-col px-20 py-20 gap-10">
          <div className="flex gap-5">
            <h1 className=" text-5xl font-bold text-primary-foreground">
              Shop by Collections
            </h1>
            <img src={yellowcloud1} />
          </div>

          <p>
            Praesent a quam enim. Integer tristique ultricies massa sit amet
            tempus. Nulla sed dictum sem. Vivamus tincidunt purus vel sagittis
            porttitor. In aliquet vel purus ac lacinia. Nam volutpat, mi id
            varius aliquet, erat nisl commodo sapien, in mattis arcu turpis at
            purus. Integer non nisi laoreet, consectetur lacus fermentum,
            sagittis nisi.
          </p>
          <Button
            size="lg"
            className="self-start border-4 border-primary-foreground"
          >
            {" "}
            <Link to={"/region"}>Shop Now</Link>
          </Button>
        </div>
      </div>
      <BorderYellow bg="secondary" />
      <div
        style={{ backgroundImage: `url(${floralbackground})` }}
        className="w-full flex flex-col lg:flex-row"
      >
        <div className="h-full w-full flex justify-center items-center">
          <img className="w-full" src={indianart} />
        </div>
        <div className=" w-full flex flex-col px-20 py-20 gap-10">
          <div className="flex gap-5">
            <h1 className=" text-5xl font-bold text-primary-foreground">
              Browse Products
            </h1>
            <img src={yellowcloud1} />
          </div>

          <p>
            Praesent a quam enim. Integer tristique ultricies massa sit amet
            tempus. Nulla sed dictum sem. Vivamus tincidunt purus vel sagittis
            porttitor. In aliquet vel purus ac lacinia. Nam volutpat, mi id
            varius aliquet, erat nisl commodo sapien, in mattis arcu turpis at
            purus. Integer non nisi laoreet, consectetur lacus fermentum,
            sagittis nisi.
          </p>
          <Button
            size="lg"
            className="self-start border-4 border-primary-foreground"
          >
            {" "}
            <Link to="/search">Shop Now</Link>
          </Button>
        </div>
      </div>
      {/* <div
        style={{ borderImage: `url(.${borderurl}) 33% round` }}
        className={`w-[50%] h-[50%] border-[50px]`}
      ></div> */}
    </div>
  );
}
