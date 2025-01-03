import Link from "next/link";

export const WebsiteFooter = () => {
  return (
    <footer className="border-t">
      <div className="container max-w-screen-lg px-4 md:px-8 mx-auto py-8">
        <div className="flex justify-between">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} Indie.Pro
          </p>
          <span>
            <Link
              className="text-gray-500 transition-colors hover:text-gray-700"
              href="/brand"
            >
              Brand Assets
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};
