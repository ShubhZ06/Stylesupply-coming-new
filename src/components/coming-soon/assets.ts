/**
 * Figma CDN asset URLs — expire in 7 days from 2026-03-29.
 * To make permanent: download each image to /public/images/ and update the paths below.
 */
export const ASSETS = {
  bgTexture:
    "https://www.figma.com/api/mcp/asset/d0a37d2a-c232-4b50-b137-b4f75e5eccd9",
  fashionPhoto:
    "https://www.figma.com/api/mcp/asset/09a3eb49-506d-4694-875e-d90c5fec046e",
  envelopeCard:
    "https://www.figma.com/api/mcp/asset/acf4cafa-26f0-4e37-81c5-6bd4dc0194f3",
  /** Mask that clips the fashion photo to the envelope opening shape */
  maskShape1:
    "https://www.figma.com/api/mcp/asset/22003592-ce07-4a4e-a488-3eb7a534ddf2",
  /** Second mask layer for the fashion photo overlay */
  maskShape2:
    "https://www.figma.com/api/mcp/asset/dcf2c86b-2313-402c-9b1d-a0870f8336e5",
  logo: "https://www.figma.com/api/mcp/asset/d1e10f34-a836-4860-b617-a166084bca3e",
  instagramIcon:
    "https://www.figma.com/api/mcp/asset/c4b38555-9aba-4acf-8289-217a2ecf09fb",
  linkedinIcon:
    "https://www.figma.com/api/mcp/asset/bbfbdba1-bd83-492b-83d6-f48cd4913504",
} as const;
