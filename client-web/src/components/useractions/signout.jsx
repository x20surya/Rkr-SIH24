import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { LogOut } from "lucide-react";
  export default function SignOut() {
    return (
        <div className="bg-background p-6 rounded-lg shadow-lg">
          
    <Dialog>
      <DialogTrigger>
      <div className="flex flex-row gap-x-1.5 lg:gap-5">
          <div>
          <LogOut className="h-[18] w-[18]"/>
          </div>
          <div>
          <button className="btn btn-primary">Log Out</button>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>Dialog Description</DialogDescription>
        </DialogHeader>
        <div className="p-6">
          <p>Dialog Content</p>
        </div>
      </DialogContent>
    </Dialog>
        </div>
    );
}  