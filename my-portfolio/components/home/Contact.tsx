"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import GradientText from "../shared/GradientText";
import MagneticWrapper from "../shared/MagneticWrapper";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ type: string; text: string } | null>(
    null
  );

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (res.ok) {
        setResult({ type: "success", text: "Message sent successfully!" });
        setForm({ name: "", email: "", message: "" });
      } else {
        setResult({ type: "error", text: data.error || "Failed to send message." });
      }
    } catch (err) {
      setResult({
        type: "error",
        text: "Something went wrong. Please try again."
      });
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto px-6 md:px-20">
      <h2 className="text-4xl font-bold mb-10 text-center">
        <GradientText>Contact Me</GradientText>
      </h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-2xl shadow-soft"
      >
        {/* Name */}
        <div className="mb-6">
          <label className="block text-white/70 mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-premium-purple outline-none transition-all"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-white/70 mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-premium-purple outline-none transition-all"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-white/70 mb-2">Message</label>
          <textarea
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-premium-purple outline-none transition-all resize-none"
          />
        </div>

        {/* Success / Error Message */}
        {result && (
          <p
            className={`mb-4 text-sm ${
              result.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {result.text}
          </p>
        )}

        {/* Submit Button */}
        <MagneticWrapper>
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-grad-gold rounded-xl font-semibold text-black shadow-glow hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </MagneticWrapper>
      </motion.form>
    </div>
  );
}
