export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Breakups hurt. We help you get stronger — faster.
        </h1>
        <p className="mt-4 text-gray-300 text-lg">
          AI-first companion for emotional resilience...
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#signup" className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-semibold">Get started</a>
          <a href="#how" className="px-6 py-3 rounded-xl border border-gray-700 text-gray-200">See how it works</a>
        </div>
      </div>
      {/* Right column: your 3D card component */}
    </section>
  );
}
