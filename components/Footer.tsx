"use client";
import Link from "next/link";

const footerLinks = {
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/governance", label: "Leadership & Governance" },
    { href: "/sustainability", label: "Sustainability" },
    { href: "/newsroom", label: "Newsroom" },
    { href: "/careers", label: "Careers" },
  ],
  Divisions: [
    { href: "/divisions/information-technology", label: "Information Technology" },
    { href: "/divisions/agricultural-business", label: "Agricultural Business" },
    { href: "/divisions/renewable-energy", label: "Renewable Energy" },
    { href: "/divisions/construction-infrastructure", label: "Construction" },
    { href: "/divisions", label: "View All 12 Divisions →" },
  ],
  Legal: [
    { href: "/legal", label: "Legal & Compliance" },
    { href: "/legal#privacy", label: "Privacy Policy" },
    { href: "/legal#terms", label: "Terms of Engagement" },
    { href: "/faq", label: "FAQ" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-alt)] border-t border-[var(--border)]">
      {/* Top band */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link
              href="/"
              className="font-bold text-xl tracking-[0.25em] uppercase text-[var(--fg)]"
            >
              <span className="text-[#E8500A]">Born</span>stellar
            </Link>
            <p className="text-sm text-[var(--fg-muted)] leading-relaxed max-w-xs">
              A multi-division African company delivering integrated technology,
              infrastructure, energy, manufacturing, and advisory solutions that
              power sustainable development across the continent.
            </p>
            <div className="flex flex-col gap-1 text-xs text-[var(--fg-faint)]">
              <span>Ibadan, Oyo State, Nigeria</span>
              <a
                href="mailto:info@bornstellar.com"
                className="hover:text-[#E8500A] transition-colors"
              >
                info@bornstellar.com
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="flex flex-col gap-4">
              <h4 className="text-xs font-semibold text-[var(--fg-faint)] tracking-[0.2em] uppercase">
                {group}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--fg-muted)] hover:text-[#E8500A] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[var(--fg-faint)]">
            © {new Date().getFullYear()} Bornstellar Limited. All rights reserved.
          </p>
          <p className="text-xs text-[var(--fg-faint)]">
            Registered in Nigeria under the Companies and Allied Matters Act, 2020
          </p>
        </div>
      </div>
    </footer>
  );
}
