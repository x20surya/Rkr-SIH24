import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "../ui/toast"
export default function AccordionComponent({description, dimensions}) {  
    const {toast}=useToast()
    return (
        <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Product Description</AccordionTrigger>
          <AccordionContent>
            {description}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Dimensions</AccordionTrigger>
          <AccordionContent>
            {dimensions}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Delivery & Returns</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-row gap-5">
          <div className="text-sm font-normal relative top-2">Shipping Time</div>
          <div>
          <Input className="w-40" placeholder="Enter your Pincode"/>
          </div>
          <div>
            <Button variant="secondary"
            onClick={() => {
                toast({
                  title: "Your Estimated Delivery Time",
                  description: "Your order will be delivered in 3-5 business days",
                  action: (
                    <ToastAction altText="Close">Close</ToastAction>
                  ),
                })
              }}
            >Check</Button>
          </div>
          </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
}  