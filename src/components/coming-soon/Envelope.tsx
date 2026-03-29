import type { ReactNode } from "react";

interface EnvelopeProps {
  children: ReactNode;
}

/**
 * Envelope — maroon letter envelope rendered entirely from CSS.
 *
 * Structure:
 *   - children (WhiteCard) peeks out from the top
 *   - Envelope body: three CSS clip-path triangles form a diamond V-fold,
 *     creating two converging diagonal "fold lines" meeting at a centre point
 *     — just like an open letter envelope.
 *
 * Layers (bottom → top):
 *   1. Base panel      #7a021d — lighter maroon
 *   2. Left fold       #5e0018 — darker triangle, left side
 *   3. Right fold      #5e0018 — darker triangle, right side (mirror)
 *   4. Centre shadow   #450011 — the V-mouth shadow at top
 *   5. Highlight       subtle radial gradient for depth
 */
export function Envelope({ children }: EnvelopeProps) {
  return (
    <div className="w-full max-w-[295px] sm:max-w-[340px] mx-auto mt-6">
      {/* White card peeks out from the top of the envelope */}
      {children}

      {/* Envelope body */}
      <div
        className="relative overflow-hidden rounded-b-[16px]"
        style={{ height: "120px" }}
      >
        {/* Base panel — lighter maroon, visible in top-center and bottom-center */}
        <div className="absolute inset-0 bg-[#7a021d]" />

        {/* Left panel — darker diamond triangle covering left side */}
        <div
          className="absolute inset-0 bg-[#560016]"
          style={{ clipPath: "polygon(0 0, 50% 50%, 0 100%)" }}
        />

        {/* Right panel — mirror of left */}
        <div
          className="absolute inset-0 bg-[#560016]"
          style={{ clipPath: "polygon(100% 0, 50% 50%, 100% 100%)" }}
        />

        {/* Bottom-center fold line — subtle darker crease */}
        <div
          className="absolute inset-0 bg-[#4a0012]"
          style={{ clipPath: "polygon(30% 100%, 50% 50%, 70% 100%)" }}
        />
      </div>
    </div>
  );
}
