export const CDN_URL = "https://cdn.circleinterior.kz";

export function cdnUrl(path: string): string {
  return `${CDN_URL}${path}`;
}
