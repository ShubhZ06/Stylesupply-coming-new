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
      className="group relative mx-auto mt-6 sm:mt-6 mt-10.5 cursor-pointer z-10"
      style={{
        width: "min(380px, 72vw)",
        animation: "envelope-scale-in 0.65s cubic-bezier(0.25,1,0.5,1) 0.1s both",
      }}
      onMouseEnter={() => setPeek(true)}
      onMouseLeave={() => setPeek(false)}
    >
      {/* Root sized to open envelope aspect: Mask group (2) */}
      <div className="relative w-full" style={{ paddingBottom: `${(390 / 319) * 100}%` }}>

        {/* ── Layer 0: Open envelope body (back) ── */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/image/Mask%20group%20(2).png"
          alt=""
          aria-hidden
          draggable={false}
          className="absolute inset-0 w-full h-full select-none pointer-events-none"
          style={{ zIndex: 0 }}
        />

        {/* ── Layer 1: White card (slides up on hover) ── */}
        <div
          className="absolute"
          style={{
            zIndex: 10,
            width: "95%",
            left: "2%",
            top: mobilePeek ? "2%" : peek ? "2%" : "10%",
            transition: "top 0.5s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        >
          {/* Card aspect ratio: ~302/316 */}
          <div className="relative w-full" style={{ paddingBottom: `${(302 / 316) * 100}%` }}>

            {/* White card base */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/image/Rectangle%2018940%20(1).png"
              alt=""
              aria-hidden
              draggable={false}
              className="absolute inset-0 w-full h-full object-fill select-none pointer-events-none"
            />

            {/* Photo strip */}
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
                src="/image/Frame%205303.png"
                alt="Fashion preview"
                draggable={false}
                className="w-full h-full object-fill select-none"
              />
            </div>

            {/* Coming Soon label */}
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

            {/* STYLESUPPLY logo */}
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

            {/* Social icons */}
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

        {/* ── Layer 2: Closed front flap — sits on top, covers bottom of card ── */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/image/Mask%20group%20(1).png"
          alt=""
          aria-hidden
          draggable={false}
          className="absolute select-none pointer-events-none"
          style={{
            zIndex: 20,
            width: "100%",
            left: "0%",
            bottom: "0",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
}
