"use client";

import { useState, type ReactNode } from "react";
import dynamic from "next/dynamic";

const Silk = dynamic(() => import("./Silk"), { ssr: false });

interface BackgroundProps {
  children: ReactNode;
}

type Stage = "button" | "email" | "success";

/**
 * Background — full-page dark maroon background with animated Silk shader overlay.
 *
 * Renders:
 *   - Silk WebGL shader background
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
      {/* Animated Silk shader background */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <Silk
          speed={5}
          scale={0.7}
          color="#b11b2a"
          noiseIntensity={1}
          rotation={0}
        />
      </div>

      {/* Centered content column */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-97.5 md:max-w-120 px-5">

        {/* Heading */}
        <h1
          className="mt-17.5 w-full text-center text-[40px] font-medium leading-[1.22] text-white sm:w-105.5 sm:text-[46px]"
          style={{ animation: "stagger-up 0.7s ease-out 0s both" }}
        >
          Join the waitlist to be first in line.
        </h1>

        {/* Envelope + WhiteCard slot */}
        {children}

        {/* Launch date */}
        <p
          className="mt-3 font-semibold text-silver text-[21.4px] tracking-[-0.04em] whitespace-nowrap"
          style={{ animation: "stagger-up 0.7s ease-out 0.65s both" }}
        >
          14th April
        </p>

        {/* CTA area */}
        <div
          className="mt-3 flex flex-col items-center gap-[19px] w-full pb-14"
          style={{ animation: "stagger-up 0.7s ease-out 0.75s both" }}
        >

          {/* Stage 1 — Join Now button */}
          {stage === "button" && (
            <button
              type="button"
              onClick={() => setStage("email")}
              className="w-[192px] rounded-full bg-white py-4 text-[17.4px] font-bold tracking-[-0.06em] text-brand transition-all duration-150 hover:opacity-90 active:scale-95"
            >
              Join Now
            </button>
          )}

          {/* Stage 2 — Email input */}
          {stage === "email" && (
            <form
              onSubmit={handleSubmit}
              className="flex w-[260px] items-center gap-2 rounded-full bg-white py-1.5 pl-5 pr-1.5"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email ID"
                required
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                className="flex-1 min-w-0 text-[15px] text-brand-dark placeholder:text-brand-dark/40 font-medium bg-transparent outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                aria-label="Submit email"
                className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-brand transition-all duration-150 hover:opacity-80 disabled:opacity-50 active:scale-90"
              >
                {loading ? (
                  <span
                    className="block h-[14px] w-[14px] animate-spin rounded-full border-2 border-white border-t-transparent"
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
            <div className="flex w-[260px] items-center justify-center rounded-full bg-[#25080A] py-3.5">
              <p className="text-center text-[19px] font-semibold tracking-[-0.03em] text-[#FFFFFF]">
                Welcome to StyleSupply!
              </p>
            </div>
          )}

          <p className="font-medium text-white text-[15.4px] text-center leading-[1.1]">
            Your First Month, On Us.
          </p>
        </div>
      </div>
    </main>
  );
}
