"use client";

import {
  Form,
  FormItem,
  FormControl,
  FormField,
  FormLabel,
} from "@/components/ui/form";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { userPreferences } from "@/app/utils/definitions";

import { updateUserPreferences } from "@/app/utils/actions";

import { z } from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { availableGenres } from "@/app/utils/requests";

import { useActionState } from "react";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";

const UpdatePreferences = ({
  preferences,
}: {
  preferences: z.infer<typeof userPreferences>;
}) => {
  const form = useForm({
    resolver: zodResolver(userPreferences),
    defaultValues: {
      genre: preferences ? preferences.genre : [], // Use the existing genre array as default
    },
  });

  const onSubmit = async (data: z.infer<typeof userPreferences>) => {
    const handlePreferencesWithData = await updateUserPreferences(data);
    // Handle your update logic here
    if (handlePreferencesWithData.status === 200) {
      toast.success("Preferences updated successfully");
    } else {
      toast.error("An error occurred while updating your preferences");
    }
  };

  const onError = (errors: any) => {
    console.error("Validation Errors:", errors);
  };

  return (
    <Form {...form}>
      <form className="w-full space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="genre"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <div className="grid grid-cols-2 gap-5">
                {availableGenres.map(({ id, name }) => {
                  const isChecked = field.value.some(
                    (genre) => genre.id === id
                  );

                  return (
                    <FormItem
                      key={id}
                      className="p-1 flex space-x-2 space-y-0 items-center"
                    >
                      <FormControl>
                        <Checkbox
                          className="border border-gray-400/30 w-4 h-4 m-0"
                          checked={isChecked}
                          onCheckedChange={(isChecked) => {
                            const updatedGenres = isChecked
                              ? [...field.value, { id, name }] // Add genre object
                              : field.value.filter((genre) => genre.id !== id); // Remove genre object
                            field.onChange(updatedGenres); // Update form state
                          }}
                        />
                      </FormControl>
                      <FormLabel className="space-y-1 mt-0 cursor-pointer">
                        {name}
                      </FormLabel>
                    </FormItem>
                  );
                })}
              </div>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-red/80 hover:bg-red transition-colors duration-300 text-white"
        >
          {form.formState.isSubmitting ? <ThreeDots color="white" /> : "Update"}
        </Button>
      </form>
    </Form>
  );
};

export default UpdatePreferences;
