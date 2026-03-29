"use client";

import { useState, type ReactNode } from "react";
import { ASSETS } from "./assets";

interface BackgroundProps {
  children: ReactNode;
}

type Stage = "button" | "email" | "success";

/**
 * Background — full-page dark maroon background with fabric texture overlay.
 *
 * Renders:
 *   - Fabric texture image (mix-blend-mode: color-burn)
 *   - "Join the waitlist to be first in line." heading
 *   - children slot (envelope + white card)
 *   - "14th April" launch date
 *   - "Join Now" CTA (expands to email input, then success state)
 *   - "Your First Month, On Us." subtext
 */
export function Background({ children }: BackgroundProps) {
  const [stage, setStage] = useState<Stage>("button");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    // TODO: replace with your waitlist API
    await new Promise((r) => setTimeout(r, 800));
    setStage("success");
    setLoading(false);
  };

  return (
    <main className="relative min-h-dvh bg-brand-dark overflow-hidden flex flex-col items-center">
      {/* Fabric texture overlay */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={ASSETS.bgTexture}
        alt=""
        aria-hidden
        className="absolute pointer-events-none select-none object-cover mix-blend-color-burn"
        style={{
          width: "160vw",
          height: "160vh",
          top: "-30vh",
          left: "-30vw",
        }}
      />

      {/* Centered content column */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-97.5 md:max-w-120 px-5">

        {/* Heading */}
        <h1
          className="mt-17.5 text-white font-medium text-[38px] sm:text-[44px] text-center w-full sm:w-105.5"
          style={{ lineHeight: "1.22" }}
        >
          Join the waitlist to be first<sup className="text-[0.6em] align-super">+</sup> in line.
        </h1>

        {/* Envelope + WhiteCard slot */}
        {children}

        {/* Launch date */}
        <p className="mt-8 font-semibold text-silver text-[19.4px] tracking-[-0.04em] whitespace-nowrap">
          14th April
        </p>

        {/* CTA area */}
        <div className="mt-[19px] flex flex-col items-center gap-[19px] w-full pb-14">

          {/* Stage 1 — Join Now button */}
          {stage === "button" && (
            <button
              type="button"
              onClick={() => setStage("email")}
              className="bg-white rounded-full font-bold text-[15.4px] text-brand tracking-[-0.06em] hover:opacity-90 active:scale-95 transition-all duration-150"
              style={{ width: "192px", paddingTop: "16px", paddingBottom: "16px" }}
            >
              Join Now
            </button>
          )}

          {/* Stage 2 — Email input */}
          {stage === "email" && (
            <form
              onSubmit={handleSubmit}
              className="flex items-center bg-white rounded-full pl-5 pr-1.5 py-1.5 gap-2"
              style={{ width: "260px" }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email ID"
                required
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                className="flex-1 min-w-0 text-[13px] text-brand-dark placeholder:text-brand-dark/40 font-medium bg-transparent outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                aria-label="Submit email"
                className="flex items-center justify-center shrink-0 bg-brand rounded-full hover:opacity-80 active:scale-90 transition-all duration-150 disabled:opacity-50"
                style={{ width: "38px", height: "38px" }}
              >
                {loading ? (
                  <span
                    className="block rounded-full border-2 border-white border-t-transparent animate-spin"
                    style={{ width: "14px", height: "14px" }}
                  />
                ) : (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path
                      d="M2 7h10M8 3l4 4-4 4"
                      stroke="white"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </form>
          )}

          {/* Stage 3 — Success */}
          {stage === "success" && (
            <p className="font-semibold text-white text-[17px] tracking-[-0.03em] text-center px-4">
              Welcome to StyleSupply!
            </p>
          )}

          <p className="font-medium text-white text-[13.4px] text-center leading-[1.1]">
            Your First Month, On Us.
          </p>
        </div>
      </div>
    </main>
  );
}
