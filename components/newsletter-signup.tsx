"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    setError("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) {
      setError("Email is required.");
      return;
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("Invalid email address.");
      return;
    }
    // Store in localStorage
    const emails = JSON.parse(localStorage.getItem('SAASIFY_NEWSLETTER') || "[]");
    emails.push({email, timestamp: Date.now()});
    localStorage.setItem('SAASIFY_NEWSLETTER', JSON.stringify(emails));
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  }

  return (
    <form className="flex max-w-lg mx-auto gap-3 flex-col sm:flex-row mt-6" onSubmit={handleSubmit}>
      <Input
        type="email"
        name="newsletter-email"
        autoComplete="email"
        placeholder="Enter your email"
        className={`flex-1 rounded-lg p-3 bg-white/60 dark:bg-zinc-900/80 border-2 border-zinc-300 dark:border-zinc-700 focus:ring-primary/40 backdrop-blur ${error ? 'border-rose-500' : ''}`}
        value={email}
        onChange={handleChange}
        disabled={subscribed}
      />
      <Button type="submit" variant="default" className="rounded-lg px-8 py-3 font-semibold shadow-lg flex-shrink-0 tracking-wide disabled:opacity-70 disabled:cursor-not-allowed transition-transform hover:scale-[1.04]" disabled={subscribed}>
        {subscribed ? 'Subscribed!' : 'Subscribe'}
      </Button>
      {error && <div className="text-rose-600 mt-1 text-xs sm:absolute -bottom-6 left-0">{error}</div>}
    </form>
  )
}
