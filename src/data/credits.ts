import type { ImageCredit } from "./types";

/** Credit for a photo downloaded from Unsplash (free under the Unsplash License). */
export const unsplashCredit = (author: string, photoId: string): ImageCredit => ({
  author,
  license: "Unsplash License",
  source: `https://unsplash.com/photos/${photoId}`,
  licenseUrl: "https://unsplash.com/license"
});
