export function extractNumericValue(text: string): number {
  const clean = text.replace(/[^\d.]/g, "");
  return parseFloat(clean);
}
