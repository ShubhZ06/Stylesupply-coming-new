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
    <main className="relative min-h-dvh w-full flex flex-col items-center overflow-hidden pb-[env(safe-area-inset-bottom)]">
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
        src="/image/Coming soon-2 1 (2).png"
        alt=""
        aria-hidden
        fill
        priority
        quality={80}
        className="fixed object-cover pointer-events-none select-none object-center block sm:hidden"
      />

      <div className="relative z-10 flex items-center justify-center w-full min-h-dvh py-[3vh]">
        <div className="flex flex-col items-center w-[90%] max-w-[480px]">
          <h1
            className="w-full text-center text-[clamp(32px,4.5vw,46px)] font-medium leading-[1.18] text-white tracking-[-0.04em] relative z-[5] mb-[-3.2rem] sm:mb-[clamp(-3.2rem,-4vh,-1.5rem)] sm:translate-y-[clamp(-1.5rem,-2vh,-0.25rem)]"
            style={{ animation: "stagger-up 0.7s ease-out 0s both" }}
          >
            Join the waitlist to<br />be first in line.
          </h1>

          <div className="relative w-full" style={{ zIndex: 10 }}>
            {children}
          </div>

          <div
            className="flex flex-col items-center w-full mt-[clamp(30px,5vh,55px)]"
            style={{ animation: "stagger-up 0.7s ease-out 0.65s both" }}
          >
            <p className="font-semibold text-white text-[clamp(24px,3.5vw,32px)] tracking-[-0.04em] whitespace-nowrap leading-[1.2]">
              14th April
            </p>

            <div className="flex flex-col items-center gap-[clamp(14px,2.5vh,20px)] w-full mt-[clamp(18px,3vh,30px)]" style={{ animation: "stagger-up 0.7s ease-out 0.75s both" }}>
              {stage === "button" && (
                <button
                  type="button"
                  onClick={() => setStage("email")}
                  className="w-[180px] rounded-full bg-white py-[15px] text-[15px] font-bold tracking-[-0.06em] text-brand transition-all duration-150 hover:opacity-90 active:scale-x-95"
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
                  <p className="text-center text-[17px] font-semibold tracking-[-0.03em] text-[#FFFFFF]">
                    Welcome to StyleSupply!
                  </p>
                </div>
              )}

              <p className="font-medium text-white text-[14px] text-center leading-[1.1] tracking-[0.84px]">
                Your First Month, On Us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
