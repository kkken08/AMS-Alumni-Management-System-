import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex justify-end w-full z-10 max-w-5xl">
        <div className="flex space-x-8">
          <a
            href="/"
            className="text-lg font-semibold hover:text-gray-600 text-white"
          >
            Home
          </a>
          <a
            href="/forum"
            className="text-lg font-semibold hover:text-gray-600 text-white"
          >
            Forum
          </a>
          <a
            href="/about"
            className="text-lg font-semibold hover:text-gray-600 text-white"
          >
            About
          </a>
          <a
            href="/login"
            className="text-lg font-semibold hover:text-gray-600 text-white"
          >
            Login
          </a>
        </div>
      </div>

      <div className="mt-16 max-w-5xl mx-auto">
        {/* News Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center text-white">News</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Example News Item */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">News Title 1</h3>
              <p className="text-gray-700">Brief description of the news item. This could be an update or a recent announcement relevant to alumni.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">News Title 2</h3>
              <p className="text-gray-700">Brief description of the news item. Provide a summary of key details or links to full articles.</p>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-center text-white">Events</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Example Event Item */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Event Title 1</h3>
              <p className="text-gray-700">Brief description of the event. Include details like date, time, and how to participate.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Event Title 2</h3>
              <p className="text-gray-700">Brief description of the event. Highlight key information and encourage alumni to get involved.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
