export default function Features() {
  const features = [
    {title: 'Empathetic Chatbot', desc: 'Conversational AI tuned for active listening and reflective prompts.'},
    {title: 'Voice Assistant', desc: 'Voice sessions with tone-aware feedback and breathing exercises.'},
    {title: 'Personalized Journeys', desc: 'Daily micro-rituals and contextual check-ins based on mood.'},
    {title: 'Privacy & Safety', desc: 'E2E encryption, ephemeral transcripts and opt-in research.'},
  ];

  return (
    <section id="features" className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold text-white">Key features</h2>
      <p className="text-gray-400 mt-2 max-w-2xl">An integrated product that combines empathetic conversation, voice therapy micro-sessions, behavior change pathways and privacy-first architecture.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 shadow-sm">
            <div className="w-12 h-12 rounded-md bg-gradient-to-br from-indigo-600 to-purple-500 flex items-center justify-center mb-4 shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3v18M3 12h18" stroke="white" strokeWidth="1.4" strokeLinecap="round"/></svg>
            </div>
            <div className="font-semibold text-white">{f.title}</div>
            <div className="mt-2 text-gray-300 text-sm">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}