export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 py-10 text-gray-400">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm">© {new Date().getFullYear()} BreakupBuddy.ai — All rights reserved by <a href="https://www.linkedin.com/in/crusadersf/">Saba Foladashvili</a>.</div>
      </div>
    </footer>
  );
}