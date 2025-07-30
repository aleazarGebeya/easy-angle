"use client";
import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Changes:
// - The 'errors' state now allows string | undefined, which resolves type error for handleChange.
// - Logic updated so that errors are deleted when cleared for cleanliness.

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({});
  const [sent, setSent] = useState(false);

  function validate(values: typeof form) {
    const errs: { [key: string]: string } = {};
    if (!values.name.trim()) errs.name = "Name is required.";
    if (!values.email.trim()) errs.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) errs.email = "Invalid email address.";
    if (!values.message.trim()) errs.message = "Message is required.";
    return errs;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors(prev => {
      // Remove error key if set to undefined (clean up object)
      const newErrors = { ...prev };
      delete newErrors[e.target.name];
      return newErrors;
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Store in localStorage
    const msgs = JSON.parse(localStorage.getItem('SAASIFY_CONTACT_MSGS') || "[]");
    msgs.push({ ...form, timestamp: Date.now() });
    localStorage.setItem('SAASIFY_CONTACT_MSGS', JSON.stringify(msgs));
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setErrors({});
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <form className="w-full max-w-xl mx-auto flex flex-col gap-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block mb-1 font-medium text-zinc-900 dark:text-zinc-200">Name</label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          className={`bg-white/60 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-700 focus:ring-primary/50 backdrop-blur rounded-lg ${errors.name ? 'border-rose-500' : ''}`}
          disabled={sent}
        />
        {errors.name && <span className="text-rose-600 text-xs mt-1">{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="email" className="block mb-1 font-medium text-zinc-900 dark:text-zinc-200">Email</label>
        <Input
          id="email"
          name="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          className={`bg-white/60 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-700 focus:ring-primary/50 backdrop-blur rounded-lg ${errors.email ? 'border-rose-500' : ''}`}
          disabled={sent}
        />
        {errors.email && <span className="text-rose-600 text-xs mt-1">{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="message" className="block mb-1 font-medium text-zinc-900 dark:text-zinc-200">Message</label>
        <textarea
          id="message"
          name="message"
          autoComplete="off"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={`w-full bg-white/60 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-700 focus:ring-primary/50 outline-none p-3 backdrop-blur rounded-lg min-h-[100px] ${errors.message ? 'border-rose-500' : ''}`}
          disabled={sent}
        />
        {errors.message && <span className="text-rose-600 text-xs mt-1">{errors.message}</span>}
      </div>
      <Button type="submit" variant="default" className="w-full py-3 rounded-lg shadow-lg font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transition-transform hover:scale-[1.02] focus:ring-primary/40" disabled={sent}>
        {sent ? 'Sent!' : 'Send Message'}
      </Button>
    </form>
  );
}
