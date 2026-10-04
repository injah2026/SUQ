export const WHATSAPP_NUMBER = "966500000000";

export function productInquiryUrl(name: string, price: number | string) {
  const message = `مرحبًا، أبغى أستفسر عن: ${name} – ${price} ر.س`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}