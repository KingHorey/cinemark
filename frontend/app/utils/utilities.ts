export function convertCase(text: string) {
  if (text?.length > 0) {
    const convertedText = text.charAt(0).toUpperCase();
    return `${convertedText}${text.slice(1)}`;
  }
  return "";
}
