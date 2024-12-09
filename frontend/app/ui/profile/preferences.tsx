import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { HeadingThree } from "../headings/heading";

import { availableGenres } from "@/app/utils/requests";

import UpdatePreferences from "./setPreferences";

import { CircleHelpIcon } from "lucide-react";
import { getUserPreferences } from "@/app/utils/actions";
// pass genres gotten from the user
const Preferences = async () => {
  const { message } = await getUserPreferences();
  const { data } = message;

  return (
    <div className="space-y-10">
      <HeadingThree text="Personalize your Recommendations" />
      <div className="space-y-4">
        <div className="flex gap-x-2">
          <h4 className="text-white">Genres</h4>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <CircleHelpIcon
                  size={14}
                  stroke="white"
                  className="cursor-pointer"
                />{" "}
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  Click on the genres to add/remove them from your preferences
                  <br />
                  Selected genres have a background color of red
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="w-full flex flex-wrap text-white gap-5">
          <UpdatePreferences preferences={data} />
        </div>
      </div>
    </div>
  );
};

export default Preferences;
