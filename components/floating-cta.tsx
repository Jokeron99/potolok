"use client";

import { Phone, MessageCircle } from "lucide-react";

export function FloatingCta() {
  return (
    <div className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-3 sm:right-4 z-50 flex flex-col gap-2.5 sm:gap-3">
      <a
        href="https://wa.me/79381332812"
        target="_blank"
        rel="noopener noreferrer"
        className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-green-500 text-background flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href="tel:+79381332812"
        className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg hover:bg-accent/90 transition-colors animate-pulse"
        aria-label="Позвонить"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
