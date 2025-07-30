"use client";
import React, { useState } from "react";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";

export function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        aria-label="Open navigation menu"
        className="text-zinc-900 dark:text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? <XIcon size={28} /> : <MenuIcon size={28} />}
      </button>
      {open && (
        <nav className="fixed inset-0 bg-zinc-900/80 backdrop-blur z-50 flex flex-col items-center justify-center p-8 md:hidden animate-fade-in">
          <ul className="flex flex-col gap-8 text-2xl font-semibold text-white">
            <li>
              <a href="#features" onClick={() => setOpen(false)} className="hover:text-primary transition-colors">Features</a>
            </li>
            <li>
              <a href="#pricing" onClick={() => setOpen(false)} className="hover:text-primary transition-colors">Pricing</a>
            </li>
            <li>
              <a href="#testimonials" onClick={() => setOpen(false)} className="hover:text-primary transition-colors">Testimonials</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setOpen(false)} className="hover:text-primary transition-colors">Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
