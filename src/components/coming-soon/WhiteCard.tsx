import { ASSETS } from "./assets";

/**
 * WhiteCard — the white letter card that sits inside the envelope.
 *
 * Contains:
 *   - Four grey product-image placeholders
 *   - "COMING SOON" label
 *   - STYLESUPPLY wordmark
 *   - Instagram & LinkedIn icon links
 */
export function WhiteCard() {
  return (
    <div
      className="bg-white rounded-t-[16px]"
      style={{ paddingBottom: "18px" }}
    >
      {/* Four product-image placeholders */}
      <div className="flex gap-[7px] px-2 pt-[10px]">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex-1 bg-silver rounded-[5px]"
            style={{ height: "100px" }}
          />
        ))}
      </div>

      {/* COMING SOON label */}
      <p className="mt-[11px] text-center font-bold text-[6.1px] text-brand uppercase tracking-[0.1em]">
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
          className="flex items-center justify-center rounded-full bg-brand"
          style={{ width: "17px", height: "17px" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ASSETS.instagramIcon}
            alt=""
            style={{ width: "9.6px", height: "9.6px" }}
          />
        </a>
        <a
          href="https://linkedin.com/company/stylesupply"
          aria-label="StyleSupply on LinkedIn"
          className="flex items-center justify-center rounded-full bg-brand"
          style={{ width: "17px", height: "17px" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ASSETS.linkedinIcon}
            alt=""
            style={{ width: "9px", height: "9px" }}
          />
        </a>
      </div>
    </div>
  );
}
