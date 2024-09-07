
import UserCard from "@/components/shared/usercard";
import { Phone } from 'lucide-react';
import { Map } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Progress } from "@/components/ui/progress"
import { DataTable } from '@/components/shared/ordertable';
import Wishlist from '@/components/user/wishlist';
import Orders from '@/components/user/myorder';
import Address from '@/components/user/myaddress';
import Blogs from '@/components/user/viewblog';
import Help from '@/components/useractions/help';
import SignOut from '@/components/useractions/signout';
import Policy from '@/components/useractions/policy';
import Editbtn from '@/components/useractions/update';
export default function UserPage() {
  return (
    <div className="min-h-screen bg p-6 flex items-center justify-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        
        <div className="bg-background p-6 rounded-lg shadow-lg">
  
        <div className="flex items-center justify-center">
            <img src="https://picsum.photos/200/300" alt="user" className="w-64 h-64 mt-5 rounded-full" />
            
        </div>
        <h1 className="scroll-m-20 mt-5 text-4xl font-bold tracking-tight text-center lg:text-5xl">
Aditya Raj
      </h1>
      <div className="text-lg font-semibold accent text-center mt-3 text-[#ca0d4b]">@adityaraj12</div>
      <div className='flex flex-row gap-5 justify-center mt-3'>
<Mail size={24} className="text-[#ca0d4b] relative top-1"/>
<p className="text-xl text-muted-foreground">
      aditya@gmail.com
    </p>
      </div>
      <div className='flex flex-row gap-5 justify-center mt-3 relative right-2'>
<Phone size={24} className="text-[#ca0d4b] relative top-1"/>
<p className="text-xl text-muted-foreground">
      +91 9876543210
    </p>
      </div>
      <div className='flex flex-row gap-5 justify-center mt-3 relative right-1'>
<Map size={24} className="text-[#ca0d4b] relative top-1"/>
<p className="text-xl text-muted-foreground">
      Ranchi, Jharkhand
    </p>
      </div>
      
        </div>
        <div className="grid grid-rows-2 gap-6">
          <div className="bg-background p-6 rounded-lg shadow-lg">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Manage your Account
    </h2>
    <div className='grid grid-rows-2 grid-cols-2 gap-6 mt-4' >
      <div>
   <Orders />
   </div>
   <div>
    <Wishlist />
   </div>
   <div>
   <Address />
   </div>
   <div>
   <Blogs />
   </div>

   </div>
          </div>
          <div className=" p-6 rounded-lg shadow-lg">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      User Settings
    </h2>
          <div className='grid grid-rows-2 grid-cols-2 gap-6 mt-4' >
      <div>
        <Help />
   </div>
   <div>
   <Policy />
   </div>
   <div>
    <SignOut />
   </div>
   <div>
    <Editbtn />
   </div>

   </div>
          </div>
        </div>
      </div>
    </div>
  );
}