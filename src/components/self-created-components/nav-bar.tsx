import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function NavBar() {
  return (
    <div className="border-b bg-[#010101]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="text-xl font-bold text-white">
                <Image 
                  src="/logo.svg"
                  alt="logo"
                  width={0}
                  height={0}
                  className="object-contain h-8 w-auto"
                  style={{ width: 'auto', height: '100%' }}
                />
              </span>
            </Link>

            {/* Navigation Menu */}
            <NavigationMenu>
              <NavigationMenuList className="gap-6">
                <NavigationMenuItem>
                  <Link href="/article" className="text-gray-300 hover:text-white transition-colors">
                    Research Article
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                    About us
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Contact Button */}
          <div>
            <Link href="/contact" legacyBehavior>

              <Button variant={'outline'}>
                Work with us
              <ArrowRight className="size-4" /> {/* Added icon */}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}