import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileNav from "./mobile-nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-900/20 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-700 text-transparent bg-clip-text mr-2">
              Markova
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className="text-gray-200 hover:text-purple-400 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-gray-200 hover:text-purple-400 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-gray-200 hover:text-purple-400 transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-gray-200 hover:text-purple-400 transition-colors"
          >
            Contact Us
          </Link>
          <Link
            href="/faq"
            className="text-gray-200 hover:text-purple-400 transition-colors"
          >
            FAQ
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-200 hover:text-purple-400"
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
