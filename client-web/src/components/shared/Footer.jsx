import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import { Map } from "lucide-react";
import { cn } from "@/lib/utils";
const Footer = () => {
    return(
   
       
               
    
    <div className={cn("flex flex-col md:flex-row justify-around bg-primary p-4")}>
         <div className="flex-item mt-4 text-center md:text-left">
         <h1 className="scroll-m-20 text-4xl md:text-4xl font-extrabold tracking-tight lg:text-5xl">
      Subscribe to <br></br>our Newsletter
    </h1>

    <p className="leading-7 mt-4 md:mt-6">
     Join our community and get the latest updates on our products and services.
    </p>
    <br></br>
    <div className="flex items-center justify-center md:justify-start mt-4">
        <Input 
            placeholder="Email Address"
            type="email"
            className="border-2 border-black rounded-md p-2 w-80 placeholder:text-black"
        />
        <Button variant="outline"className="border-2 border-black ml-2">Subscribe</Button>
    </div>
    <div className="flex items-center mt-6 mb-5 gap-4 md:gap-10 justify-center md:justify-start" >
<InstagramIcon size={24} />
<FacebookIcon size={24} />
<TwitterIcon size={24} />
<YoutubeIcon size={24} />
<LinkedinIcon size={24} />  
</div>
            </div>
           
        <div className="flex-item mt-4">
        <div className="grid grid-cols-2 gap-20">
            <div>
            <p className="scroll-m-20  pb-2 text-s font-semibold tracking-tight first:mt-0">
      Get in touch
    </p>
    <div className="flex items-center flex-column gap-4">
        <div>
        <Mail size={19} className="text-black"/> 
        </div>
        <div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            suryanshu@gmail.com
        </p>
        </div>
    </div>
    <div className="flex items-center flex-column gap-4">
        <div>
        <Phone size={19} className="text-black"/> 
        </div>
        <div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            +91 9988998899
        </p>
        </div>
    </div>
    
             
            </div>
            <div>
            <p className="scroll-m-20  pb-2 text-s font-semibold tracking-tight first:mt-0">
      Address
    </p>
    <div className="flex items-center flex-column gap-4">
        
        <div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
        25, Main Road, Lalpur 
        
        </p>
        
        </div>
        
    </div>
    <div className="flex items-center flex-column gap-4">
       
        <div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
        Ranchi, Jharkhand, India
        
        </p>
        
        </div>
        
    </div>
            </div>
           
           <div className="col-span-2">
           <blockquote className="mt-6 border-l-2 border-black pl-6 italic">
           Copyright © 2024 Culture Emporium. All rights reserved.
    </blockquote>
            </div>
        </div>
        </div>
       
    </div>
 
    )
}
export default Footer;
