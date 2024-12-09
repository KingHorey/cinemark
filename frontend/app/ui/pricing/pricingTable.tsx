import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { HeadingTwo } from "../headings/heading";

const PricingTable = () => {
  const features = [
    {
      name: "Price",
      basic: "$9.99/Month",
      standard: "$12.99/Month",
      premium: "$14.99/Month",
    },
    {
      name: "Content",
      basic:
        "Access to a wide selection of movies and shows, including some new releases",
      standard:
        "Access to a wider selection of movies and shows, including most new releases and exclusive content",
      premium:
        "Access to a widest selection of movies and shows, including all new releases and offline viewing",
    },
    {
      name: "Devices",
      basic: "Watch on one device simultaneously",
      standard: "Watch on Two devices simultaneously",
      premium: "Watch on Four devices simultaneously",
    },
    {
      name: "Free Trial",
      basic: "7 Days",
      standard: "7 Days",
      premium: "7 Days",
    },
    {
      name: "Cancel Anytime",
      basic: "Yes",
      standard: "Yes",
      premium: "Yes",
    },
    {
      name: "HDR",
      basic: "No",
      standard: "Yes",
      premium: "Yes",
    },
    {
      name: "Dolby Atmos",
      basic: "No",
      standard: "Yes",
      premium: "Yes",
    },
    {
      name: "4K + HDR",
      basic: "No",
      standard: "No",
      premium: "Yes",
    },
    {
      name: "Offline Viewing",
      basic: "No",
      standard: "Yes, for select titles",
      premium: "Yes, for all titles",
    },
    {
      name: "Family Sharing",
      basic: "No",
      standard: "Yes, up to 5 family members",
      premium: "Yes, up to 6 family members",
    },
  ];

  return (
    <div className="min-w-full max-w-4xl text-white/70 space-y-10">
      <div>
        <HeadingTwo
          text="Compare our plans and find the right one for you
"
        />
        <p>
          Cinemark offers three different plans to fit your needs: Basic,
          Standard, and Premium. Compare the features of each plan and choose
          the one that's right for you.
        </p>
      </div>
      <Table className="w-full border border-gray-400/40 rounded-t-md">
        <TableHeader className="rounded-t-md p-5 h-24 border border-gray-500/40 text-white">
          <TableRow className="hover:bg-transparent bg-black p-5 rounded-t-md font-semibold">
            <TableHead className="w-[200px] font-semibold border-r">
              Features
            </TableHead>
            <TableHead className="font-semibold text-base border-r">
              Basic
            </TableHead>
            <TableHead className="font-semibold text-base border-r">
              Standard
              <Badge className="ml-2 bg-red">Popular</Badge>
            </TableHead>
            <TableHead className="font-semibold text-base border-r">
              Premium
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature) => (
            <TableRow key={feature.name} className="hover:bg-transparent">
              <TableCell className="font-medium py-8 border-r-gray-500 border-r">
                {feature.name}
              </TableCell>
              <TableCell className="font-medium py-8 border-r-gray-500 border-r">
                {feature.basic}
              </TableCell>
              <TableCell className="font-medium py-8 border-r-gray-500 border-r">
                {feature.standard}
              </TableCell>
              <TableCell className="font-medium py-8 border-r-gray-500 border-r">
                {feature.premium}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PricingTable;
