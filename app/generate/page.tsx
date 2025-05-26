"use client";
import React, { useEffect, useState } from "react";
import { Palette, generatePalette, rgbToHex } from "@/utils/colorUtils";

// Generate page
const ColorPaletteGenerator = () => {
  const [palette, setPalette] = useState<Palette[] | null>(null);

  const handleGenerate = () => {
    setPalette(generatePalette());
  };

  useEffect(() => {
    handleGenerate();
  }, []);

  if (palette === null) return null;

  return (
    <div className="h-full flex flex-col items-center justify-evenly gap-6 overflow-y-auto">
      <h1 className="text-4xl font-bold mt-4">Palette Generator</h1>
      <div className="flex gap-4">
        {palette?.map((color, idx) => {
          const hex = rgbToHex(color.r, color.g, color.b);
          return (
            <div key={idx} className="flex flex-col items-center">
              <div
                className="w-24 h-24 rounded shadow-md border border-gray-200 mb-2"
                style={{ backgroundColor: hex }}
              ></div>
              <span className="font-mono text-sm">{hex.toUpperCase()}</span>
            </div>
          );
        })}
      </div>
      <button
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        onClick={handleGenerate}
      >
        Generate Palette
      </button>
    </div>
  );
};

export default ColorPaletteGenerator;
