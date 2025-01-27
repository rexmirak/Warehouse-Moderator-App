import { useState } from "react";
import Button from "./Button";
import { HomeIcon, ShoppingBagIcon, ChartBarIcon, CogIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function SideNav({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-full ">
      {/* Header / Hamburger Menu */}
      <div className="flex items-center z-50 justify-between p-4 bg-gray-100 dark:bg-gray-800">
        <div className="text-xl font-bold text-blue-500 dark:text-white">Navigation</div>
        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1">
            <div className="w-6 h-1 bg-blue-500"></div>
            <div className="w-6 h-1 bg-blue-500"></div>
            <div className="w-6 h-1 bg-blue-500"></div>
          </div>
        </button>
      </div>

      {/* Main Content */}
      <div className={`flex flex-col z-50 lg:flex-row w-full transform transition-transform duration-300 ease-in-out ${
          isOpen ? "flex translate-x-0 opacity-100" : "hidden lg:flex -translate-x-full opacity-0 lg:translate-x-0 lg:opacity-100"
        } `}>
        {/* Side Navigation */}
        <div className="flex flex-col bg-gray-100 dark:bg-gray-800 w-full ">
          <nav className="flex flex-col p-4 flex-1">
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
        
      </div>
       {/* Overlay when menu is open (for mobile) */}
       {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden z-40 transition-opacity duration-300 ease-in-out"
          onClick={() => setIsOpen(false)}
        ></div>)}
    </div>
  );
}
