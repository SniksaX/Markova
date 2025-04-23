import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-purple-900/20 bg-black py-6">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-400">
          © {currentYear} Markova Digital Marketing. All Rights Reserved.
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-400">
          <Link
            href="/privacy"
            className="hover:text-purple-400 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-purple-400 transition-colors"
          >
            Terms of Service
          </Link>
        </div>
        <div className="flex items-center space-x-3">
          <Link
            href="#"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
