import { storyblokEditable } from "@storyblok/react/rsc";

export default function ImageBanner({ blok }) {
  return (
    <section {...storyblokEditable(blok)} className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {blok.headline}
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          {blok.description}
        </p>

        {blok.button_text && (
          <button className="border border-gray-900 px-6 py-2 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors mb-12">
            {blok.button_text}
          </button>
        )}

        {/* Large banner image */}
        <div className="aspect-[16/9] bg-gray-300 rounded"></div>
      </div>
    </section>
  );
}
