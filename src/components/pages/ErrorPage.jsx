import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center px-6">
      {/* Big 404 */}
      <h1 className="text-8xl font-extrabold tracking-tight text-[#244d3f]">
        404
      </h1>

      {/* Divider line */}
      <div className="w-16 h-1 bg-[#244d3f] rounded-full my-4"></div>

      {/* Message */}
      <h2 className="text-lg font-medium text-base-content mb-2">
        Page not found
      </h2>

      <p className="text-sm text-gray-500 text-center max-w-sm mb-6">
        The page you’re looking for doesn’t exist or may have been removed.
      </p>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <Link
          to="/"
          className="px-5 py-2 rounded-lg bg-[#244d3f] text-white text-sm hover:opacity-90 transition"
        >
          Go Home
        </Link>

        <button
          onClick={() => window.history.back()}
          className="text-sm text-[#244d3f] underline underline-offset-4"
        >
          Go Back
        </button>
      </div>

      {/* Footer */}
      <p className="mt-10 text-xs text-gray-400">
        KeenKeeper © {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default ErrorPage;
/*
Minimal Setup:

1. Install router:
   npm install react-router-dom

2. Add route:
   <Route path="*" element={<ErrorPage />} />

Clean • Minimal • Elegant ✨
*/
