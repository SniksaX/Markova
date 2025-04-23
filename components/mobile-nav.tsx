"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-gray-200">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-black border-purple-900/20 pr-0">
        <div className="px-7">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setOpen(false)}
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-700 text-transparent bg-clip-text">
                Markova
              </span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              className="text-gray-200"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="mt-8 flex flex-col space-y-4 text-lg font-medium">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-gray-200 hover:text-purple-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="text-gray-200 hover:text-purple-400 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="text-gray-200 hover:text-purple-400 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-gray-200 hover:text-purple-400 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/faq"
              onClick={() => setOpen(false)}
              className="text-gray-200 hover:text-purple-400 transition-colors"
            >
              FAQ
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
