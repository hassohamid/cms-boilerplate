import { storyblokEditable } from "@storyblok/react/rsc";

export default function Hero({ blok }) {
  const backgroundColor = blok.background_color || "bg-white";

  return (
    <section
      {...storyblokEditable(blok)}
      className={`py-20 px-4 text-center ${backgroundColor}`}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {blok.headline}
        </h1>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          {blok.description}
        </p>
        {blok.button_text && (
          <button className="border border-gray-900 px-6 py-2 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
            {blok.button_text}
          </button>
        )}
      </div>
    </section>
  );
}
