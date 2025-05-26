// Palette type
export type Palette = {
  r: number;
  g: number;
  b: number;
};

// Helper to clamp a value between min and max
function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

// Generate a random RGB color
function randomRGB(): Palette {
  return {
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256),
  };
}

// Convert RGB to HEX
export function rgbToHex(r: number, g: number, b: number): string {
    return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
}

// Generate 4 matching colors by scaling base RGB
export function generatePalette(): Palette[] {
    const base = randomRGB();
    const palette = [base];
    for (let i = 0; i < 4; i++) {
      const factor = 0.5 + Math.random();
      const r = clamp(Math.round(base.r * factor), 0, 255);
      const g = clamp(Math.round(base.g * factor), 0, 255);
      const b = clamp(Math.round(base.b * factor), 0, 255);
      palette.push({ r, g, b });
    }
    return palette;
  }