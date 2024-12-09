import { section } from "framer-motion/client";
import { HeadingTwo } from "../headings/heading";
import ExperienceCard from "./experienceCard";
import {
  SmartphoneIcon,
  LaptopIcon,
  WatchIcon,
  GamepadIcon,
  TabletSmartphoneIcon,
} from "lucide-react";

const Contents = [
  {
    title: "Smartphones",
    content:
      "Watch your favorite movies and shows on the go with our mobile app.",
    icon: <SmartphoneIcon stroke="red" size={20} />,
  },
  {
    title: "Tablet",
    content:
      "Cinemark is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    icon: <TabletSmartphoneIcon stroke="red" size={20} />,
  },
  {
    title: "Desktop",
    content:
      "Explore the latest smartphones with unparalleled performance, perfect for productivity and entertainment on your desktop browser.",
    icon: <LaptopIcon stroke="red" size={20} />,
  },
];

const ExperienceContainer = () => {
  return (
    <section className="flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-5">
        <HeadingTwo text="We Provide you streaming experience across various devices." />
        <p className="text-base font-regular text-gray-400">
          With Cinemark, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.
        </p>
      </div>
      <div className="grid grid-cols-3 w-full gap-5">
        {Contents.map(({ title, content, icon }, count: number) => (
          <ExperienceCard
            title={title}
            content={content}
            icon={icon}
            key={count}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceContainer;
