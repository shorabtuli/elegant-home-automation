"use client";

import { FormEvent, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const projectDescription = String(formData.get("projectDescription") || "").trim();

    if (!name || !email || !projectDescription) {
      setError("Please complete all fields before submitting.");
      return;
    }

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, projectDescription })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Submission failed");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("Consultation form error:", err);

      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
      return;
    }

    try {
      window.gtag?.("event", "consultation_form_submit");
    } catch {
      // Analytics should never block a successful lead submission.
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-lg border border-ink/10 bg-white p-5 shadow-soft sm:p-8">
      <label className="grid gap-2 text-sm font-medium text-ink/70">
        Name
        <input className="field" name="name" autoComplete="name" placeholder="Your name" required />
      </label>
      <label className="grid gap-2 text-sm font-medium text-ink/70">
        Email
        <input className="field" type="email" name="email" autoComplete="email" placeholder="you@example.com" required />
      </label>
      <label className="grid gap-2 text-sm font-medium text-ink/70">
        Project Description
        <textarea
          className="field min-h-40 resize-y"
          name="projectDescription"
          placeholder="Tell us what you want to improve, what is frustrating today, and where the home is located."
          required
        />
      </label>

      {error ? <p className="text-sm font-medium text-red-700">{error}</p> : null}
      {status === "success" ? (
        <p className="rounded-lg border border-copper/25 bg-copper/10 p-4 text-sm font-medium text-ink">
          Thank you. We received your request and will be in touch soon.
        </p>
      ) : null}

      <button type="submit" disabled={status === "submitting"} className="button-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit">
        {status === "submitting" ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
