import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <div className="relative min-h-[80vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/background.avif" // Make sure to add your image to the public folder
            alt="Hero Background"
            fill
            className="object-cover brightness-50" // This darkens the image for better text visibility
            priority // This prioritizes loading this image
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Welcome to Our Website
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Discover amazing features and services that will transform your experience.
          </p>
          <Button variant="outline" size="lg" className="backdrop-blur-sm bg-white/10 hover:bg-white/20 border-white/20 text-white">
            View our projects
            <ArrowRight className="size-4" /> {/* Added icon */}
          </Button>
        </div>
        </div>
    </>
  );
}