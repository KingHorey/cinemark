import { HeadingTwo } from "../headings/heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    title: "What is Cinemark?",
    answer:
      "Cinemark is a Cinemark service that allows you to watch movies and shows on demand.",
    item: "item-1",
  },
  {
    title: "How much does Cinemark Cost?",
    answer:
      "Cinemark offers flexible pricing plans starting at $9.99/month, with options for annual subscriptions at a discounted rate.",
    item: "item-2",
  },
  {
    title: "What devices are supported by Cinemark?",
    answer:
      "Cinemark is available on smartphones, tablets, smart TVs, gaming consoles, and desktop browsers.",
    item: "item-3",
  },
  {
    title: "Can I download movies and shows for offline viewing?",
    answer:
      "Yes, Cinemark allows you to download select movies and shows to watch offline at your convenience.",
    item: "item-4",
  },
  {
    title: "Does Cinemark have a free trial?",
    answer:
      "Yes, Cinemark offers a 7-day free trial for new users to explore our library of movies and shows.",
    item: "item-5",
  },
  {
    title: "How can I cancel my subscription?",
    answer:
      "You can cancel your subscription anytime through your account settings. Once canceled, you'll have access until the end of your billing period.",
    item: "item-6",
  },
  {
    title: "Are there parental controls on Cinemark?",
    answer:
      "Yes, Cinemark includes robust parental controls to restrict access to mature content and manage viewing profiles for kids.",
    item: "item-7",
  },
  {
    title: "What genres of content are available on Cinemark?",
    answer:
      "Cinemark offers a wide range of genres, including action, comedy, drama, documentaries, kids' content, and more.",
    item: "item-8",
  },
  {
    title: "Can I share my Cinemark account with others?",
    answer:
      "Yes, Cinemark allows multiple profiles under a single subscription plan, so your family can enjoy personalized recommendations.",
    item: "item-9",
  },
  {
    title: "How often is new content added to Cinemark?",
    answer:
      "New movies and shows are added to Cinemark every week, ensuring fresh content is always available.",
    item: "item-10",
  },
];

const Faq = () => {
  return (
    <div className="text-white min-w-full flex flex-col gap-y-10">
      <div className="w-full">
        <HeadingTwo text="Frequently Asked Questions" />
        <p className="text-sm text-gray-400">
          Got questions? We've got answers! Check out our FAQ section to find
          answers to the most common questions about Cinemark.
        </p>
      </div>
      <div className="grid grid-cols-2  w-full gap-10">
        {questions.map(({ title, answer, item }, index) => (
          <div className="flex gap-x-5 w-full items-center">
            <div className="font-bold text-base rounded-md px-4 py-2 bg-offBlack">
              {index + 1}
            </div>
            <Accordion
              type="single"
              collapsible
              key={index + 1}
              className="w-full"
            >
              <AccordionItem value={item} className="border-red/50 w-full">
                <AccordionTrigger className="font-semibold text-base">
                  {title}
                </AccordionTrigger>
                <AccordionContent className="border-none">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
