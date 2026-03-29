"use client";

import { useState, useEffect } from "react";

/**
 * SVG viewBox dimensions:
 *   Mask group (4).svg       319 × 390  — back envelope
 *   Rectangle 18940 (1).svg  316 × 302  — white card
 *   Frame 5303.svg           273 × 106  — photo strip
 *   Coming Soon (1).svg       50 × 8    — label
 *   STYLESUPPLY (1).svg      254 × 50   — logo
 *   Mask group (5).svg       302 × 223  — front flap
 *
 * Card internal rect: x=-0.86, y=16.3, w=301.7, h=286.8  (rotated -3.27deg)
 * Positions below are % of card viewBox 316×302.
 */
export function Envelope() {
  const [peek, setPeek] = useState(false);
  const [mobilePeek, setMobilePeek] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.innerWidth < 640) setMobilePeek(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="group relative mx-auto mt-6 cursor-pointer z-10"
      style={{
        width: "min(380px, 92vw)",
        animation: "envelope-scale-in 0.65s cubic-bezier(0.25,1,0.5,1) 0.1s both",
      }}
      onMouseEnter={() => setPeek(true)}
      onMouseLeave={() => setPeek(false)}
    >
      {/* Root sized to back envelope 319×390 */}
      <div className="relative w-full" style={{ paddingBottom: `${(390 / 319) * 100}%` }}>

        {/* ── Layer 0: Back envelope ── */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/image/Mask%20group%20(4).svg"
          alt=""
          aria-hidden
          draggable={false}
          className="absolute inset-0 w-full h-full select-none pointer-events-none"
          style={{ zIndex: 0 }}
        />

        {/*
          ── Layer 1: White card ──
          Card: 316×302 → width = 316/319 = 99% of envelope
          Card height relative to envelope: 302/390 = 77.4%

          Default: top=18% → card bottom = 18%+77.4% = 95.4% (inside envelope)
          Peek:    top=2%  → card top at 2%, photos visible above flap (~43%)
        */}
        <div
          className="absolute"
          style={{
            zIndex: 10,
            width: "92%",
            left: "4%",
            top: mobilePeek ? "5%" : peek ? "2%" : "12%",
            transition: "top 0.5s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        >
          {/* Card aspect ratio: 302/316 = 95.6% */}
          <div className="relative w-full" style={{ paddingBottom: `${(302 / 316) * 100}%` }}>

            {/* White card base */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/image/Rectangle%2018940%20(1).svg"
              alt=""
              aria-hidden
              draggable={false}
              className="absolute inset-0 w-full h-full object-fill select-none pointer-events-none"
            />

            {/*
              Photo strip: 273×106 on card 316×302
              width  = 273/316 = 86.4%
              height = 106/302 = 35.1%
              left   = (316-273)/2/316 = 6.8%
              top    = 16/302 = 5.3% (internal SVG offset)
            */}
            <div
              className="absolute overflow-hidden"
              style={{
                width: "86.4%",
                left: "6.8%",
                top: "5.3%",
                height: "35.1%",
                borderRadius: "6px 6px 3px 3px",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/image/Frame%205303.svg"
                alt="Fashion preview"
                draggable={false}
                className="w-full h-full object-fill select-none"
              />
            </div>

            {/*
              Coming Soon: 50×8 on card 316×302
              top = 5.3% + 35.1% + 2% = 42.4%
              width = 50/316 = 15.8%, centered
            */}
            <div
              className="absolute flex justify-center w-full"
              style={{ top: "43%", left: 0 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/image/Coming%20Soon%20(1).svg"
                alt="Coming Soon"
                draggable={false}
                className="select-none"
                style={{ width: "20%", height: "auto" }}
              />
            </div>

            {/*
              STYLESUPPLY: 254×50 on card 316×302
              width = 254/316 = 80.4%, centered
              top ≈ 50%
            */}
            <div
              className="absolute flex justify-center w-full"
              style={{ top: "46%", left: 0 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/image/STYLESUPPLY%20(1).svg"
                alt="StyleSupply"
                draggable={false}
                className="select-none"
                style={{ width: "80.4%", height: "auto" }}
              />
            </div>

            {/* Social icons: top ≈ 72%, centered */}
            <div
              className="absolute flex justify-center items-center gap-2 w-full"
              style={{ top: "65%", left: 0, transform: "rotate(-3.27deg)" }}
            >
              <a
                href="https://www.instagram.com/stylesupply.io/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-transform hover:scale-110"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icon/Frame%203748.svg"
                  alt="Instagram"
                  draggable={false}
                  className="select-none"
                  style={{ width: "36px", height: "36px" }}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/style-supply-co/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-transform hover:scale-110"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icon/Frame%203747.svg"
                  alt="LinkedIn"
                  draggable={false}
                  className="select-none"
                  style={{ width: "36px", height: "36px" }}
                />
              </a>
            </div>
          </div>
        </div>

        {/* ── Layer 2: Front flap — anchored to bottom, full width ── */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/image/Mask%20group%20(5).svg"
          alt=""
          aria-hidden
          draggable={false}
          className="absolute select-none pointer-events-none"
          style={{
            zIndex: 20,
            width: "95%",
            left: "4.9%",
            bottom: "0",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
}
