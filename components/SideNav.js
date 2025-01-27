import { useState } from "react";
import Button from "./Button";
import { HomeIcon, ShoppingBagIcon, ChartBarIcon, CogIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function SideNav({ theme, toggleTheme }) {
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
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 dark:bg-gray-800 shadow-lg transform lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:block z-50`}
      >
        <div className="p-4 text-xl font-bold text-blue-500 dark:text-white">Navigation</div>
        <nav className="flex flex-col space-y-2 flex-1">
          <Link onClick={() => setIsOpen(false)} href="/">
            <Button text="Home" icon={HomeIcon} />
          </Link>
          <Link onClick={() => setIsOpen(false)} href="/products">
            <Button text="Products" icon={ShoppingBagIcon} />
          </Link>
          <Link onClick={() => setIsOpen(false)} href="/tbd">
            <Button text="Dashboard" icon={ChartBarIcon} />
          </Link>
          <Link onClick={() => setIsOpen(false)} href="/tbd">
            <Button text="Settings" icon={CogIcon} />
          </Link>
        </nav>
        {/* Theme Toggle */}
        <div className="p-4 flex items-center justify-center border-t border-gray-300 dark:border-gray-700">
          <button
            onClick={toggleTheme}
            className={`flex items-center justify-center w-full px-4 py-2 border rounded-md transition-colors duration-300 ${
              theme === "light"
                ? "bg-gray-200 text-black hover:bg-gray-300"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
          >
            {theme === "light" ? (
              <MoonIcon className="w-5 h-5 mr-2" />
            ) : (
              <SunIcon className="w-5 h-5 mr-2" />
            )}
            <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
          </button>
        </div>
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
