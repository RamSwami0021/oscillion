const NotFoundPage = () => {

  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-black">404</p>
          <h1 className="mt-4 text-balance text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              Go back home
            </a>
            <a href="/contact" className="text-black font-semibold group-hover:translate-x-1 transition-transform duration-300">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
