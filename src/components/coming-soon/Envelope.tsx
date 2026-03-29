import type { ReactNode } from "react";

interface EnvelopeProps {
  children: ReactNode;
}

/**
 * Envelope — maroon letter envelope rendered entirely from CSS.
 *
 * Layers (bottom → top):
 *   1. Envelope body   — left/right/bottom fold triangles
 *   2. White card      — peeks above the flap (z:1)
 *   3. Open flap       — triangle pointing downward, overlaps card bottom (z:2)
 *
 * On load the envelope scales in and the card slides upward out of it.
 */
export function Envelope({ children }: EnvelopeProps) {
  return (
    <div
      className="w-full max-w-[295px] sm:max-w-[340px] mx-auto mt-6"
      style={{ animation: "envelope-scale-in 0.65s cubic-bezier(0.25,1,0.5,1) 0.1s both" }}
    >
      {/* White card — slides up out of the envelope on load */}
      <div
        className="relative"
        style={{
          zIndex: 1,
          animation: "card-emerge 1s cubic-bezier(0.34,1.45,0.64,1) 0.35s both",
        }}
      >
        {children}
      </div>

      {/* Open flap — downward-pointing triangle, overlaps bottom of card */}
      <div
        className="relative -mt-5"
        style={{
          zIndex: 2,
          height: "66px",
          background: "linear-gradient(170deg, #8b0223 0%, #6c011a 55%, #7a021d 100%)",
          clipPath: "polygon(0 0, 100% 0, 50% 100%)",
          filter: "drop-shadow(0 -2px 6px rgba(0,0,0,0.35))",
        }}
      />

      {/* Envelope body */}
      <div
        className="relative overflow-hidden rounded-b-2xl"
        style={{ height: "112px" }}
      >
        {/* Base panel */}
        <div className="absolute inset-0 bg-[#7a021d]" />

        {/* Left fold */}
        <div
          className="absolute inset-0 bg-[#520014]"
          style={{ clipPath: "polygon(0 0, 50% 54%, 0 100%)" }}
        />

        {/* Right fold */}
        <div
          className="absolute inset-0 bg-[#520014]"
          style={{ clipPath: "polygon(100% 0, 50% 54%, 100% 100%)" }}
        />

        {/* Bottom crease */}
        <div
          className="absolute inset-0 bg-[#460011]"
          style={{ clipPath: "polygon(29% 100%, 50% 54%, 71% 100%)" }}
        />
      </div>
    </div>
  );
}
