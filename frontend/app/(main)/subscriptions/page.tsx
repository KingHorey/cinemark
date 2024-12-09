import Advert from "@/app/ui/advert/advert";
import { HeadingOne } from "@/app/ui/headings/heading";
import PriceContainer from "@/app/ui/pricing/priceContainer";
import PricingTable from "@/app/ui/pricing/pricingTable";
import React from "react";

const Page = () => {
  return (
    <main className="flex flex-col gap-y-20">
      <div className="mt-20">
        <HeadingOne text="Choose the plan that is right for you" />
        <p className="text-gray-400">
          Join Cinemark and select from our flexible subscription options
          tailored to suit your viewing preferences. Get ready for non-stop
          entertainment!
        </p>
        <PriceContainer />
      </div>

      <PricingTable />
      <Advert />
    </main>
  );
};

export default Page;
