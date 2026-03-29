import { ASSETS } from "./assets";

/**
 * EnvelopeCard — the central visual, built entirely from CSS.
 *
 * Structure (top → bottom):
 *   1. White card area — 4 grey product slots
 *   2. White card lower — COMING SOON · STYLESUPPLY logo · social icons
 *   3. Envelope body — dark-red diamond / fold-line shape
 */
export function EnvelopeCard() {
  return (
    <div className="w-full max-w-[295px] sm:max-w-[340px] mx-auto mt-6">

      {/* ── White card ──────────────────────────────────────────────── */}
      <div
        className="bg-white rounded-[16px]"
        style={{ paddingBottom: "18px" }}
      >
        {/* Four product-image placeholders */}
        <div className="flex gap-[7px] px-2 pt-[10px]">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex-1 bg-[#d9d9d9] rounded-[5px]"
              style={{ height: "100px" }}
            />
          ))}
        </div>

        {/* COMING SOON label */}
        <p className="mt-[11px] text-center font-bold text-[6.109px] text-[#7a021d] uppercase tracking-[0.1em]">
          Coming Soon
        </p>

        {/* STYLESUPPLY wordmark */}
        <div className="flex justify-center mt-[4px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ASSETS.logo}
            alt="StyleSupply"
            style={{ height: "22px", width: "176px", objectFit: "contain" }}
          />
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-[5px] mt-[8px]">
          <a
            href="https://instagram.com/stylesupply"
            aria-label="StyleSupply on Instagram"
            className="flex items-center justify-center rounded-full bg-[#7a021d]"
            style={{ width: "17.06px", height: "17.06px" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ASSETS.instagramIcon}
              alt=""
              style={{ width: "9.654px", height: "9.654px" }}
            />
          </a>
          <a
            href="https://linkedin.com/company/stylesupply"
            aria-label="StyleSupply on LinkedIn"
            className="flex items-center justify-center rounded-full bg-[#7a021d]"
            style={{ width: "17.06px", height: "17.06px" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ASSETS.linkedinIcon}
              alt=""
              style={{ width: "9.086px", height: "9.086px" }}
            />
          </a>
        </div>
      </div>

      {/* ── Envelope body — CSS diamond fold ────────────────────────── */}
      {/*
       * The envelope is rendered as three layered CSS shapes:
       *   • base:        #7a021d  (lighter maroon — the envelope panels)
       *   • top-centre:  #620a20  (darker — the V-fold shadow between panels)
       *   • subtle highlight gradient for depth
       *
       * Result: two converging diagonal "fold lines" from the top corners
       * meeting at a centre point, just like an open letter envelope.
       */}
      <div
        className="relative overflow-hidden rounded-b-[16px]"
        style={{ height: "145px" }}
      >
        {/* Panel base */}
        <div className="absolute inset-0 bg-[#7a021d]" />

        {/* Left panel fold — darker triangle, top-left → centre-fold → bottom-left */}
        <div
          className="absolute inset-0 bg-[#5e0018]"
          style={{ clipPath: "polygon(0 0, 50% 52%, 0 100%)" }}
        />

        {/* Right panel fold — mirror */}
        <div
          className="absolute inset-0 bg-[#5e0018]"
          style={{ clipPath: "polygon(100% 0, 50% 52%, 100% 100%)" }}
        />

        {/* Centre-top shadow — the V mouth of the envelope */}
        <div
          className="absolute inset-0 bg-[#450011]"
          style={{ clipPath: "polygon(0 0, 100% 0, 50% 52%)" }}
        />

        {/* Soft inner highlight for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 52%, rgba(255,255,255,0.04) 0%, transparent 100%)",
          }}
        />
      </div>
    </div>
  );
}
