/**
 * Figma CDN asset URLs — expire in 7 days from 2026-03-29.
 * To make permanent: download each image to /public/images/ and update the paths below.
 */
export const ASSETS = {
  bgTexture:
    "https://www.figma.com/api/mcp/asset/83e81281-be00-4406-a3da-ba6a76209c62",
  logo: "https://www.figma.com/api/mcp/asset/d1e10f34-a836-4860-b617-a166084bca3e",
  instagramIcon:
    "https://www.figma.com/api/mcp/asset/c4b38555-9aba-4acf-8289-217a2ecf09fb",
  linkedinIcon:
    "https://www.figma.com/api/mcp/asset/bbfbdba1-bd83-492b-83d6-f48cd4913504",
} as const;
