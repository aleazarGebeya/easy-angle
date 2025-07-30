import React from "react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-zinc-100 to-white dark:from-zinc-900 dark:to-zinc-950 pt-16 pb-8 px-6 lg:px-10 border-t border-zinc-200 dark:border-zinc-800 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center md:items-start gap-8">
        <div className="mb-4 md:mb-0">
          <span className="font-bold text-2xl tracking-tight text-primary mb-2 block">SaaSify</span>
          <span className="text-zinc-600 dark:text-zinc-300 text-sm">Transforming productivity for modern businesses.</span>
        </div>
        <div className="flex gap-12">
          <div>
            <p className="font-semibold mb-2">Company</p>
            <ul className="space-y-1 text-zinc-700 dark:text-zinc-200 text-sm">
              <li>
                <a href="#about" className="hover:underline">About Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Legal</p>
            <ul className="space-y-1 text-zinc-700 dark:text-zinc-200 text-sm">
              <li>
                <a href="#privacy" className="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms" className="hover:underline">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Follow Us</p>
            <ul className="flex gap-3">
              <li>
                <a href="https://twitter.com/" target="_blank" rel="noopener" aria-label="Twitter" className="hover:text-primary transition-colors">
                  <svg fill="currentColor" viewBox="0 0 24 24" width="22" height="22"><path d="M24 4.557a9.885 9.885 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195-.897-.957-2.177-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.729-.666 1.577-.666 2.476 0 1.708.87 3.216 2.188 4.099A4.904 4.904 0 01.96 8.293v.062c0 2.385 1.693 4.374 4.168 4.827-.413.112-.849.172-1.296.172-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.417C3.163 18.184 0 14.753 0 10.634c0-.246.006-.488.018-.73C1.67 8.701 3.403 7.71 5.339 7.29c.266-.049.542-.076.826-.079-1.21-.81-2-2.207-2-3.816 0-.833.224-1.613.617-2.282C7.106 3.819 9.905 5.515 13.015 5.515c.313 0 .619-.019.925-.054C13.425 4.897 13 4.217 13 3.427c0-.418.11-.811.303-1.147z"></path></svg>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-primary transition-colors">
                  <svg fill="currentColor" viewBox="0 0 24 24" width="22" height="22"><path d="M4.98 3.5C3.36 3.5 2.03 4.842 2.03 6.443 2.03 8.04 3.36 9.38 4.98 9.38c1.63 0 2.96-1.34 2.96-2.937C7.94 4.842 6.61 3.5 4.98 3.5zm.02 4.533c-1.07 0-1.94-.866-1.94-1.936 0-1.07.87-1.936 1.94-1.936 1.08 0 1.95.866 1.95 1.936 0 1.07-.87 1.936-1.95 1.936zm-.01 2.467a.7.7 0 0 1-.7-.7V7.333c0-.385.315-.7.7-.7h.028c.388 0 .702.315.702.7v2.467c0 .385-.314.7-.7.7zm2.745 0a.7.7 0 0 1-.698-.7V7.333c0-.385.314-.7.698-.7h.028c.387 0 .7.315.7.7v2.467c0 .385-.313.7-.7.7zM21.5 4.963c-.19 0-.346.156-.346.347 0 .192.156.347.346.347s.347-.155.347-.347c0-.191-.157-.347-.347-.347z"/></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-zinc-400 dark:text-zinc-600">
        &copy; {new Date().getFullYear()} SaaSify. All rights reserved.
      </div>
    </footer>
  );
}
