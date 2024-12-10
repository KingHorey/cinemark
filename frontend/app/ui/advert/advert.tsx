import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import Link from "next/link";
import { HeadingTwo } from "../headings/heading";

const Advert = () => {
  return (
    <Card
      className="bg-transparent relative p-0 border-none gradient-mask-80 border border-white"
      // style={{
      //   backgroundImage: 'url("/images/advert.png")',
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      // }}
    >
      <CardContent
        className="w-full relative h-fit flex p-0 gradient-mask-80"
        // style={{
        //   backgroundImage: 'url("/images/advert.png")',
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        // }}
      >
        <img
          src="/images/advert.png"
          className="object-contain w-full h-full rounded-md"
        />
        <div className="flex h-full md:flex-row gap-y-0 justify-between items-center absolute top-0 bottom-0 w-full px-20  ">
          <h2 className="text-sm text-white md:text-base font-bold">
            Start your free trial today!
          </h2>
          <Button
            asChild
            className="bg-red md:p-5 hover:bg-red/70 transition-all duration-300 xs:text-xs text-base w-fit h-fit xs:p-2"
          >
            <Link href="#">Start a Free Trial</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Advert;
