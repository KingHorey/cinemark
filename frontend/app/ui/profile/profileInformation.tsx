"use client";

import React from "react";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { userProfileInformation } from "@/app/utils/definitions";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { HeadingOne } from "@/app/ui/headings/heading";

const ProfileInformation = () => {
  const form = useForm<z.infer<typeof userProfileInformation>>({
    resolver: zodResolver(userProfileInformation),
  });

  return (
    <div className="space-y-10 mt-10 lg:w-1/2 xs:w-full">
      <HeadingOne text="User Information" />
      <Form {...form}>
        <form className="text-white space-y-5">
          <FormField
            name="first_name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input {...field} className="rounded-lg p-2 shadow-none" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="last_name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input {...field} className="rounded-lg p-2 shadow-none" />
                </FormControl>
              </FormItem>
            )}
          />
          <Button>Update</Button>
        </form>
      </Form>
    </div>
  );
};

export default ProfileInformation;
