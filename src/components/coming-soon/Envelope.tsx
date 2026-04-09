"use client";

import { useState, useEffect } from "react";

/**
 * Layer order (bottom → top):
 *   Layer 0: Mask group (2).png  — open envelope body (back)
 *   Layer 1: Rectangle 18940 (1).png + card contents — white card that peeks up
 *   Layer 2: Mask group (1).png  — closed front flap overlaying bottom of card
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
      className="group relative mx-auto mt-14 sm:mt-[clamp(0.5rem,1.5vh,1.5rem)] cursor-pointer z-10 overflow-visible"
      style={{
        width: "min(380px, 72vw, 45vh)",
        animation: "envelope-scale-in 0.65s cubic-bezier(0.25,1,0.5,1) 0.1s both",
      }}
      onMouseEnter={() => setPeek(true)}
      onMouseLeave={() => setPeek(false)}
    >
      {/* Container sized to Mask 2 (back envelope) aspect: 391×436 */}
      <div className="relative w-full overflow-visible" style={{ paddingBottom: `${(436 / 391) * 100}%` }}>

        {/* ── Layer 0: Open envelope body (back) ── */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/image/Mask%20group%20(2).png?v=2"
          alt=""
          aria-hidden
          draggable={false}
          className="absolute select-none pointer-events-none"
          style={{ zIndex: 0, top: "10%", left: "42%", transform: "translateX(-50%) scale(1.35)" }}
        />

        {/* ── Layer 1: White card (slides up on hover) ── */}
        <div
          className="absolute"
          style={{
            zIndex: 10,
            width: "110%",
            left: "-1%",
            top: mobilePeek ? "-2%" : peek ? "-3%" : "5%",
            transition: "top 0.5s cubic-bezier(0.34,1.56,0.64,1)",
            animation: "card-emerge 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.4s both",
          }}
        >
          <div className="relative w-full" style={{ paddingBottom: `${(302 / 316) * 100}%` }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/image/Group%201810.png"
              alt="StyleSupply Coming Soon"
              draggable={false}
              className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
              style={{ transform: "scale(1.05)" }}
            />
            <div
              className="absolute flex justify-center items-center gap-2 w-full top-[65%] sm:top-[62%]"
              style={{ left: 0, transform: "rotate(-3.27deg)" }}
            >
              <a href="https://www.instagram.com/stylesupply.io/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-transform hover:scale-110">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icon/Instagram_Redbg.svg" alt="Instagram" draggable={false} className="select-none" style={{ width: "36px", height: "36px" }} />
              </a>
              <a href="https://www.linkedin.com/company/style-supply-co/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-transform hover:scale-110">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icon/Frame%203747.svg" alt="LinkedIn" draggable={false} className="select-none" style={{ width: "36px", height: "36px" }} />
              </a>
            </div>
          </div>
        </div>

        {/* ── Layer 2: Closed front flap ── */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/image/Mask%20group%20(1).png"
          alt=""
          aria-hidden
          draggable={false}
          className="absolute select-none pointer-events-none"
          style={{
            zIndex: 20,
            width: "160%",
            left: "5%",
            bottom: "-5%",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
}
