import React from "react";

const PRICING_OPTIONS = [
  {
    name: 'Free',
    price: 0,
    features: [
      'Single user',
      'Basic analytics',
      'Email support',
      'Community access'
    ],
    cta: 'Get Started',
    highlight: false
  },
  {
    name: 'Basic',
    price: 12,
    features: [
      'All Free features',
      'Team collaboration',
      'Integrations',
      'Standard support'
    ],
    cta: 'Start Basic',
    highlight: false
  },
  {
    name: 'Pro',
    price: 29,
    features: [
      'All Basic features',
      'Advanced analytics',
      'API access',
      'Priority support'
    ],
    cta: 'Go Pro',
    highlight: true
  },
  {
    name: 'Enterprise',
    price: 99,
    features: [
      'Unlimited users',
      'Dedicated manager',
      'Custom integrations',
      '24/7 support'
    ],
    cta: 'Contact Sales',
    highlight: false
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-28 px-6 lg:px-10 bg-gradient-to-tr from-sky-50 via-white to-zinc-100 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-white">Pricing</h2>
        <p className="mb-10 md:mb-16 text-lg text-zinc-600 dark:text-zinc-300 mx-auto max-w-2xl">
          Simple, transparent pricing. Upgrade, downgrade, or cancel anytime.
        </p>
        <div className="flex flex-col md:flex-row gap-8 md:gap-5 justify-center items-stretch">
          {PRICING_OPTIONS.map((tier, i) => (
            <div
              key={tier.name}
              className={`relative flex-1 max-w-sm mx-auto rounded-3xl shadow-xl border ${tier.highlight ? 'border-primary scale-[1.03] bg-white/70 dark:bg-zinc-950/70' : 'border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/80'} p-8 pb-10 flex flex-col transition-transform duration-300 hover:scale-105 hover:border-primary/70 backdrop-blur-md`}
            >
              <span className={`text-base font-medium mb-2 ${tier.highlight ? 'text-primary' : 'text-zinc-400 dark:text-zinc-500'}`}>{tier.name}</span>
              <div className="flex items-baseline justify-center mb-4">
                <span className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white" aria-label="Price">${tier.price}</span>
                {tier.name !== 'Free' && <span className="ml-1 text-zinc-500 dark:text-zinc-400 text-lg">/mo</span>}
              </div>
              <ul className="mb-8 space-y-2 text-zinc-700 dark:text-zinc-200 text-left">
                {tier.features.map((f) => (
                  <li key={f} className="before:content-['✔'] before:text-primary before:mr-2">
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`w-full block px-0 py-3 text-base font-semibold rounded-xl text-center border shadow-md focus:outline-none focus:ring-4 ${tier.highlight ? 'bg-gradient-to-tr from-primary to-sky-500 text-white border-primary hover:scale-[1.04]' : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700 text-primary hover:bg-zinc-50 dark:hover:bg-zinc-900/90'} transition-all`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden>
        <div className="w-1/2 h-96 absolute -left-24 top-8 bg-gradient-to-tr from-sky-300/60 to-primary/30 blur-3xl rounded-full" />
        <div className="w-1/2 h-72 absolute right-0 bottom-8 bg-gradient-to-br from-primary/20 to-sky-200/20 blur-3xl rounded-[38%] rotate-12" />
      </div>
    </section>
  );
}
