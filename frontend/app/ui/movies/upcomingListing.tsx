import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { movieSchema } from "@/app/utils/definitions";

import { z } from "zod";

const UpcomingListing = ({ data }: { data: z.infer<typeof movieSchema> }) => {
  return (
    <Card className="w-full xs:h-[200px] md:h-[200px] lg:h-[250px] bg-offBlack/40 border-slate-200/20 rounded-lg py-3 border">
      <CardContent className="h-full w-full flex flex-col gap-y-5 justify-between">
        <div className="h-[75%] rounded-md">
          <img
            src={data.poster_path}
            alt={data.original_name}
            className="rounded-md object-cover h-full w-full"
          />
        </div>
        <div className="text-white flex flex-col space-y-2 items-center justify-between xs:flex-col w-full">
          <p
            className="text-xs lg:text-sm font-semibold text-ellipsis whitespace-nowrap overflow-hidden"
            title={data.original_name}
          >
            {data.original_name}
          </p>

          <Badge className="w-full text-center flex justify-center rounded-xl border border-gray-400/30 bg-black py-1 px-3">
            {data?.release_date?.toString()}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingListing;
