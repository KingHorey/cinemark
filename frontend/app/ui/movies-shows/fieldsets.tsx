import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const FieldSets = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <fieldset className="border border-gray-400/30 rounded-md p-10 relative flex flex-col gap-y-20">
      <Card className="w-fit bg-red h-fit text-white font-bold flex items-center p-1 border-red rounded-md absolute -top-4">
        <CardContent className="p-0">{title}</CardContent>
      </Card>
      {children}
    </fieldset>
  );
};

export default FieldSets;
