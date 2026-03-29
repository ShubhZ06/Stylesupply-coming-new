"use client";

import { useState, useEffect } from "react";

/**
 * Envelope — layered envelope with hover-reveal card animation.
 *
 * Layers (bottom → top):
 *   1. Back flap     — /Mask group.svg     (envelope rear, z-0)
 *   2. White card    — /Group 1778.svg     (peeks from the V-opening, z-10)
 *   3. Front pocket  — /Mask group (1).svg (front folds, z-20)
 *
 * On page load the whole envelope scales in.
 * On hover the white card translates upward to peek out more.
 * On mobile, it auto-peeks after 1 second.
 */
export function Envelope() {
  const [peek, setPeek] = useState(false);

  useEffect(() => {
    // Auto-peek the card on mobile devices after 1 second
    const timer = setTimeout(() => {
      if (window.innerWidth < 640) {
        setPeek(true);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="group relative w-full max-w-[340px] sm:max-w-[380px] mx-auto -mt-7 cursor-pointer z-10"
      style={{
        animation: "envelope-scale-in 0.65s cubic-bezier(0.25,1,0.5,1) 0.1s both",
      }}
    >
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "298/378" }}>

        {/* ── Layer 1: Back flap (defines full envelope size) ─── */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Mask group.svg"
          alt=""
          aria-hidden
          draggable={false}
          className="absolute inset-0 w-full h-full select-none z-0"
        />

        {/* ── Layer 2: White card ────────────────────────────── */}
        {/*
          Positioned so the top of the card peeks out from the
          V-shaped opening of the front pocket.
          On hover it rises a bit more.
        */}
        <div
          className={`absolute left-1/2 top-[20%] z-10 w-[96%] -translate-x-1/2 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] sm:group-hover:-translate-y-[22%] ${peek ? '-translate-y-[22%]' : ''}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Group 1778.svg"
            alt="StyleSupply Coming Soon — Preview Card"
            draggable={false}
            className="w-full h-auto select-none rounded-[12px]"
          />

          {/* Social Icons Overlay */}
          <div className="absolute top-[72%] inset-x-0 flex items-center justify-center gap-1 sm:gap-2 z-20 pointer-events-auto">
            <a
              href="https://www.instagram.com/stylesupply.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 transition-transform hover:scale-110 flex items-center justify-center"
              aria-label="Instagram"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icon/Frame 3748.svg" alt="Instagram" className="w-[28px] h-[30px] sm:w-[32px] sm:h-[34px]" />
            </a>
            <a
              href="https://www.linkedin.com/company/style-supply-co/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 transition-transform hover:scale-110 flex items-center justify-center"
              aria-label="LinkedIn"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icon/Frame 3747.svg" alt="LinkedIn" className="w-[28px] h-[30px] sm:w-[32px] sm:h-[34px]" />
            </a>
          </div>
        </div>

        {/* ── Layer 3: Front pocket (covers bottom of the card) ── */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Mask group (1).svg"
          alt=""
          aria-hidden
          draggable={false}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-[108%] h-auto select-none pointer-events-none"
        />
      </div>
    </div>
  );
}
