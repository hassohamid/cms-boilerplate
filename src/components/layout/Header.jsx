import { storyblokEditable } from "@storyblok/react/rsc";
import SearchBar from "../nestable/SearchBar";

export default function Header({ blok }) {
  return (
    <>
      {/* Announcement bar */}
      {blok.announcement && (
        <div className="bg-black text-white text-center py-2 px-4 text-sm">
          {blok.announcement}
        </div>
      )}

      <header
        {...storyblokEditable(blok)}
        className="bg-white border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-900">
                {blok.logo_text || "Ecommerce"}
              </h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              {blok.nav_links?.map((link, index) => (
                <a
                  key={index}
                  href={link.url || "#"}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Search and Cart */}
            <div className="flex items-center space-x-4">
              <SearchBar blok={{ placeholder: "Search" }} />
              <div className="flex items-center space-x-1">
                <svg
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span className="text-sm text-gray-700">
                  {blok.cart_count || "3"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
