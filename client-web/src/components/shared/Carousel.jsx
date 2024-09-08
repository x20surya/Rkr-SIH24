import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { painting, painting2 } from "@/constants/borders";
import { Link } from "react-router-dom";

export default function CarousalComponent() {
  const plugin = useRef(Autoplay({ delay: 2000 }));
  return (
    <div className="w-[80%] h-fit pt-3 flex flex-col items-end gap-5">
      <Carousel
        plugins={[plugin.current]}
        className="w-full relative"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 1 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex h-[80vh] items-center justify-center p-6">
                    <img className="w-full h-full" src={painting} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex h-[80vh] items-center justify-center p-6">
                  <img className=" h-full" src={painting2} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="z-10 bg-transparent border-none" />
        <CarouselNext className="z-10 bg-transparent border-none" />
        <Button
          size="lg"
          className="border-[4px] border-card-foreground text-lg absolute bottom-6 right-6"
        >
          <Link to={"/region/rajasthan"}>Shop now</Link>
        </Button>
      </Carousel>
    </div>
  );
}
