const navItems = [
  { href: "#home", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-800/70 bg-[#090d13]/72 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-bold tracking-[0.2em] uppercase text-slate-100">
          KTR
        </a>

        <div className="hidden gap-6 text-sm text-slate-400 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-slate-100">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
