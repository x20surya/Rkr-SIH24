import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
export default function TabsComponent() {
    return(
    <Tabs defaultValue="description" className="w-full mt-10">
  <TabsList className="w-full">
    <TabsTrigger value="description" className="w-full">Description</TabsTrigger>
    <TabsTrigger value="reviews"className="w-full">User Reviews</TabsTrigger>
  </TabsList>

  <TabsContent value="description" className="p-4 bg-secondary rounded-lg shadow-md mt-5 mb-5">
  <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl">
        Description
      </h1>
            <p className="mb-4">Classmate Notebooks are made to the highest quality standards. Made from paper and pulp, the pages are whiter, brighter and smoother. The superior cut and excellent finish ensure the pages are in perfect alignment without any folded corners. The superior binding strength and wrapper lamination make them as durable as ever.</p>
            <ul className="list-disc list-inside">
                <li>High-quality paper and pulp</li>
                <li>Whiter, brighter, and smoother pages</li>
                <li>Perfect alignment without folded corners</li>
                <li>Superior binding strength</li>
                <li>Durable wrapper lamination</li>
                <li>Unique covers with activities and trivia</li>
            </ul>
        </TabsContent>
  <TabsContent value="reviews">User reviews are here.</TabsContent>
</Tabs>)
}