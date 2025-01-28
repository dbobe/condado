import { useMemo } from "react";

type ColorInput = string | [number, number, number];

export default function useContrastText(bgColor: ColorInput): string {
  return useMemo(() => {
    const hexToRgb = (hex: string): [number, number, number] => {
      const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, (m, r, g, b) => {
        return r + r + g + g + b + b;
      });

      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16),
          ]
        : [0, 0, 0];
    };

    const rgb: [number, number, number] = Array.isArray(bgColor)
      ? bgColor
      : hexToRgb(bgColor);

    const [r, g, b] = rgb.map((v) => {
      v = Number(v) / 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });

    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    return luminance > 0.5 ? "text-black" : "text-white";
  }, [bgColor]);
}
