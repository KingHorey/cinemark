"use client";

import { Form, FormField, FormControl, FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { searchSchema } from "@/app/utils/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = ({
  setShowSearch,
}: {
  setShowSearch: (z: boolean) => void;
}) => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
  });

  const handleSearch = async (data: z.infer<typeof searchSchema>) => {
    const params = new URLSearchParams(searchParams);
    if (data.name) {
      params.set("q", data.name);
    } else {
      params.delete("q");
    }
    params.set("category", data.category);
    replace(`/search/?${params.toString()}`);
  };

  return (
    <div className="w-full absolute left-0 z-[999] backdrop-blur-lg h-[100px] top-0 flex items-center p-2 rounded-md">
      <Form {...form}>
        <form
          className="flex text-white  space-x-5 w-full"
          onSubmit={form.handleSubmit(handleSearch)}
        >
          <FormField
            name="category"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-[120px]">
                <FormControl>
                  <Select
                    onValueChange={(value) => field.onChange(value)}
                    value={field.value}
                  >
                    <SelectTrigger className="border-gray-400/30 z-[999]">
                      <SelectValue placeholder="Select Movie Type" />
                    </SelectTrigger>
                    <SelectContent className="bg-offBlack hover:bg-offBlack text-white border-gray-400/30 z-[999] relative">
                      <SelectItem
                        value="movies"
                        className="hover:bg-offBlack cursor-pointer"
                      >
                        Movie
                      </SelectItem>
                      <SelectItem
                        value="series"
                        className="hover:bg-offBlack cursor-pointer"
                      >
                        Series
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-4/5 border-gray-400/30">
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Search for a movie"
                    className="border-gray-400/30 p-2"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="space-x-2 flex">
            <Button className="text-xs font-semibold">
              {form.formState.isSubmitting ? "Searching..." : "Search"}
            </Button>
            <Button
              variant="destructive"
              onClick={() => setShowSearch(false)}
              className="text-xs font-semibold"
            >
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SearchBar;
