import { Card, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export const MovieGridSkeleton = () => {
  return (
    <div className="grid grid-col-4 gap-10 relative overflow-hidden">
      {Array.from({ length: 5 }, (_, index) => index).map((index) => (
        <Card
          className={`w-full xs:h-[200px] md:h-[200px] lg:h-[250px] bg-offBlack/40 border-slate-200/20 rounded-md py-3 border relative transition-all duration-400 overflow-hidden animate-pulse `}
        >
          <Skeleton
            className={`h-full w-full flex flex-col gap-y-5 justify-between  overflow-hidden p-5`}
          >
            <Skeleton className="xs:h-[200px] md:h-[200px] lg:h-[250px] border rounded-md border-slate-200/20" />
            <Skeleton className="flex justify-between">
              <Skeleton className="md:text-sm text-white font-semibold h-4 w-1/2 border p-3 border-slate-200/20"></Skeleton>
              <Skeleton className="w-5 h-5 border p-3 border-slate-200/20"></Skeleton>
            </Skeleton>
          </Skeleton>
        </Card>
      ))}
    </div>
  );
};
