import React from "react";
import UserReviewCard from "./UserReviewCard"; 
import { ScrollArea } from "@/components/ui/scroll-area"; 


const userReviews = [
  { id: 1, name: "Arun Kumar", date: "5 days ago", rating: 4.5, review: "Very good product" },
  { id: 2, name: "John Doe", date: "3 days ago", rating: 4.0, review: "Good value for money" },
  { id: 3, name: "Jane Smith", date: "1 week ago", rating: 5.0, review: "Excellent quality!" },
  
];

const UserReviewsList = () => {
  return (
    <ScrollArea className="h-72 w-full rounded-md mt-2">
      <div className="p-4">
  
        {userReviews.map((review) => (
          <UserReviewCard key={review.id} {...review} />
        ))}
      </div>
    </ScrollArea>
  );
};

export default UserReviewsList;