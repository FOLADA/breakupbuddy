export default function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h3 className="text-2xl font-semibold">Start healing today — it's almost nothing!</h3>
        <p className="text-gray-400 mt-1">Cheap paywall for your well-being</p>
      </div>
      <div className="flex gap-4">
        <a href="#signup" className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-500 font-semibold">Get started</a>
        <a href="#pricing" className="px-6 py-3 rounded-lg border border-gray-700">See plans</a>
      </div>
    </section>
  );
}