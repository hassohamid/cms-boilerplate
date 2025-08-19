import { storyblokEditable } from "@storyblok/react/rsc";

export default function ImageWithText({ blok }) {
  return (
    <section {...storyblokEditable(blok)} className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {blok.headline}
        </h2>

        <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed">
          {blok.content?.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
