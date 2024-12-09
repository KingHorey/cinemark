import { convertCase } from "@/app/utils/utilities";

export function HeadingOne({ text }: { text: string }) {
  const upperCased = convertCase(text);
  console.log(upperCased);
  return <h1 className="text-4xl text-white font-semibold">{upperCased}</h1>;
}

export function HeadingTwo({ text }: { text: string }) {
  const upperCased = convertCase(text);
  return <h2 className="text-2xl text-white font-semibold">{upperCased}</h2>;
}

export function HeadingThree({ text }: { text: string | number }) {
  const upperCased = typeof text === "string" ? convertCase(text) : text;
  return <h3 className="text-xl text-white font-semibold">{upperCased}</h3>;
}
