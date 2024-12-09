import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";

const ExperienceCard = ({
  title,
  content,
  icon,
}: {
  title: string;
  content: string;
  icon: React.ReactNode;
}) => {
  return (
    <Card className="w-full h-[240px] bg-offBlack rounded-md py-3 bg-gradient-to-tr from-black/60 from-30% via-black/50 to-red/30 to-100% flex flex-col gap-y-5 border-2 border-gray-500/20">
      <CardHeader className="flex items-center w-full flex-row gap-x-5">
        <div className="border p-2 rounded-md backdrop-blur-md border-gray-300/50">
          {icon}
        </div>
        <CardTitle className="text-white font-semibold tracking-wider">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="h-full w-full flex flex-col gap-y-5">
        <p className="text-white font-regular text-sm">{content}</p>
      </CardContent>
      ;
    </Card>
  );
};

export default ExperienceCard;
