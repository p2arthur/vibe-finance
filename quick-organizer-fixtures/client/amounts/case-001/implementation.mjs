// Synthetic fixture 001; this file is not production code.
export function formatAmount(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}
