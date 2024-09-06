import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { EyeIcon, EyeOff, User } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const schema = z.object({
  useraname: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
});

export default function SignUpForm() {
  
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const { toast } = useToast();

  useEffect(() => {
    if (form.formState.errors.root) {
      toast({
        title: "Error Ocurred!!!",
        description: form.formState.errors.root.message,
        variant: "destructive",
      });
    }
  }, [form.formState.errors.root]);

  const onSubmit = async (data) => {};

  return (
    <div>
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-3xl">Sign up</CardTitle>
        </CardHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="SignUpForm"
              render={({ field }) => (
                <>
                  <CardContent>
                    <FormItem>
                      <FormLabel>Enter Username</FormLabel>
                      <FormControl>
                        <Input
                          {...form.register("username")}
                          type="text"
                          placeholder="Username"
                          className={
                            form.formState.errors.username
                              ? "border-red-400 border-2"
                              : ""
                          }
                        ></Input>
                      </FormControl>
                      {form.formState.errors.username && (
                        <FormMessage className=" text-start font-mono pt-0 text-xs">
                          {form.formState.errors.username.message}
                        </FormMessage>
                      )}
                      <FormLabel>Enter Email Address</FormLabel>
                      <FormControl>
                        <Input
                          {...form.register("email")}
                          type="email"
                          placeholder="Email"
                          className={
                            form.formState.errors.email
                              ? "border-red-400 border-2"
                              : ""
                          }
                        />
                      </FormControl>
                      {form.formState.errors.email && (
                        <FormMessage className=" text-start font-mono pt-0 text-xs">
                          {form.formState.errors.email.message}
                        </FormMessage>
                      )}
                      <FormLabel>Enter Password</FormLabel>
                      <FormControl>
                        <Input
                          {...form.register("password")}
                          type="password"
                          placeholder="Password"
                          className={
                            form.formState.errors.password
                              ? "border-red-400 border-2"
                              : ""
                          }
                        />
                      </FormControl>
                      {form.formState.errors.password && (
                        <FormMessage className=" text-start font-mono pt-0 text-xs">
                          {form.formState.errors.password.message}
                        </FormMessage>
                      )}
                    </FormItem>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-5">
                    <Button
                      type="submit"
                      disabled={form.formState.isSubmitting}
                      className=" mt-2"
                    >
                      {form.formState.isSubmitting ? "Loading..." : "Sign in"}
                    </Button>
                    <p>
                      Already have an account?{" "}
                      <Link className=" underline" to="/sign-in">
                        click here
                      </Link>
                    </p>
                  </CardFooter>
                </>
              )}
            />
          </form>
        </Form>
      </Card>
    </div>
  );
}
