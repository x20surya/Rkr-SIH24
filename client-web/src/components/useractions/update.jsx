import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Edit } from "lucide-react";
export default function Editbtn() {
    return (
        <div className="bg-background p-6 rounded-lg shadow-lg">
          
    <Dialog>
      <DialogTrigger>
      <div className="flex flex-row gap-5">
          <div>
          <Edit className="h-[18] w-[18]"/>
          </div>
          <div>
          <button className="btn btn-primary">Edit</button>
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