"use client";

import React, { useActionState, useState, useRef } from "react";

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
import { handleUpdateUserInformation } from "@/app/utils/actions";

import { CameraIcon, User } from "lucide-react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { HeadingThree } from "@/app/ui/headings/heading";

import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import { revalidatePath } from "next/cache";

const ProfileWrapper = ({
  user,
}: {
  user: z.infer<typeof userProfileInformation>;
}) => {
  const [changed, setChanged] = useState<boolean>(false);

  const checkValuesChange = () => {
    const values = form.getValues();
    if (JSON.stringify(values) === JSON.stringify(User)) {
      setChanged(false);
    } else {
      setChanged(true);
    }
  };

  const file = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof userProfileInformation>>({
    resolver: zodResolver(userProfileInformation),
    defaultValues: { ...user },
  });

  const handleUpdate = async (data: z.infer<typeof userProfileInformation>) => {
    const response = await handleUpdateUserInformation(
      data,
      user.id ? user?.id : ""
    );
    if (response.status === 200) {
      toast.success(response.message);
    } else {
      console.log(response.status, response.message[0]);
      toast.error(response.message[0]);
      revalidatePath("/profile");
    }
  };

  return (
    <div className="space-y-10 mt-10 lg:w-1/2 xs:w-full">
      <HeadingThree text="Update your profile information" />
      <Form {...form}>
        <form
          className="text-white space-y-5"
          onChange={checkValuesChange}
          onSubmit={form.handleSubmit(handleUpdate)}
        >
          <FormField
            name="image"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="roumded-full w-40 h-40 relative border rounded-full border-gray-400/30">
                    <img
                      src={
                        field.value ||
                        `http://localhost:8000${user.image}` ||
                        "/images/anonymous-user.webp"
                      }
                      className="w-full h-full rounded-full object-cover"
                      // default
                    />

                    <div className="absolute bottom-0 right-0 p-2 rounded-full backdrop-blur-lg shadow-lg border border-gray-400/30 cursor-pointer">
                      <CameraIcon
                        size={14}
                        stroke="white"
                        onClick={() => file.current?.click()}
                      />
                    </div>
                    <Input
                      ref={file}
                      className="hidden"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          const reader = new FileReader();
                          reader.onload = (event) => {
                            field.onChange(event.target?.result);
                          };
                          reader.readAsDataURL(e.target.files[0]);
                        }
                      }}
                    />
                  </div>
                </FormControl>
                <p className="text-xs text-red">
                  {form.formState.errors.image?.message}
                </p>
              </FormItem>
            )}
          />
          <FormField
            name="first_name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="rounded-md border border-gray-400/30 p-2 shadow-none"
                    // defaultValue={user.first_name}
                    // onChange={checkValuesChange}
                  />
                </FormControl>
                <p className="text-xs text-red">
                  {form.formState.errors.first_name?.message}
                </p>
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
                  <Input
                    {...field}
                    className="rounded-md border border-gray-400/30 p-2 shadow-none"
                    // defaultValue={user.last_name}
                  />
                </FormControl>
                <p className="text-xs text-red">
                  {form.formState.errors.last_name?.message}
                </p>
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="rounded-md border border-gray-400/30 p-2 shadow-none"
                    // defaultValue={user.email}
                    // onChange={checkValuesChange}
                  />
                </FormControl>
                <p className="text-xs text-red">
                  {form.formState.errors.email?.message}
                </p>
              </FormItem>
            )}
          />
          <Button
            className="bg-red text-white hover:text-red duration-200 transition-colors border-red shadow-none rounded-md border"
            disabled={!changed}
          >
            {form.formState.isSubmitting ? (
              <ThreeDots
                visible={true}
                height="60"
                width="80"
                color="white"
                ariaLabel="three-dots-loading"
                radius="7"
              />
            ) : (
              "Update"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ProfileWrapper;

//asac

// "use client";

// import React, { useEffect, useState, useRef } from "react";

// import {
//   Form,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormControl,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

// import { userProfileInformation } from "@/app/utils/definitions";
// import { handleUpdateUserInformation } from "@/app/utils/actions";

// import { CameraIcon } from "lucide-react";

// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { HeadingThree } from "@/app/ui/headings/heading";

// import { useRouter } from "next/navigation";

// import { revalidatePath } from "next/cache";
// const Page = () => {
//   const [userImage, setUserImage] = useState<string>("");

//   const { push } = useRouter();

//   const [changed, setChanged] = useState<boolean>(false);
//   const [initialValues, setInitialValues] =
//     useState<z.infer<typeof userProfileInformation>>();

//   const file = useRef<HTMLInputElement>(null);

//   const form = useForm<z.infer<typeof userProfileInformation>>({
//     resolver: zodResolver(userProfileInformation),
//   });

//   // useEffect(() => {
//   //   if (status === "loading") return;

//   //   if (status !== "authenticated") push("/login");
//   //   if (session) {
//   //     const { user } = session;
//   //     if (user) {
//   //       const { email, name, image, id } = user;
//   //       const [first_name, last_name] = (name && name.split(" ")) || "";
//   //       setInitialValues({
//   //         first_name,
//   //         last_name,
//   //         email: email ?? "",
//   //         image: image ?? undefined,
//   //         id: id ?? "",
//   //       });
//   //       form.setValue("first_name", first_name);
//   //       form.setValue("last_name", last_name);
//   //       form.setValue("email", email ?? "");
//   //       form.setValue("image", image ?? undefined);
//   //       // form.setValue("id", id ?? "");
//   //     }
//   //   }
//   // }, [status, session, update]);

//   useEffect(() => {
//     setInitialValues(form.getValues());
//   }, []);

//   // check if a field has been changed from it's initial state

//   // const handleUpdate = async (data: z.infer<typeof userProfileInformation>) => {
//   //   const { id } = user;
//   //   const response = await axios.put(
//   //     "/api/profile",
//   //     JSON.stringify({ data, id })
//   //   );
//   //   const { data: result } = response;
//   //   if (result.status === 200) {
//   //     toast(result.message);
//   //     // await signIn("credentials", { redirect: false, user: result.user.data });
//   //     revalidatePath("/profile");
//   //   } else {
//   //     toast.error(result.message);
//   //   }
//   // };

//   return (
//     <div className="space-y-10 mt-10 lg:w-1/2 xs:w-full">
//       <HeadingThree text="Update your profile information" />
//       <Form {...form}>
//         <form
//           className="text-white space-y-5"
//           onChange={checkValuesChange}
//           // onSubmit={form.handleSubmit(handleUpdate)}
//         >
//           <FormField
//             name="image"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <div className="roumded-full w-40 h-40 relative border rounded-full border-gray-400/30">
//                     <img
//                       src={field.value || userImage}
//                       className="w-full h-full rounded-full object-cover"
//                     />

//                     <div className="absolute bottom-0 right-0 p-2 rounded-full backdrop-blur-lg shadow-lg border border-gray-400/30 cursor-pointer">
//                       <CameraIcon
//                         size={14}
//                         stroke="white"
//                         onClick={() => file.current?.click()}
//                       />
//                     </div>
//                     <Input
//                       ref={file}
//                       className="hidden"
//                       type="file"
//                       accept="image/*"
//                       onChange={(e) => {
//                         if (e.target.files && e.target.files[0]) {
//                           const reader = new FileReader();
//                           reader.onload = (event) => {
//                             field.onChange(event.target?.result);
//                           };
//                           reader.readAsDataURL(e.target.files[0]);
//                         }
//                       }}
//                     />
//                   </div>
//                 </FormControl>
//                 <p className="text-xs text-red">
//                   {form.formState.errors.image?.message}
//                 </p>
//               </FormItem>
//             )}
//           />
//           <FormField
//             name="first_name"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>First Name</FormLabel>
//                 <FormControl>
//                   <Input
//                     {...field}
//                     className="rounded-md border border-gray-400/30 p-2 shadow-none"
//                     // onChange={checkValuesChange}
//                   />
//                 </FormControl>
//                 <p className="text-xs text-red">
//                   {form.formState.errors.first_name?.message}
//                 </p>
//               </FormItem>
//             )}
//           />
//           <FormField
//             name="last_name"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Last Name</FormLabel>
//                 <FormControl>
//                   <Input
//                     {...field}
//                     className="rounded-md border border-gray-400/30 p-2 shadow-none"
//                   />
//                 </FormControl>
//                 <p className="text-xs text-red">
//                   {form.formState.errors.last_name?.message}
//                 </p>
//               </FormItem>
//             )}
//           />
//           <FormField
//             name="email"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Email</FormLabel>
//                 <FormControl>
//                   <Input
//                     {...field}
//                     className="rounded-md border border-gray-400/30 p-2 shadow-none"
//                     // onChange={checkValuesChange}
//                   />
//                 </FormControl>
//                 <p className="text-xs text-red">
//                   {form.formState.errors.email?.message}
//                 </p>
//               </FormItem>
//             )}
//           />
//           <Button
//             className="bg-red text-white hover:text-red duration-200 transition-colors border-red shadow-none rounded-md border"
//             disabled={!changed}
//           >
//             Update
//           </Button>
//         </form>
//       </Form>
//     </div>
//   );
// };

// export default Page;
