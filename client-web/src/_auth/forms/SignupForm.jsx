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
import { createUser } from "@/lib/backend/api";

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
});

export default function SignUpForm() {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
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

  const onSubmit = async (data) => {
    try {
      const res = await createUser(
        data.email,
        data.password,
        data.firstName,
        data.lastName
      );
      toast({
        title: "Verification Email sent to " + data.email,
      });
    } catch (e) {
      console.log(e);
      form.setError("root", {
        message: e.message,
      });
    }
  };

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
                      <FormLabel>Enter First Name</FormLabel>
                      <FormControl>
                        <Input
                          {...form.register("firstName")}
                          type="text"
                          placeholder="First Name"
                          className={
                            form.formState.errors.firstName
                              ? "border-red-400 border-2"
                              : ""
                          }
                        ></Input>
                      </FormControl>
                      {form.formState.errors.firstName && (
                        <FormMessage className=" text-start font-mono pt-0 text-xs">
                          {form.formState.errors.firstName.message}
                        </FormMessage>
                      )}
                      <FormLabel>Enter Last Name</FormLabel>
                      <FormControl>
                        <Input
                          {...form.register("lastName")}
                          type="text"
                          placeholder="Last Name"
                          className={
                            form.formState.errors.lastName
                              ? "border-red-400 border-2"
                              : ""
                          }
                        ></Input>
                      </FormControl>
                      {form.formState.errors.lastName && (
                        <FormMessage className=" text-start font-mono pt-0 text-xs">
                          {form.formState.errors.lastName.message}
                        </FormMessage>
                      )}
                      <FormLabel>Enter Email Address</FormLabel>
                      <FormControl>
                        <Input
                          {...form.register("email")}
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
