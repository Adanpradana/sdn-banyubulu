"use client";

import Link from "next/link";
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Globe,
  Video,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#123E30] text-[#D8E6E0] border-t border-[#1C5443] pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Address */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#123E30] font-bold">
                <Sparkles className="w-4 h-4 text-[#123E30]" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                SD Negeri Banyubulu 2<span className="text-[#F4C95D]"> </span>
              </span>
            </div>

            <p className="text-xs leading-relaxed text-[#B7D4C8] max-w-sm">
              SD Negeri Banyubulu 2 adalah Sekolah Dasar unggulan nasional
              berbasis Kurikulum Merdeka, Cambridge Primary, pembentukan
              karakter mulia, dan lingkungan belajar ramah anak.
            </p>

            <div className="space-y-2 text-xs text-[#E2ECE7] pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F4C95D] flex-shrink-0 mt-0.5" />
                <span>Jl. Raya Banyubulu Kecamatan Proppo Kabupaten Pamekasan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F4C95D] flex-shrink-0" />
                <span>(021) 5890-4321 / WhatsApp: 0812-3456-7890</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F4C95D] flex-shrink-0" />
                <span>sd.ppdb@garuda.sch.id</span>
              </div>
            </div>
          </div>

          {/* Halaman Utama */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-3">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs text-[#B7D4C8]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/profil"
                  className="hover:text-white transition-colors"
                >
                  Profil & Program
                </Link>
              </li>
              <li>
                <Link
                  href="/fasilitas"
                  className="hover:text-white transition-colors"
                >
                  Fasilitas SD
                </Link>
              </li>
              <li>
                <Link
                  href="/ekstrakurikuler"
                  className="hover:text-white transition-colors"
                >
                  Ekstrakurikuler
                </Link>
              </li>
              <li>
                <Link
                  href="/galeri"
                  className="hover:text-white transition-colors"
                >
                  Galeri Kegiatan
                </Link>
              </li>
            </ul>
          </div>

          {/* PPDB SD 2026 */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-3">
              Informasi PPDB
            </h4>
            <ul className="space-y-2 text-xs text-[#B7D4C8]">
              <li>
                <Link
                  href="/pendaftaran"
                  className="hover:text-white transition-colors"
                >
                  Pendaftaran Kelas 1
                </Link>
              </li>
              <li>
                <Link
                  href="/pendaftaran"
                  className="hover:text-white transition-colors"
                >
                  Siswa Pindahan
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors"
                >
                  Pertanyaan Umum (FAQ)
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Accreditation */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-3">
              Kontak & Medsos
            </h4>
            <div className="flex items-center gap-2.5 mb-4">
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-[#1C5443] border border-[#276B56] flex items-center justify-center text-white hover:bg-white hover:text-[#123E30] transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-[#1C5443] border border-[#276B56] flex items-center justify-center text-white hover:bg-white hover:text-[#123E30] transition-colors"
              >
                <Video className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-[#1C5443] border border-[#276B56] flex items-center justify-center text-white hover:bg-white hover:text-[#123E30] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            <div className="p-3 rounded-xl bg-[#1C5443] border border-[#276B56] text-[11px] text-white">
              Akreditasi A (Unggul) <br />
              NPSN SD: 20108899 | Kemendikbudristek
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-10 pt-6 border-t border-[#1C5443] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#B7D4C8] gap-3">
          <div>© 2026 SD Negeri Banyubulu 2. Hak Cipta Dilindungi.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              Privasi
            </a>
            <a href="#" className="hover:text-white">
              Syarat
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
