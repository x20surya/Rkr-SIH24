import CarousalComponent from "@/components/shared/ProductCarousel"
import { useState } from "react";
import TabsComponent from "@/components/shared/Tabs";
import AccordionComponent from "@/components/shared/accordion";
export default function ProductPage() {
  const productrating=4.4;
    const rating=Math.round(productrating);

    
    return (
        <section>
        <div className="ml-16 flex flex-row" >
            <div>
     <CarousalComponent />
     </div>

     <div className="mr-5">
     <h2 className="mt-10 scroll-m-20  pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-14 ">
     Classmate Pulse 6 Subject Spiral Notebook - Pack of 1 | Single Line | 500 Pages | A4-29.7cm x 21.0cm | Attractive Cover Designs | Soft Cover | Ideal for College Students and Professionals
      </h2>
      <div className="flex flex-row">
      <div className="flex mt-4">
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
                    <div className="relative top-3.5 left-1.5" >
                    <small className="text-sm font-medium leading-none">{productrating}</small>
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
<AccordionComponent />
    
      </div>
        </div>
        </section>
    )
}