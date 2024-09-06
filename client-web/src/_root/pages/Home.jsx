import Borderbluered from "@/components/shared/Borderbluered";
import CarousalComponent from "@/components/shared/Carousel";


export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center bg-background">
      <CarousalComponent />
      <div className="w-full h-5"></div>
      <Borderbluered/>
      {/* <div
        style={{ borderImage: `url(.${borderurl}) 33% round` }}
        className={`w-[50%] h-[50%] border-[50px]`}
      ></div> */}
    </div>
  );
}
