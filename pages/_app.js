import { useEffect, useState } from "react";
import "../styles/global.css"; // Import Tailwind CSS
import SideNav from "../components/SideNav"; // Import Side Navigation Component

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  // Check and load the theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  // Toggle the theme and save it in localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <main className="flex flex-col lg:flex-row min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 gap-8">
  <div className="lg:w-1/5 w-full bg-gray-200 dark:bg-gray-800 p-4">
    {/* Content for the left column */}
    <SideNav theme={theme} toggleTheme={toggleTheme} />
    </div>

      {/* Main Content Area */}
      <div className="lg:w-4/5 w-full p-4">
    {/* Content for the right column */}
    <Component {...pageProps} />
    </div>
</main>
  );
}
