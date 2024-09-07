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
import { backgroundflowers } from "@/constants/borders";
import { Toaster } from "@/components/ui/toaster";
import { data } from "autoprefixer";
import { becomeASeller } from "@/lib/backend/api";

export default function BecomeAseller() {
  return (
    <>
      <div className="w-full h-screen flex border-primary border-[20px] bg-primary">
        <div
          style={{ backgroundImage: `url(${backgroundflowers})` }}
          className="rounded-3xl bg-secondary flex justify-center items-center w-full p-[20px]"
        >
          <div className="w-full h-full border-transparent rounded-3xl flex bg-background">
            <>
              <section className="flex flex-1 justify-center items-center py-10 gap-10">
                <SellerForm />
              </section>
            </>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}

const schema = z.object({
  username: z.string().min(2),
  region: z.string().min(2),
  description: z.string().min(100),
  flat: z.string().min(1),
  area: z.string().min(3),
  pincode: z.string(),
  city: z.string().min(2),
  phone: z.string().min(10),
  title: z.string().min(2),
  landmark: z.string().min(2),
});

function SellerForm() {
  const form = useForm({
    defaultValues: {
      username: "",
      region: "",
      description: "",
      flat: "",
      area: "",
      pincode: "",
      city: "",
      phone: "",
      title: "",
      landmark: "",
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
      const res = await becomeASeller(
        data.username,
        data.region,
        data.description,
        data.flat,
        data.area,
        data.pincode,
        data.city,
        data.phone,
        data.title,
        data.landmark
      );
      toast({
        title: "Your Verification request has been sent",
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
      <Card className="w-fit">
        <CardHeader>
          <CardTitle className="text-3xl">Become a Seller</CardTitle>
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
                          {...form.register("username")}
                          type="text"
                          placeholder="Seller Name"
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
                      <FormLabel>Enter Region</FormLabel>
                      <FormControl>
                        <Input
                          {...form.register("region")}
                          type="text"
                          placeholder="Region"
                          className={
                            form.formState.errors.region
                              ? "border-red-400 border-2"
                              : ""
                          }
                        ></Input>
                      </FormControl>
                      {form.formState.errors.region && (
                        <FormMessage className=" text-start font-mono pt-0 text-xs">
                          {form.formState.errors.region.message}
                        </FormMessage>
                      )}
                      <FormLabel>Enter description</FormLabel>
                      <FormControl>
                        <Input
                          {...form.register("description")}
                          placeholder="Description"
                          className={
                            form.formState.errors.description
                              ? "border-red-400 border-2"
                              : ""
                          }
                        />
                      </FormControl>
                      {form.formState.errors.description && (
                        <FormMessage className=" text-start font-mono pt-0 text-xs">
                          {form.formState.errors.description.message}
                        </FormMessage>
                      )}
                      <FormLabel>Enter Flat House number</FormLabel>
                      <FormControl>
                        <Input
                          {...form.register("flat")}
                          placeholder="Flat or House number"
                          className={
                            form.formState.errors.flat
                              ? "border-red-400 border-2"
                              : ""
                          }
                        />
                      </FormControl>
                      {form.formState.errors.flat && (
                        <FormMessage className=" text-start font-mono pt-0 text-xs">
                          {form.formState.errors.flat.message}
                        </FormMessage>
                      )}
                      <FormLabel>Enter Area</FormLabel>
                      <FormControl>
                        <Input
                          {...form.register("area")}
                          placeholder="Enter Area"
                          className={
                            form.formState.errors.area
                              ? "border-red-400 border-2"
                              : ""
                          }
                        />
                      </FormControl>
                      {form.formState.errors.area && (
                        <FormMessage className=" text-start font-mono pt-0 text-xs">
                          {form.formState.errors.area.message}
                        </FormMessage>
                      )}
                      <div className="flex justify-between">
                        <div>
                          <FormLabel>Enter Pincode</FormLabel>
                          <FormControl>
                            <Input
                              {...form.register("pincode")}
                              placeholder="Pincode"
                              className={
                                form.formState.errors.pincode
                                  ? "border-red-400 border-2"
                                  : ""
                              }
                            />
                          </FormControl>
                          {form.formState.errors.pincode && (
                            <FormMessage className=" text-start font-mono pt-0 text-xs">
                              {form.formState.errors.pincode.message}
                            </FormMessage>
                          )}
                        </div>
                        <div>
                          <FormLabel>Enter City</FormLabel>
                          <FormControl>
                            <Input
                              {...form.register("city")}
                              placeholder="City"
                              className={
                                form.formState.errors.city
                                  ? "border-red-400 border-2"
                                  : ""
                              }
                            />
                          </FormControl>
                          {form.formState.errors.city && (
                            <FormMessage className=" text-start font-mono pt-0 text-xs">
                              {form.formState.errors.city.message}
                            </FormMessage>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-between gap-5">
                        <div>
                          <FormLabel>Enter Phone</FormLabel>
                          <FormControl>
                            <Input
                              {...form.register("phone")}
                              placeholder="Phone"
                              className={
                                form.formState.errors.phone
                                  ? "border-red-400 border-2"
                                  : ""
                              }
                            />
                          </FormControl>
                          {form.formState.errors.phone && (
                            <FormMessage className=" text-start font-mono pt-0 text-xs">
                              {form.formState.errors.phone.message}
                            </FormMessage>
                          )}
                        </div>
                        <div>
                          <FormLabel>Enter Title</FormLabel>
                          <FormControl>
                            <Input
                              {...form.register("title")}
                              placeholder="Enter Title of address"
                              className={
                                form.formState.errors.title
                                  ? "border-red-400 border-2"
                                  : ""
                              }
                            />
                          </FormControl>
                          {form.formState.errors.title && (
                            <FormMessage className=" text-start font-mono pt-0 text-xs">
                              {form.formState.errors.title.message}
                            </FormMessage>
                          )}
                        </div>
                        <div>
                          <FormLabel>Enter Landmark</FormLabel>
                          <FormControl>
                            <Input
                              {...form.register("landmark")}
                              placeholder="Landmark"
                              className={
                                form.formState.errors.landmark
                                  ? "border-red-400 border-2"
                                  : ""
                              }
                            />
                          </FormControl>
                          {form.formState.errors.landmark && (
                            <FormMessage className=" text-start font-mono pt-0 text-xs">
                              {form.formState.errors.landmark.message}
                            </FormMessage>
                          )}
                        </div>
                      </div>
                    </FormItem>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-5">
                    <Button
                      type="submit"
                      disabled={form.formState.isSubmitting}
                      className=" mt-2"
                    >
                      {form.formState.isSubmitting ? "Loading..." : "Submit"}
                    </Button>
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
