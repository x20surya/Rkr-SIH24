import * as z from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import { Form,FormControl,FormField,FormItem,FormLabel,FormMessage} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect ,useState} from "react";
import { useToast } from "@/hooks/use-toast";
import { EyeIcon, EyeOff, User } from "lucide-react";
import { Mail } from "lucide-react";
import { Lock } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const schema = z.object({
    useraname:z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
  })
   
export default function SignUpForm() {
    const [show, setshow] = useState(false);
    function Showpassword(){
      {show ? setshow(false) : setshow(true)};
    }
    const form = useForm({
        defaultValues: {
          username:"",
          email: "",
          password: "",
        },
        resolver: zodResolver(schema),
      })

      const { toast } = useToast()

      useEffect(() => {
        if (form.formState.errors.root) {
          toast({
            title: "Error Ocurred!!!",
            description: form.formState.errors.root.message,
            variant: "destructive",
          })
        }
      }, [form.formState.errors.root])
    

      const {isSubmitting,isValid} = form.formState;

    
    return(
      <div>
        <Card className=" text-center w-96">
        <CardHeader>
        <CardTitle><p className="font-bold text-2xl">Sign up</p></CardTitle>
        </CardHeader>
        <CardContent>
 
           <Form {...form}>
            <form className=" flex flex-col items-center justify-center ">
              <FormField
                control={form.control}
                name="SignUpForm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter Username</FormLabel>
                    <FormControl>
                        <div className="h-fit bg-tertiary rounded-md flex items-center outline-2">
                          <User className="m-2"></User>
                         <Input
                         {...form.register("username")}
                         type="text"
                         placeholder="Username"
                         className={
                          form.formState.errors.username
                            ? "border-red-400 border-2"
                            : "bg-tertiary"
                        }
                      ></Input>
                      
                        </div>
                    </FormControl>
                    {form.formState.errors.username && (
                      <FormMessage className=" text-start font-mono pt-0 text-xs">
                        {form.formState.errors.username.message}
                      </FormMessage>
                    )}
                    <FormLabel>Enter Email Address</FormLabel>
                    <FormControl>
                    <div className="h-fit bg-tertiary rounded-md flex items-center">
                         <Mail className="m-2"></Mail>
                         <Input
                         {...form.register("email")}
                         type="email"
                         placeholder="Email"
                         className={
                          form.formState.errors.email
                            ? "border-red-400 border-2"
                            : "bg-tertiary"
                        }
                      />
                        </div>
                    </FormControl>
                    {form.formState.errors.email && (
                      <FormMessage className=" text-start font-mono pt-0 text-xs">
                        {form.formState.errors.email.message}
                      </FormMessage>
                    )}
                    <FormLabel>Enter Password</FormLabel>
                    <FormControl>
                    <div className="h-fit bg-tertiary rounded-md flex items-center ">
                          <Lock className="m-2"></Lock>
                         <Input
                         {...form.register("password")}
                         type={show ? "text" : "password"}
                         placeholder="Password"
                         className={
                          form.formState.errors.password
                            ? "border-red-400 border-2"
                            : "bg-tertiary"
                        }
                      />
                       {show ?<EyeOff onClick={Showpassword} className="mr-2 h-8 opacity-60"/>:<EyeIcon onClick={Showpassword} className="mr-2 h-8 opacity-60" />}
                      </div>
                    </FormControl>
                    {form.formState.errors.password && (
                      <FormMessage className=" text-start font-mono pt-0 text-xs">
                        {form.formState.errors.password.message}
                      </FormMessage>
                    )}
                    
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isValid||isSubmitting}
                className=" mt-4"
              >
                Submit
              </Button >
            </form>
           </Form>
           </CardContent>
      </Card>

                    
        </div>
    )

}