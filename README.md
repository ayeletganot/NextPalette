# 🎨 NextPalette

A simple yet powerful color palette generator built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This tool allows users to generate unique color palettes at the click of a button.

## 🚀 Features

- Generate color palettes dynamically
- Responsive UI with Tailwind CSS
- Clean folder structure with reusable components
- Utility functions for color generation
- Lightweight and fast

## 📁 Project Structure

```
├── app/               # App Router (Next.js 13+)
│ └── generate/        # Palette generator page
├── components/        # Reusable React components
├── utils/             # Utility functions (e.g., generatePalette)
├── styles/            # (Optional) Global styles if used
├── public/            # Static assets
```


## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🧑‍💻 Getting Started
```bash

##Install dependencies:
npm install

##Run the development server:
npm run dev
```


## 🗂️ Key Files
app/generate/page.tsx – Main page for generating palettes

utils/generatePalette.ts – Logic for generating random palettes

components/ – Shared layout and UI components


## 🔧 Customization Ideas
Add a "Save Palette" feature

Introduce hex/RGB/HSB view toggles.

Create an /about route to explain how palettes work.

Export palettes as images or CSS variables
