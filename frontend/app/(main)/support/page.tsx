import Advert from "@/app/ui/advert/advert";
import Faq from "@/app/ui/faq/faq";
import Questions from "./questions";

const Page = () => {
  return (
    <div className="flex flex-col space-y-20">
      <Questions />
      <Faq />
      <Advert />
    </div>
  );
};

export default Page;
