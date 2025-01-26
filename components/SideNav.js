import { useState } from "react";
import Button from "../components/Button";
import { Home, ShoppingBag, ChartBar, Cog, HomeIcon, ShoppingBagIcon, ChartBarIcon, CogIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger menu for small screens */}
      <button
        className="lg:hidden p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="space-y-2">
          <div className="w-8 h-1 bg-blue-500"></div>
          <div className="w-8 h-1 bg-blue-500"></div>
          <div className="w-8 h-1 bg-blue-500"></div>
        </div>
      </button>

      {/* Side Navigation */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 shadow-lg transform lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:block z-50`} // Add z-index
      >
        <div className="p-4 text-xl font-bold text-blue-500">Navigation</div>
        <nav className="flex flex-col space-y-2">
          <Link onClick={() => setIsOpen(false)} href={{ pathname: "/", query: { pageTitle: "Moderation App Home" } }}>
           <Button text="Home" icon={HomeIcon} />
          </Link>
          <Link onClick={() => setIsOpen(false)} href={{ pathname: "/products", query: { pageTitle: "Products" } }}>
             <Button text="Products" icon={ShoppingBagIcon} />
          </Link>
          <Link onClick={() => setIsOpen(false)} href={{ pathname: "/tbd", query: { pageTitle: "Dashboard" } }}>
            <Button text="Dashboard" icon={ChartBarIcon} />
          </Link>
          <Link onClick={() => setIsOpen(false)} href={{ pathname: "/tbd", query: { pageTitle: "Settings" } }}>
            <Button text="Settings" icon={CogIcon} />
          </Link>
        </nav>
      </div>

      {/* Overlay when menu is open (for mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden z-40" // Lower z-index than the menu
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}
