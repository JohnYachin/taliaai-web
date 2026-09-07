'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '/' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-[76px]">
        <Link href="/" className="font-bold text-xl text-gray-900 flex items-center gap-2">
          🌿 <span>Talia AI</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <a href="https://web.tribute.tg/s/Osi" target="_blank" rel="nofollow noreferrer"
          className="hidden md:inline-flex bg-black text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors">
          Start Free Trial
        </a>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-sm font-medium text-gray-700 py-2 border-b border-gray-50">
              {l.label}
            </Link>
          ))}
          <a href="https://web.tribute.tg/s/Osi" target="_blank" rel="nofollow noreferrer"
            className="bg-black text-white px-5 py-3 rounded-lg text-sm font-semibold text-center mt-2">
            Start Free Trial
          </a>
        </div>
      )}
    </header>
  );
}
