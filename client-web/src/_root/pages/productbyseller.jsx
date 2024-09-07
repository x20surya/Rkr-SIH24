import Sellercard from "@/components/shared/sellercard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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

export default function BySeller() {
  return (
    <div className="w-full">
      <div className="flex flex-col  gap-3 items-center justify-center bg-white p-5 mt-10">
        <div className="flex justify-center items-center h-24 w-64 bg-[url('@/constants/borders/slatebg.svg')] bg-cover text-4xl font-bold">Top Sellers</div>
        <div className="flex items-center justify-center w-full mt-10 mb-10">
          <div className="flex items-center justify-center w-fit h-fit lg:w-[90%]">
            <Carousel className="w-[80%] lg:w-[85%] ">
              <CarouselContent>
                <CarouselItem>
                  <Sellercard />
                </CarouselItem>
                <CarouselItem>
                  <Sellercard />
                </CarouselItem>
                <CarouselItem>
                  <Sellercard />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
