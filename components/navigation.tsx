import React from "react";

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 w-full z-30 backdrop-blur-sm bg-white/80 dark:bg-zinc-900/80 shadow border-b border-zinc-200 dark:border-zinc-800 transition-all duration-300">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 lg:px-10">
        <a href="#" className="font-semibold text-2xl tracking-tight text-zinc-900 dark:text-white">
          SaaSify
        </a>
        <ul className="hidden md:flex gap-8 text-base font-medium">
          <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
          <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
          <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
        </ul>
        <div className="md:hidden">
          {/* Mobile menu toggle will be connected by HamburgerMenu */}
        </div>
      </nav>
    </header>
  );
}
