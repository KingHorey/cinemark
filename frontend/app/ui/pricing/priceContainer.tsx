import { HeadingTwo } from "../headings/heading";
import PriceCard from "./priceCard";

const PriceContainer = () => {
  return (
    <section className="flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-5"></div>
      <div className="w-full xs:flex xs:flex-col xs:gap-y-5 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <PriceCard
          title="Basic Plan"
          details="Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles."
          price={9.99}
          link="/subscriptions/basic"
        />
        <PriceCard
          title="Standard Plan"
          details="Access to a wider selection of movies and shows, including most new releases and exclusive content"
          price={19.99}
          link="/subscriptions/standard"
        />
        <PriceCard
          title="Premium Plan"
          details="Access to a widest selection of movies and shows, including all new releases and Offline Viewing"
          price={25}
          link="/subscriptions/premium"
        />
      </div>
    </section>
  );
};

export default PriceContainer;
