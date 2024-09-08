import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import UserReviewCard from "../shared/userreviewcard";
  import { ScrollArea } from "@/components/ui/scroll-area"; 

  import { ListOrdered } from "lucide-react";
  const userReviews = [
    { id: 1, name: "Arun Kumar", date: "5 days ago", rating: 4.5, review: "Very good product" },
    { id: 2, name: "John Doe", date: "3 days ago", rating: 4.0, review: "Good value for money" },
    { id: 3, name: "Jane Smith", date: "1 week ago", rating: 5.0, review: "Excellent quality!" },
    
  ];
export default function Orders() {
    return (
        <div className="bg-background p-6 rounded-lg shadow-lg">
          
    <Dialog>
      <DialogTrigger>
      <div className="flex flex-row gap-x-1.5 lg:gap-5">
          <div>
          <ListOrdered className="h-[18] w-[18]"/>
          </div>
          <div>
          <button className="btn btn-primary">Your Orders</button>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Your Orders</DialogTitle>
          <DialogDescription>Check Previous Orders</DialogDescription>
        </DialogHeader>
        <div className="p-6">
        <ScrollArea className="h-72 w-full rounded-md mt-2">
      <div className="p-4">
  
        {userReviews.map((review) => (
          <UserReviewCard key={review.id} {...review} />
        ))}
      </div>
    </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
        </div>
    );
}  