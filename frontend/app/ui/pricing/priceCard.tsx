import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import Link from "next/link";
import { HeadingThree } from "../headings/heading";

const PriceCard = ({
  title,
  details,
  price,
  link,
}: {
  title: string;
  details: string;
  price: number;
  link: string;
}) => {
  return (
    <Card className="w-full bg-offBlack/50 border-none rounded-md py-3 h-full text-white border-2 border-gray-400">
      <div className="w-11/12 mx-auto h-full flex flex-col gap-y-5">
        <CardHeader>
          <CardTitle className="mb-5">{title}</CardTitle>
          <CardDescription>{details}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-5">
          <HeadingThree text={`$${price}`} />
          <div className="flex md:flex-col lg:flex-row xs:gap-y-5 w-full gap-x-3 lg:justify-center">
            <Button
              asChild
              variant="ghost"
              className="border-2 w-full border-gray-400/30 bg-black border-gray-400 xs:p-5 lg:p-3 hover:bg-black/70 transition-colors duration-300 hover:text-white hover:border-black/80"
            >
              <Link href={`/subscriptions/}`} className="">
                Start Free Trial
              </Link>
            </Button>
            <Button
              className="bg-red lg:w-full xs:p-5 lg:p-3 border-2 border-red hover:bg-red/70 transition-all duration-300 hover:border-red/70"
              asChild
            >
              <Link href={link}>Choose Plan</Link>
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default PriceCard;
