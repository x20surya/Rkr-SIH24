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
import { painting } from "@/constants/borders";

export default function CarousalComponent() {
  const plugin = useRef(Autoplay({ delay: 2000 }));
  return (
    <div className="w-[80%] h-fit pt-3 flex flex-col items-end gap-5 z-10">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex h-[80vh] items-center justify-center p-6">
                    <img src={painting}/>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Button
        size="lg"
        className="border-[4px] rounded-none border-card-foreground text-lg"
      >
        Shop now
      </Button>
    </div>
  );
}
