import CarousalComponent from "@/components/shared/ProductCarousel"
import { useState } from "react";
import TabsComponent from "@/components/shared/Tabs";
import AccordionComponent from "@/components/shared/accordion";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/shared/productcard";
import SimilarProduct from "@/components/shared/similarproduct";
import ProductCarousalComponent from "@/components/shared/productpagecarousel";
import SmallScreensSimilarProduct from "@/components/shared/smallscreenssimilarproduct";
export default function ProductPage() {
  const productrating=4.4;
    const rating=Math.round(productrating);
    const product = {   
        name: "Bhujia",   
        price: '100.00',   
        image: "https://picsum.photos/200" 
        };
    
    return (<>
        <section className="flex flex-col">
            <section>
      <div className="ml-4 md:ml-16 flex flex-col md:flex-row">
                <div className="flex flex-col">
                    <div>
                        <CarousalComponent />
                    </div>
                    <div className="flex flex-row justify-center md:justify-start relative lg:ml-10">
            <Button className="mt-4 ml-4" variant="secondary">Add to Cart</Button>
            <Button className="mt-4 ml-4" variant="default">Buy Now</Button>
          </div>
                </div>


     <div className="mr-0 md:mr-5">
     <h2 className="mt-4 md:mt-10 scroll-m-20 pb-2 text-xl md:ml-0 md:relative md:left-0 md:text-2xl font-bold tracking-tight transition-colors first:mt-14">
     Classmate Pulse 6 Subject Spiral Notebook - Pack of 1 | Single Line | 500 Pages | A4-29.7cm x 21.0cm | Attractive Cover Designs | Soft Cover | Ideal for College Students and Professionals
      </h2>
      <div className="flex flex-col md:flex-row">
      <div className="flex mt-4 justify-center md:justify-start">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                                key={star}
                                
                                className={`w-5 h-5  ${star <= rating ? 'text-[#e89a00]' : 'text-muted-foreground'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.392 2.46a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.392-2.46a1 1 0 00-1.176 0l-3.392 2.46c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.245 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                            </svg>
                        ))}
                    </div>
                    <div className="relative top-3.5 left-0  text-center " >
                    <small className=" hidden lg:block text-sm font-medium leading-none   lg:relative lg:top-1.5 lg:left-2">{productrating}</small>
                    </div>
                    </div>
      <div>
      <p className="text-xl text-muted-foreground mt-4 line-through">
     $ 9.99
    </p>
      </div>
      
      <div>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-5 text-[#ca0d4b]">
      $ 5.99
    </h2>
    </div>
<TabsComponent />
    
      </div>
        </div>
       
        </section>
       <section>
        <div className="ml-4 md:ml-16 mt-4 mb-6 md:mt-10">
</div>
<SimilarProduct/>
<SmallScreensSimilarProduct />
       </section>
       </section>
      </>
    )
}