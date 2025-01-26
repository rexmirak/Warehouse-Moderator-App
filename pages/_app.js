import "../styles/global.css"; // Import Tailwind CSS
import SideNav from "../components/SideNav"; // Import the SideNav component

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with Side Navigation */}
      <header className="bg-gray-100 shadow-lg">
        <SideNav />
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-8">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
