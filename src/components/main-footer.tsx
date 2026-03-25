import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import QuickCall from "./home/QuickCall";
import Image from "next/image";
import logo from "../assets/logo.png";
const footerLinks = {
  products: [
    { label: "Pricing", href: "#" },
    { label: "Features", href: "/features" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function MainFooter() {
  return (
    <div>
      <QuickCall></QuickCall>

      <footer className="bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side - Logo and Description */}
            <div>
              {/* <Link href="/" className="flex items-center gap-2 mb-4">
                <svg
                  viewBox="0 0 40 40"
                  className="w-10 h-10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 30 L10 25 L15 28 L20 22 L25 25 L30 20 L35 25 L35 35 L5 35 Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M12 25 L20 15 L28 25 L26 25 L26 35 L14 35 L14 25 Z"
                    fill="#E53935"
                  />
                  <path
                    d="M10 25 L20 13 L30 25"
                    stroke="#C62828"
                    strokeWidth="2"
                    fill="none"
                  />
                  <rect x="17" y="28" width="6" height="7" fill="#5D4037" />
                  <rect x="15" y="22" width="4" height="4" fill="#FFF" />
                  <rect x="21" y="22" width="4" height="4" fill="#FFF" />
                  <circle cx="32" cy="12" r="5" fill="#1E88E5" />
                  <path
                    d="M32 7 L32 12 L35 12"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
                <span className="text-lg font-bold">
                  <span className="text-[#E53935]">Insta</span>
                  <span className="text-[#1E88E5]">Sign</span>
                  <span className="text-[#E53935]">Tracker</span>
                </span>
              </Link> */}
              <Link href="/" className="flex items-center gap-2">
                <Image src={logo} alt="Logo" width={160} height={40} />
              </Link>
              <p className="text-sm text-gray-400 mb-6 max-w-md">
                InstaSign Tracker Helps Real Estate Sign Companies Manage
                Installations, Service Calls, Inventory, And Installers From One
                Platform.
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Side - Links */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4 text-white">Products</h3>
                <ul className="space-y-3">
                  {footerLinks.products.map((link, index) => (
                    <li key={`${link.label}-${index}`}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-white">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={`${link.label}-${index}`}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              All rights Reserved To InstaSignTracker
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Privacy policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
