import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import Link from "next/link";
import { HeadingTwo } from "../headings/heading";

const Advert = () => {
  return (
    <Card className="bg-transparent relative p-0 border-none gradient-mask-80">
      <CardContent className="w-full relative h-full p-0 gradient-mask-80">
        <img
          src="/images/advert.png"
          className="object-contain w-full h-full rounded-md"
        />
        <div className="flex md:flex-row xs:flex-col gap-y-10 justify-between items-center absolute top-0 bottom-0 w-full px-20  ">
          <HeadingTwo text="Start your free trial today!" />
          <Button
            asChild
            className="bg-red p-5 hover:bg-red/70 transition-all duration-300"
          >
            <Link href="#">Start a Free Trial</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Advert;
