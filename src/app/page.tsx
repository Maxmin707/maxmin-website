import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <Button className="bg-red-500 cursor-pointer hover:bg-red-600">
        Button
      </Button>

      <button type="button">
        Button
        <Image
          src="/images/next.svg"
          alt="Next.js Logo"
          width={100}
          height={100}
          className="rounded-full"
        />
      </button>

      {/* Container div with top margin */}
      <div className="mt-4">
        <Link href="/carousel">
          <Button className="bg-blue-500 hover:bg-blue-600">
            View Carousel Examples
          </Button>
        </Link>
        {/* Description of carousel */}
        <p className="text-gray-600 mt-2">
          A carousel is a rotating set of images or content, often used to
          showcase multiple items in a compact space.
        </p>
      </div>
      {/* New container div for another carousel */}
      <div className="mt-4">
        <Link href="/carousel2">
          <Button className="bg-green-500 hover:bg-green-600">
            View Another Carousel
          </Button>
        </Link>
        {/* Description of another carousel */}
        <p className="text-gray-600 mt-2">
          Explore another example of a carousel with different styles and
          functionality.
        </p>
      </div>
    </div>
  );
}
