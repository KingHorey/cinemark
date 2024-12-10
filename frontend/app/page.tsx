import Advert from "./ui/advert/advert";
import ExperienceContainer from "./ui/experience/experienceContainer";
import Faq from "./ui/faq/faq";
import Footer from "./ui/general/footer";
import Navbar from "./ui/general/navbar";
import { HeadingTwo } from "./ui/headings/heading";
import ShuffleHero from "./ui/home/hero/shuffleGrid";
import Subsection from "./ui/home/subsectio";
import PriceContainer from "./ui/pricing/priceContainer";

export default function Home() {
  return (
    <>
      <Navbar />
      <ShuffleHero />
      <div className="flex flex-col gap-y-40 w-full mx-auto">
        {/* <section className="mx-auto">
          <Subsection />
        </section> */}
        <section className="mx-auto">
          <ExperienceContainer />
        </section>
        <section className="">
          <Faq />
        </section>
        <section>
          <HeadingTwo text="Choose the plan that's right for you" />
          <p className="text-sm text-gray-500">
            Join Cinemark and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </p>
          <PriceContainer />
        </section>
        <Advert />
      </div>
      <Footer />
    </>
  );
}
