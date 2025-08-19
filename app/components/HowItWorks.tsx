import ParallaxCanvas from "./ParallaxCanvas";

export default function HowItWorks() {
  return (
    <section id="how" className="relative max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold text-white">How it works</h2>
      <p className="text-gray-400 mt-2 max-w-2xl">A three-step flow that gets you onboarded, supported and progressing</p>

      <div className="mt-8">
        <ParallaxCanvas>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
            {[
              {
                title: "1 — Create account",
                body: "Sign up with email or social auth. Your data defaults to ephemeral mode until you opt in.",
              },
              {
                title: "2 — Chat or speak",
                body: "Start a text session. The assistant mirrors tone and suggests micro-tasks.",
              },
              {
                title: "3 — Cure from a breakup",
                body: "After a short period of time, you will feel the relief and emotional clarity you need to move on.",
              },
            ].map((s, i) => (
              <div key={i} className="p-6 rounded-2xl bg-transparent border border-white/10 backdrop-blur-sm">
                <div className="text-sm font-semibold text-white">{s.title}</div>
                <div className="mt-3 text-gray-300">{s.body}</div>
              </div>
            ))}
          </div>
        </ParallaxCanvas>
      </div>
    </section>
  );
}