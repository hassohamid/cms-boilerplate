import { storyblokEditable } from "@storyblok/react/rsc";

export default function ProductList({ blok }) {
  return (
    <section {...storyblokEditable(blok)} className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {blok.title}
          </h2>
          {blok.description && (
            <p className="text-gray-600 max-w-2xl">{blok.description}</p>
          )}
        </div>

        {/* Filter tabs */}
        {blok.categories && blok.categories.length > 0 && (
          <div className="flex gap-4 mb-8">
            {blok.categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 text-sm border ${
                  index === 0
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-900 border-gray-300"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blok.products?.map((product, index) => (
            <div key={index} className="group">
              <div className="aspect-square bg-gray-300 mb-4"></div>
              <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{product.size}</p>
              <p className="font-medium text-gray-900">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
