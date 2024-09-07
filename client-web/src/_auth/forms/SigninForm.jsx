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
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signIn } from "@/lib/backend/api";
import { redirect } from "react-router-dom";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export default function SignInForm() {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (form.formState.errors.root) {
      toast({
        title: "Error Ocurred!!!",
        description: form.formState.errors.root.message,
        variant: "destructive",
      });
    }
  }, [form.formState.errors.root]);

  const { toast } = useToast();
  const onSubmit = async (data) => {
    try {
      const res = await signIn(data.email, data.password);
      toast({
        title: "Succesfully logged in",
      });
      navigate("/");
    } catch (e) {
      console.log(e);
      form.setError("root", {
        message: e.message,
      });
    }
  };

  return (
    <>
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-3xl">Sign In</CardTitle>
        </CardHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <>
                  <CardContent>
                    <FormItem>
                      <FormLabel>Enter Email Address</FormLabel>
                      <FormControl>
                        <Input
                          {...form.register("email")}
                          type="text"
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
                      {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
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
                      If you don't have account{" "}
                      <Link className=" underline" to="/sign-up">
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
    </>
  );
}
