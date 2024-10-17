export function formatQuantity(quantity: number): string {
  if (Number.isInteger(quantity)) {
    return quantity.toString();
  }
  const fixed = quantity.toFixed(5);
  const trimmed = fixed.replace(/\.?0+$/, "");
  if (trimmed.length > 6) {
    return quantity.toPrecision(6);
  }
  return trimmed;
}
