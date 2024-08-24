import Image from "next/image";

export default function About() {
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
      <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 p-8 flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-3xl">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            About the Alumni Management System
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to the UCLM Alumni Management System. This platform is
            designed to help alumni stay connected with their alma mater and
            fellow graduates. It offers a variety of features aimed at fostering
            communication, organizing events, tracking the career progress of
            graduates, and supporting the university’s initiatives.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700">
            Our mission is to strengthen the bond between the university and its
            alumni by providing a platform that supports ongoing engagement,
            collaboration, and mutual support. We believe in the power of
            community and aim to help our graduates thrive both professionally
            and personally.
          </p>
        </div>
      </div>
    </main>
  );
}
