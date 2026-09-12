"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Profil SD", href: "/profil" },
    { name: "Fasilitas", href: "/fasilitas" },
    { name: "Ekstrakurikuler", href: "/ekstrakurikuler" },
    { name: "Galeri Kegiatan", href: "/galeri" },
    { name: "PPDB SD", href: "/pendaftaran" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#E2ECE7] py-3.5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo SD */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-[#167A5B] flex items-center justify-center text-white font-black shadow-xs group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-[#26332E] group-hover:text-[#167A5B] transition-colors">
                SD Negeri Banyubulu 2<span className="text-[#167A5B]"> </span>
              </span>
            </div>
            <span className="text-[10px] font-semibold tracking-widest text-[#68756F] uppercase block -mt-1">
              Sekolah Dasar Unggulan
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#F1F7F3] px-3 py-1.5 rounded-full border border-[#E2ECE7]">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  isActive
                    ? "bg-[#167A5B] text-white font-bold shadow-xs"
                    : "text-[#68756F] hover:text-[#26332E] hover:bg-[#E2ECE7]/60"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/pendaftaran"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#167A5B] hover:bg-[#126349] text-white font-extrabold text-xs transition-all shadow-xs active:scale-95"
          >
            <span>Daftar PPDB SD</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-[#F1F7F3] border border-[#E2ECE7] text-[#26332E] hover:text-[#167A5B]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#FAF9F5] border-t border-[#E2ECE7] overflow-hidden mt-3 pt-2 pb-4"
          >
            <div className="max-w-7xl mx-auto px-4 space-y-2">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-[#167A5B] text-white font-bold"
                        : "text-[#26332E] hover:text-[#167A5B] hover:bg-[#F1F7F3]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-[#E2ECE7]">
                <Link
                  href="/pendaftaran"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#167A5B] text-white font-extrabold text-sm shadow-xs"
                >
                  Daftar Kelas 1 / Pindahan SD
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
