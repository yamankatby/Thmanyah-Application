import { colord, extend, RgbColor } from "colord";
import a11yPlugin from "colord/plugins/a11y";
// @ts-expect-error ColorThief does not have types
import ColorThief from "colorthief";
import { useEffect, useState } from "react";

extend([a11yPlugin]);

export const useDominantColor = (src: string): string | null => {
  const [hex, setHex] = useState<string | null>(null);

  useEffect(() => {
    if (!src || typeof window === "undefined") return;

    const img = document.createElement("img");
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      try {
        const [r, g, b] = new ColorThief().getColor(img) as [
          number,
          number,
          number,
        ];
        let c = colord({ r, g, b } as RgbColor);
        while (c.contrast("#161727") < 4.5) {
          c = c.lighten(0.05);
        }
        setHex(c.toHex());
      } catch {
        setHex(null);
      }
    };

    img.onerror = () => setHex(null);

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return hex;
};
