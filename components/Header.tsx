'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur">
      <nav className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold">Faizal.dev</Link>
        <ul className="flex items-center gap-5 text-sm">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className={`hover:opacity-100 ${pathname === l.href ? 'opacity-100' : 'opacity-70'}`}>{l.label}</Link>
            </li>
          ))}
          <li><a href="https://github.com/faizalbagwan786" target="_blank" className="opacity-70 hover:opacity-100">GitHub</a></li>
          <li><a href="https://linkedin.com/in/faizalbagwan" target="_blank" className="opacity-70 hover:opacity-100">LinkedIn</a></li>
        </ul>
      </nav>
    </header>
  );
}
