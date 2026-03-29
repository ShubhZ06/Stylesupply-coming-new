import { ASSETS } from "./assets";

export function BackgroundTexture() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={ASSETS.bgTexture}
      alt=""
      aria-hidden
      className="absolute pointer-events-none select-none object-cover"
      style={{
        width: "160vw",
        height: "160vh",
        top: "-30vh",
        left: "-30vw",
        mixBlendMode: "color-burn",
      }}
    />
  );
}
