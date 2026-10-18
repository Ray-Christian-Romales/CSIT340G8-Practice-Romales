import { useState } from "react";
import NavLink from "./NavLink";

function Navbar() {
  const [dark, setDark] = useState(false);

  function handleToggleDark() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  }

  return (
    <>
      <nav className="sticky top-0 z-10 border-b border-stone-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-semibold">
            Juan dela Cruz
          </a>
          <div className="flex items-center gap-6 text-sm text-stone-600">
            <NavLink href="#about" label="About" />
            <NavLink href="#skills" label="Skills" />
            <NavLink href="#projects" label="Projects" />
            <NavLink href="#experience" label="Experience" />
            <NavLink href="#contact" label="Contact" />
            <button
              className="rounded-lg border border-stone-300 px-3 py-1 text-sm hover:bg-stone-50"
              onClick={handleToggleDark}
            >
              {dark ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
