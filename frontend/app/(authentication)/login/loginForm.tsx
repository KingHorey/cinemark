"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/app/utils/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleLogin } from "@/app/utils/actions";

import { useDispatch } from "react-redux";

import { toast } from "react-toastify";

// remove later
import { useRouter } from "next/navigation";

import { CircleIcon } from "lucide-react";

const LoginForm = () => {
  // remove later
  const dispatch = useDispatch();

  const { push } = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  const handleUserLogin = async (data: z.infer<typeof loginSchema>) => {
    const response = await handleLogin(data);
    if (response?.status === 200) {
      toast.success(response.message, {
        className: "bg-green-400 text-white",
      });
      setTimeout(() => (window.location.href = "/profile"), 3000);
    } else {
      toast.error(response?.message);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleUserLogin)}
        className="mx-auto mb-0 mt-8 max-w-md space-y-4 text-white"
      >
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="johndoe@email.com"
                  className="w-full rounded-md p-5 border-gray-200  pe-12 text-sm shadow-sm"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  {...field}
                  placeholder="*******"
                  className="w-full rounded-md p-5 border-gray-200  pe-12 text-sm shadow-sm"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            No account?
            <a className="underline" href="/register">
              Sign up
            </a>
          </p>

          <Button
            type="submit"
            className="bg-red hover:bg-black rounded-md hover:text-red duration-300 transition-all border border-red flex items-center px-5 py-3 text-sm font-medium text-white"
          >
            {form.formState.isSubmitting ? (
              <CircleIcon
                className="animate-spin duration-1000"
                stroke="white"
                size={18}
              />
            ) : (
              "Sign in"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
