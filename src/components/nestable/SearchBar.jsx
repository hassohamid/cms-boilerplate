import { storyblokEditable } from "@storyblok/react/rsc";

export default function SearchBar({ blok }) {
  return (
    <div {...storyblokEditable(blok)} className="relative">
      <input
        type="text"
        placeholder={blok.placeholder || "Start typing to search"}
        className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <svg
        className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}
