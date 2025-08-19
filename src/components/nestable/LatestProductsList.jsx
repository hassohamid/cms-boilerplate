import { storyblokEditable } from "@storyblok/react/rsc";

export default function LatestProductsList({ blok }) {
  return (
    <section {...storyblokEditable(blok)} className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {blok.title || "Our latest arrivals"}
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          {blok.description}
        </p>

        {blok.button_text && (
          <button className="border border-gray-900 px-6 py-2 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors mb-12">
            {blok.button_text}
          </button>
        )}

        {/* Product grid - 3 column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blok.products?.map((product, index) => (
            <div key={index} className="group">
              <div
                className={`${
                  index === 1 ? "aspect-[3/4]" : "aspect-square"
                } bg-gray-300 mb-4`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
