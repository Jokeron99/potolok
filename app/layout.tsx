import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-sans" });
const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title:
    "Альянс Мастеров — Натяжные потолки в Ростове-на-Дону | Монтаж без пыли",
  description:
    "Премиальные натяжные потолки с гарантией 15 лет. Монтаж без пыли за 1 день. Фиксированная цена по договору. Бесплатный замер и расчёт. Ростов-на-Дону и область.",
};

export const viewport: Viewport = {
  themeColor: "#1c1f26",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
