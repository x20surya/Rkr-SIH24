import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AccordionComponent from "./accordion"
import UserReviewCard from "./userreviewcard"
import UserReviewsList from "./scrollarea"


export default function TabsComponent({description, dimensions}) {
    return(
    <Tabs defaultValue="description" className="w-full mt-10">
  <TabsList className="w-full">
    <TabsTrigger value="description" className="w-full">Description</TabsTrigger>
    <TabsTrigger value="reviews"className="w-full">User Reviews</TabsTrigger>
  </TabsList>

  <TabsContent value="description" className="p-4  rounded-lg shadow-md mt-5 mb-5">
  <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl">
        Description
      </h1>
           <AccordionComponent description={description} dimensions={dimensions} />
        </TabsContent>
        <TabsContent value="reviews" className="p-4  rounded-lg shadow-md mt-5 mb-5">
  <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl">
        User Reviews
      </h1>
      
          <UserReviewsList />
        </TabsContent>
</Tabs>)
}