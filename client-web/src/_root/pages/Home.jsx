import Borderbluered from "@/components/shared/Borderbluered";
import BorderYellow from "@/components/shared/BorderYellow";
import CarousalComponent from "@/components/shared/Carousel";
import { Button } from "@/components/ui/button";
import { yellowcloud1 } from "@/constants/borders";
import { floralbackground } from "@/constants/borders";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center bg-background">
      <CarousalComponent />
      <div className="w-full h-5"></div>
      <BorderYellow bg={"secondary"} />
      <div
        style={{ backgroundImage: `url(${floralbackground})` }}
        className="w-full flex flex-col lg:flex-row"
      >
        <div className="h-96 w-full"></div>
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
            Shop Now
          </Button>
        </div>
      </div>
      <BorderYellow bg={"primary"} />
      <div className="w-full flex flex-col lg:flex-row">
        <div className="h-96 w-full lg:order-1"></div>
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
            Shop Now
          </Button>
        </div>
      </div>
      <BorderYellow bg="secondary" />
      <div style={{ backgroundImage: `url(${floralbackground})` }} className="w-full flex flex-col lg:flex-row">
        <div className="h-96 w-full"></div>
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
            Shop Now
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
