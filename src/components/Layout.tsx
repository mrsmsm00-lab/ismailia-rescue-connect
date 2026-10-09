import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/winch/logo.jpeg";
import { SITE, tel, wa } from "../lib/site";
import bigLogo from "../assets/winch-logo.png.asset.json";

const nav = [
  { to: "/", label: "ونش انقاذ الاسماعيلية" },
  { to: "/30jun", label: "ونش انقاذ 30 يونيو" },
  { to: "/10oframadan", label: "ونش انقاذ العاشر من رمضان" },
  { to: "/areas", label: "مناطق التغطية" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt={SITE.name} className="h-10 w-10 rounded-full border border-primary/40 object-cover" />
          <div className="leading-tight">
            <p className="text-sm font-extrabold text-foreground">{SITE.shortName}</p>
            <p className="text-[11px] text-muted-foreground">انقاذ سيارات الاسماعيلية رقم 1#</p>
          </div>
          <img src={bigLogo.url} alt="شعار ونش العمار" className="h-12 w-auto" />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={tel(SITE.phones.main)}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            {SITE.phones.main}
          </a>
        </div>
        <button
          className="rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="القائمة"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border/60 bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg bg-secondary px-4 py-3 text-sm font-semibold text-secondary-foreground"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={tel(SITE.phones.main)}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> اتصل الآن {SITE.phones.main}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt={SITE.name} className="h-12 w-12 rounded-full border border-primary/40 object-cover" />
            <p className="font-extrabold text-foreground">{SITE.shortName}</p>
          </div>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            خدمة ونش إنقاذ سيارات على مدار 24 ساعة في الإسماعيلية وجميع المدن والطرق
            المرتبطة بها، بأحدث المعدات وأسرع استجابة.
          </p>
        </div>
        <div>
          <p className="font-bold text-foreground">خدماتنا</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="transition-colors hover:text-primary">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-bold text-foreground">تواصل معنا</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={tel(SITE.phones.main)} className="hover:text-primary" dir="ltr">
                {SITE.phones.main} — الإسماعيلية
              </a>
            </li>
            <li>
              <a href={tel(SITE.phones.roads)} className="hover:text-primary" dir="ltr">
                {SITE.phones.roads} — محور 30 يونيو والعاشر من رمضان
              </a>
            </li>
            <li>
              <a href={wa("أحتاج ونش إنقاذ الآن")} className="hover:text-primary">
                واتساب — رد فوري 24 ساعة
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        Copyright © 2026 {SITE.name}
      </div>
    </footer>
  );
}

export function FloatingButtons() {
  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col gap-3">
      <a
        href={wa("أحتاج ونش إنقاذ الآن")}
        aria-label="واتساب"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.62_0.19_145)] text-white shadow-lg shadow-black/40 transition-transform hover:scale-110"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
          <path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35M12.04 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.85 9.85 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.82 9.82 0 0 1 9.88 9.89c0 5.45-4.44 9.88-9.89 9.88m8.42-18.3A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.6 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.48-8.41" />
        </svg>
      </a>
      <a
        href={tel(SITE.phones.main)}
        aria-label="اتصل الآن"
        className="flex h-14 w-14 animate-pulse items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-black/40 transition-transform hover:scale-110"
      >
        <Phone className="h-7 w-7" />
      </a>
    </div>
  );
}
