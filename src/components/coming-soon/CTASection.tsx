"use client";

import { useState } from "react";

type Stage = "button" | "email" | "success";

export function CTASection() {
  const [stage, setStage] = useState<Stage>("button");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    // TODO: replace with your waitlist API
    await new Promise((r) => setTimeout(r, 800));
    setStage("success");
    setLoading(false);
  };

  return (
    <div className="mt-[45px] flex flex-col items-center gap-[19.191px] w-full pb-14">
      {/* Stage 1 — Join Now button */}
      {stage === "button" && (
        <button
          type="button"
          onClick={() => setStage("email")}
          className="bg-white rounded-full font-bold text-[15.353px] text-[#7a021d] tracking-[-0.06em] hover:opacity-90 active:scale-95 transition-all duration-150 border border-white"
          style={{ width: "191.907px", paddingTop: "16px", paddingBottom: "16px" }}
        >
          Join Now
        </button>
      )}

      {/* Stage 2 — Email input */}
      {stage === "email" && (
        <form
          onSubmit={handleSubmit}
          className="flex items-center bg-white rounded-full pl-5 pr-[5px] py-[5px] gap-2"
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
            className="flex-1 min-w-0 text-[13px] text-[#620a20] placeholder:text-[#620a20]/40 font-medium bg-transparent outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            aria-label="Submit email"
            className="flex items-center justify-center shrink-0 bg-[#7a021d] rounded-full hover:opacity-80 active:scale-90 transition-all duration-150 disabled:opacity-50"
            style={{ width: "38px", height: "38px" }}
          >
            {loading ? (
              <span
                className="block rounded-full border-2 border-white border-t-transparent"
                style={{
                  width: "14px",
                  height: "14px",
                  animation: "spin 0.7s linear infinite",
                }}
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
          Welcome to StyleSupply! 🎉
        </p>
      )}

      <p className="font-medium text-white text-[13.433px] text-center leading-[1.1]">
        Your First Month, On Us.
      </p>
    </div>
  );
}
