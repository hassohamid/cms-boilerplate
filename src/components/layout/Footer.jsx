import { storyblokEditable } from "@storyblok/react/rsc";

export default function Footer({ blok }) {
  return (
    <footer {...storyblokEditable(blok)} className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Sign up for our newsletter
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Be the first to know about our special offers, new product
              launches, and events
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <button className="px-6 py-2 bg-gray-900 text-white rounded-r-md hover:bg-gray-800">
                Sign Up
              </button>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {blok.shop_links?.map((link, index) => (
                <li key={index}>
                  <a href={link.url || "#"} className="hover:text-gray-900">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {blok.help_links?.map((link, index) => (
                <li key={index}>
                  <a href={link.url || "#"} className="hover:text-gray-900">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">About</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {blok.about_links?.map((link, index) => (
                <li key={index}>
                  <a href={link.url || "#"} className="hover:text-gray-900">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
