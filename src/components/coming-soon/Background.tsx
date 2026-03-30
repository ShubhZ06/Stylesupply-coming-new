"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";

interface BackgroundProps {
  children: ReactNode;
}

type Stage = "button" | "email" | "success";

export function Background({ children }: BackgroundProps) {
  const [stage, setStage] = useState<Stage>("button");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed");
      setStage("success");
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-dvh flex flex-col items-center">
      {/* Desktop background */}
      <Image
        src="/image/bg2 1.png"
        alt=""
        aria-hidden
        fill
        priority
        quality={80}
        className="fixed object-cover pointer-events-none select-none sm:object-center object-top hidden sm:block"
      />
      {/* Mobile background */}
      <Image
        src="/image/background-mobile.png"
        alt=""
        aria-hidden
        fill
        priority
        quality={80}
        className="fixed object-cover object-center pointer-events-none select-none sm:hidden"
      />

      <div className="relative z-10 flex flex-col items-center w-full max-w-97.5 md:max-w-120 px-5">
        <h1
          className="mt-28 mb-[-4.5rem] w-full text-center text-[34px] font-medium leading-[1.22] text-white sm:mt-17.5 sm:mb-0 sm:w-105.5 sm:text-[46px] relative"
          style={{ animation: "stagger-up 0.7s ease-out 0s both", zIndex: 0 }}
        >
          Join the waitlist to<br />be first in line.
        </h1>

        <div className="relative w-full sm:mt-[-3.5rem] mt-2" style={{ zIndex: 10 }}>
          {children}
        </div>

        <p
          className="mt-3 font-semibold text-silver text-[21.4px] tracking-[-0.04em] whitespace-nowrap"
          style={{ animation: "stagger-up 0.7s ease-out 0.65s both" }}
        >
          14th April
        </p>

        <div
          className="mt-3 flex flex-col items-center gap-[19px] w-full pb-14"
          style={{ animation: "stagger-up 0.7s ease-out 0.75s both" }}
        >
          {stage === "button" && (
            <button
              type="button"
              onClick={() => setStage("email")}
              className="w-[192px] rounded-full bg-white py-4 text-[17.4px] font-bold tracking-[-0.06em] text-brand transition-all duration-150 hover:opacity-90 active:scale-x-95"
            >
              Join Now
            </button>
          )}

          {stage === "email" && (
            <form
              onSubmit={handleSubmit}
              className="flex w-[260px] items-center gap-2 rounded-full bg-white py-[9px] pl-5 pr-[9px]"
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
                  <span className="block h-[14px] w-[14px] animate-spin rounded-full border-2 border-white border-t-transparent" />
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
