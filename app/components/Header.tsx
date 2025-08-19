export default function Header() {
  return (
    <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      {/* Logo + nav */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-md">
          <span className="text-white font-bold">BB</span>
        </div>
        <div className="text-sm font-semibold tracking-tight">BreakupBuddy.ai</div>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm opacity-90">
        <a href="#features" className="hover:underline">Features</a>
        <a href="#how" className="hover:underline">How it works</a>
        <a href="#pricing" className="hover:underline">Pricing</a>
        <button className="ml-4 px-4 py-2 rounded-lg border border-gray-700 text-sm">Sign in</button>
      </nav>
    </header>
  );
}
