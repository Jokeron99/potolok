"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceLinks = [
  { label: "\u041C\u0430\u0442\u043E\u0432\u044B\u0435 \u043F\u043E\u0442\u043E\u043B\u043A\u0438", href: "/uslugi/matovye" },
  { label: "\u0413\u043B\u044F\u043D\u0446\u0435\u0432\u044B\u0435 \u043F\u043E\u0442\u043E\u043B\u043A\u0438", href: "/uslugi/glyancevye" },
  { label: "\u0421\u0430\u0442\u0438\u043D\u043E\u0432\u044B\u0435 \u043F\u043E\u0442\u043E\u043B\u043A\u0438", href: "/uslugi/satinovye" },
  { label: "\u0422\u043A\u0430\u043D\u0435\u0432\u044B\u0435 \u043F\u043E\u0442\u043E\u043B\u043A\u0438", href: "/uslugi/tkanevye" },
  { label: "\u0421\u0432\u0435\u0442\u043E\u0432\u044B\u0435 \u043B\u0438\u043D\u0438\u0438", href: "/uslugi/svetovye-linii" },
  { label: "\u0422\u0435\u043D\u0435\u0432\u043E\u0439 / \u043F\u0430\u0440\u044F\u0449\u0438\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C", href: "/uslugi/tenevoj-profil" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileOpen(false);
    if (isHome) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430", href: "/#benefits", sectionId: "benefits" },
    { label: "\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440", href: "/#calculator", sectionId: "calculator" },
    { label: "\u042D\u0442\u0430\u043F\u044B", href: "/#steps", sectionId: "steps" },
    { label: "FAQ", href: "/#faq", sectionId: "faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-sm">AM</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold leading-tight text-foreground">
              {"\u0410\u043B\u044C\u044F\u043D\u0441 \u041C\u0430\u0441\u0442\u0435\u0440\u043E\u0432"}
            </p>
            <p className="text-xs text-muted-foreground leading-tight">
              {"\u041D\u0430\u0442\u044F\u0436\u043D\u044B\u0435 \u043F\u043E\u0442\u043E\u043B\u043A\u0438"}
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {/* Services dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {"\u0423\u0441\u043B\u0443\u0433\u0438"}
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-background border border-border rounded-xl shadow-lg py-2 z-50">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/portfolio"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {"\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E"}
          </Link>

          <Link
            href="/otzyvy"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {"\u041E\u0442\u0437\u044B\u0432\u044B"}
          </Link>

          {navItems.map((item) =>
            isHome ? (
              <button
                key={item.sectionId}
                onClick={() => handleNavClick(item.sectionId)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.sectionId}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+79381332812"
            className="hidden md:flex items-center gap-2 text-sm font-semibold text-foreground"
          >
            <Phone className="h-4 w-4 text-accent" />
            +7 (938) 133-28-12
          </a>
          <Button
            asChild
            className="hidden sm:inline-flex bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/#contact">{"\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0437\u0430\u043C\u0435\u0440"}</Link>
          </Button>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background px-4 py-4 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {/* Services accordion */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between text-left text-sm py-2.5 text-foreground font-medium"
            >
              {"\u0423\u0441\u043B\u0443\u0433\u0438"}
              <ChevronDown
                className={`h-4 w-4 text-muted-foreground transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="flex flex-col gap-1 pl-4 pb-2">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm py-2 text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/portfolio"
              onClick={() => setMobileOpen(false)}
              className="text-sm py-2.5 text-foreground hover:text-accent transition-colors"
            >
              {"\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E"}
            </Link>

            <Link
              href="/otzyvy"
              onClick={() => setMobileOpen(false)}
              className="text-sm py-2.5 text-foreground hover:text-accent transition-colors"
            >
              {"\u041E\u0442\u0437\u044B\u0432\u044B"}
            </Link>

            {navItems.map((item) =>
              isHome ? (
                <button
                  key={item.sectionId}
                  onClick={() => handleNavClick(item.sectionId)}
                  className="text-left text-sm py-2.5 text-foreground hover:text-accent transition-colors"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.sectionId}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm py-2.5 text-foreground hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}

            <Link
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="text-sm py-2.5 text-foreground hover:text-accent transition-colors"
            >
              {"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"}
            </Link>

            <a
              href="tel:+79381332812"
              className="flex items-center gap-2 text-sm font-semibold text-accent py-2.5 border-t border-border mt-2 pt-4"
            >
              <Phone className="h-4 w-4" />
              +7 (938) 133-28-12
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
