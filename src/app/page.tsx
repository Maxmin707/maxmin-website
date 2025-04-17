import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const companyLogos: { name: string; src: string }[] = [
    { name: "Google", src: "/logos/google.png" },
    { name: "Microsoft", src: "/logos/microsoft.png" },
    { name: "Amazon", src: "/logos/amazon.png" },
    { name: "Meta", src: "/logos/meta.png" },
    // Add more as needed1
  ];

  return (
    <main className="flex flex-col">
      {/* building name */}
      <section className="w-full p-56 relative min-h-[90vh] bg-[linear-gradient(315deg,_#1e3a8a_0%,_#10131a_60%,_#000_100%)] overflow-hidden">
        {/* Gradient Glow Circle Behind Text */}

        {/* Main Heading */}
        <div className="flex w-[800px] flex-col gap-4 items-start justify-center">
          <h1 className="font-poppins text-6xl font-extrabold text-white">
            Helping small businesses scale
          </h1>
          <p className="font-inter font-semibold  text-2xl text-[#4E4E4E]">
            Helping SMEs adopt tech tools which help them scale faster and
            compete in the market.
          </p>

          {/* buttons */}
          <div></div>
        </div>
      </section>

      {/* building the brands section */}
      <section className="w-full flex-col p-56 relative min-h-[10vh] flex items-center justify-center bg-white overflow-hidden">
        {/* We want to showcase the company logos and names here in which we have created an impact  */}
        {/* Main Heading */}
        <div className="flex w-[800px] flex-col gap-4 items-start justify-center">
          <h1 className="font-poppins text-6xl font-extrabold text-white">
            Helping small businesses scale
          </h1>
          <p className="font-inter font-semibold  text-2xl text-[#4E4E4E]">
            Helping SMEs adopt tech tools which help them scale faster and
            compete in the market.
          </p>
        </div>

        {/* project div show casing */}
        <div className="flex gap-8 mt-8 flex-wrap">
          {companyLogos.map((company) => (
            <div
              key={company.name}
              className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 shadow-md border border-gray-200"
              title={company.name}
            >
              <img
                src={company.src}
                alt={company.name + " logo"}
                className="w-14 h-14 object-contain rounded-full"
              />
            </div>
          ))}
        </div>
      </section>

      {/* building the solutions part */}
      <section></section>
    </main>
  );
}
