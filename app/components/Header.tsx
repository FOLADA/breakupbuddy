export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700"></div>

      {/* Soft Floating Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-36 h-36 bg-pink-300/30 rounded-full blur-3xl top-[-40px] left-[10%] animate-float"></div>
        <div className="absolute w-24 h-24 bg-pink-400/20 rounded-full blur-2xl top-[50%] left-[30%] animate-drift"></div>
        <div className="absolute w-28 h-28 bg-pink-200/20 rounded-full blur-2xl bottom-[-40px] right-[15%] animate-float"></div>
        <div className="absolute w-20 h-20 bg-pink-100/30 rounded-full blur-2xl bottom-[10%] left-[60%] animate-drift"></div>
      </div>

      {/* Navbar Container */}
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between 
                      backdrop-blur-md bg-white/10 rounded-2xl shadow-lg border border-white/20">
        
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <img 
            src="/littleheart.png" 
            alt="BreakUpBuddy Heart" 
            className="h-8 w-8 drop-shadow-[0_3px_8px_rgba(0,0,0,0.35)]"
          />
          <h1 className="text-2xl font-extrabold tracking-tight 
                         bg-gradient-to-r from-pink-200 via-white to-pink-100 
                         bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
            BreakUpBuddy<span className="text-white">.ai</span>
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#features" 
             className="relative text-white/90 hover:text-pink-200 transition-colors 
                        after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                        after:bg-gradient-to-r from-pink-300 to-white after:transition-all hover:after:w-full">
            Your Gentle Companion
          </a>
          <a href="#how" 
             className="relative text-white/90 hover:text-pink-200 transition-colors 
                        after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                        after:bg-gradient-to-r from-pink-300 to-white after:transition-all hover:after:w-full">
            Healing with AI
          </a>
          <a href="#pricing" 
             className="relative text-white/90 hover:text-pink-200 transition-colors 
                        after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                        after:bg-gradient-to-r from-pink-300 to-white after:transition-all hover:after:w-full">
            Choose Your Journey
          </a>
          
          {/* CTA Button */}
          <button className="ml-6 px-6 py-2 rounded-full font-semibold 
                             bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 text-pink-900 
                             shadow-[0_4px_12px_rgba(0,0,0,0.3)] 
                             hover:shadow-[0_6px_18px_rgba(0,0,0,0.4)] 
                             hover:scale-105 transition-transform duration-300">
            Find Comfort
          </button>
        </nav>
      </div>
    </header>
  );
}
