import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { HeadingThree } from "../headings/heading";

const Reviews = () => {
  return (
    <Card className="rounded-lg border bg-offBlack border-gray-400/30 w-full">
      <CardContent>
        <CardHeader>
          <CardTitle>
            <HeadingThree text="Reviews" />
          </CardTitle>
        </CardHeader>
        <div className="flex lg:flex-row w-full xs:flex-col">
          <CardContent>
            <Card className="rounded-lg border bg-black border-gray-400/30 w-full">
              <CardHeader>
                <HeadingThree text="John Doe" />
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  This movie was recommended to me by a very dear friend who
                  went for the movie by herself. I went to the cinemas to watch
                  but had a houseful board so couldn’t watch it.
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </div>
      </CardContent>
    </Card>
  );
};

export default Reviews;
