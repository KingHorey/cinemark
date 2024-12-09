/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";

import { HeadingOne } from "@/app/ui/headings/heading";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { supportSchema } from "@/app/utils/definitions";
import { zodResolver } from "@hookform/resolvers/zod";

const Questions = () => {
  const form = useForm<z.infer<typeof supportSchema>>({
    resolver: zodResolver(supportSchema),
  });

  useEffect(() => {
    const { dirtyFields } = form.formState;

    if (
      Array.from(Object.values(dirtyFields)).every((item) => item === undefined)
    )
      return;

    function BeforeUnload(e: BeforeUnloadEvent) {
      e.preventDefault();
      e.returnValue = ""; // Required for modern browsers
    }

    window.addEventListener("beforeunload", BeforeUnload);

    return () => window.removeEventListener("beforeunload", BeforeUnload);
  }, [form.formState.dirtyFields]);

  return (
    <main className="flex md:flex-row flex-col justify-between mt-20 md:h-[420px] md:gap-x-5 lg:h-[500px] xs:gap-y-20">
      <div className="flex flex-col space-y-5 sm:h-[380px] md:h-full">
        <HeadingOne text="Welcome to our support page" />
        <p className="text-gray-500 sm:text-sm ">
          We&apos;re here to help you with any problems you may be having with
          our product.
        </p>
        <img
          src="/images/SubContainer.png"
          className="w-full h-full object-cover"
          alt="Cinemark support image page"
        />
      </div>
      <Card className="bg-offBlack/60 border border-gray-400/30 text-white rounded-md overflow-y-scroll h-full">
        <CardContent className="flex items-center h-full">
          <Form {...form}>
            <form className="flex flex-col p-5 gap-y-5 h-full justify-center">
              <div className="flex gap-x-5 md:flex-row flex-col">
                <FormField
                  name="first_name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">
                        First Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="border border-gray-400/40 p-5 rounded-md"
                          placeholder="Enter First Name"
                          aria-placeholder="Enter Last Name"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="last_name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Last Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="border border-gray-400/40 p-5"
                          placeholder="Enter Last Name"
                          aria-placeholder="Enter Last Name"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="border border-gray-400/40 p-5"
                        placeholder="Enter Your Email Address"
                        aria-placeholder="Enter Your Email Address"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="message"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex xs:flex-col md:flex-row lg:flex-row justify-between items-center space-y-5">
                <div>
                  <input type="checkbox" required id="check"></input>
                  <label className="text-gray-500 text-sm ml-2" htmlFor="check">
                    I agree to the terms and conditions
                  </label>
                </div>
                <Button
                  className="bg-red rounded-md xs:w-full md:w-fit "
                  tabIndex={0}
                  aria-label="Send Message"
                  onKeyDown={(e: React.KeyboardEvent<HTMLOrSVGElement>) => {
                    if (e.key === "Enter " || e.key === " ") {
                      console.log();
                    }
                  }}
                >
                  Send Message
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
};

export default Questions;
