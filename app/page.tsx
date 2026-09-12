"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Smile,
  Sparkles,
  Building2,
  BookOpen,
  Trophy,
  Camera,
} from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import KegiatanGallery from "./components/KegiatanGallery";

export default function Home() {
  const stats = [
    {
      value: "100%",
      label: "Diterima SMP Favorit",
      desc: "SMPN Unggulan & International School",
    },
    {
      value: "15 : 1",
      label: "Rasio Guru & Murid",
      desc: "Pendampingan Intensif & Ramah Anak",
    },
    {
      value: "30+",
      label: "Klub Bakat & Ekskul",
      desc: "Robotik Cilik, Tari, Dokter Kecil",
    },
    {
      value: "Akreditasi A",
      label: "Predikat Unggul",
      desc: "Standar Kemendikbudristek",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#26332E] selection:bg-[#167A5B] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-16 md:pt-16 md:pb-24 relative overflow-hidden bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF3E9] border border-[#BDE3D3] text-xs font-bold text-[#167A5B]">
                <Sparkles className="w-4 h-4 text-[#167A5B]" />
                <span>PPDB SD 2026/2027 Resmi Dibuka</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#26332E] leading-[1.15]">
                Membentuk Generasi <br className="hidden sm:inline" />
                <span className="text-[#167A5B]">
                  Cerdas, Ceria & Berkarakter
                </span>{" "}
                <br />
                Sejak Usia Dini
              </h1>

              <p className="text-base sm:text-lg text-[#4B5953] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Selamat datang di **SD Negeri Banyubulu 2**. Kami menghadirkan
                lingkungan belajar yang aman, menyenangkan, dan inovatif dengan
                gabungan **Kurikulum Merdeka**, **Cambridge Primary**, serta
                pembiasaan akhlak mulia.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-medium text-[#26332E] pt-1">
                <div className="flex items-center gap-1.5 bg-[#F1F7F3] px-3.5 py-2 rounded-xl border border-[#E2ECE7]">
                  <CheckCircle2 className="w-4 h-4 text-[#167A5B]" />
                  <span>Lingkungan Ramah Anak</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#F1F7F3] px-3.5 py-2 rounded-xl border border-[#E2ECE7]">
                  <CheckCircle2 className="w-4 h-4 text-[#167A5B]" />
                  <span>Dual Language (Bilingual)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#F1F7F3] px-3.5 py-2 rounded-xl border border-[#E2ECE7]">
                  <CheckCircle2 className="w-4 h-4 text-[#167A5B]" />
                  <span>STEM Kids & Robotik Cilik</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
                <Link
                  href="/pendaftaran"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#167A5B] hover:bg-[#126349] text-white font-extrabold text-sm transition-all shadow-xs active:scale-95"
                >
                  <span>Daftar PPDB SD Sekarang</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/profil"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-[#F1F7F3] text-[#26332E] font-bold text-sm border border-[#E2ECE7] transition-all shadow-xs"
                >
                  <Smile className="w-4 h-4 text-[#E89B5A]" />
                  <span>Lihat Profil & Program</span>
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden bg-white border border-[#E2ECE7] shadow-xl group">
                <Image
                  src="/images/hero_school.jpg"
                  alt="Siswa SD Negeri Banyubulu 2 Belajar Ceria"
                  width={700}
                  height={500}
                  priority
                  className="w-full h-[380px] sm:h-[420px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#26332E]/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 border border-[#E2ECE7] shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold tracking-wider text-[#167A5B] uppercase">
                        Kampus Ramah Anak
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-[#26332E] mt-0.5">
                        Metode Belajar Fun & Interactive Learning
                      </h3>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#DDF3E9] flex items-center justify-center border border-[#BDE3D3]">
                      <Smile className="w-4 h-4 text-[#167A5B]" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Stats Grid */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -2 }}
                className="bg-white border border-[#E2ECE7] p-5 rounded-2xl text-center shadow-xs hover:border-[#167A5B] transition-all"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-[#167A5B]">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#26332E] mt-1">
                  {item.label}
                </div>
                <div className="text-[11px] text-[#68756F] mt-0.5">
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Sitemap Highlights */}
      <section className="py-16 bg-[#F1F7F3] border-y border-[#E2ECE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold text-[#167A5B] uppercase tracking-wider">
              Jelajahi Informasi Sekolah
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#26332E]">
              Layanan Utama SD Negeri Banyubulu 2
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Card 1: Profil */}
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-white p-6 rounded-2xl border border-[#E2ECE7] shadow-xs hover:border-[#167A5B] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#DDF3E9] text-[#167A5B] flex items-center justify-center border border-[#BDE3D3]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#26332E]">
                  Profil & Program
                </h3>
                <p className="text-xs text-[#68756F] leading-relaxed">
                  Pelajari visi misi, kurikulum Merdeka SD, Cambridge Primary, &
                  Tahfiz.
                </p>
              </div>
              <Link
                href="/profil"
                className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#167A5B] hover:text-[#126349]"
              >
                <span>Buka Profil SD</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            {/* Card 2: Fasilitas */}
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-white p-6 rounded-2xl border border-[#E2ECE7] shadow-xs hover:border-[#167A5B] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center border border-[#BAE6FD]">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#26332E]">
                  Fasilitas Ramah Anak
                </h3>
                <p className="text-xs text-[#68756F] leading-relaxed">
                  STEM & Robotik Lab, Perpustakaan Anak, Smart Classroom,
                  Edutainment.
                </p>
              </div>
              <Link
                href="/fasilitas"
                className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#167A5B] hover:text-[#126349]"
              >
                <span>Lihat Fasilitas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            {/* Card 3: Ekstrakurikuler */}
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-white p-6 rounded-2xl border border-[#E2ECE7] shadow-xs hover:border-[#167A5B] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFF8E7] text-[#D97706] flex items-center justify-center border border-[#F4C95D]/40">
                  <Trophy className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#26332E]">
                  30+ Ekstrakurikuler
                </h3>
                <p className="text-xs text-[#68756F] leading-relaxed">
                  Robotik Cilik, Pramuka Siaga, Dokter Kecil, Seni Tari, dan
                  Futsal.
                </p>
              </div>
              <Link
                href="/ekstrakurikuler"
                className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#167A5B] hover:text-[#126349]"
              >
                <span>Jelajahi Ekskul</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            {/* Card 4: Galeri Kegiatan */}
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-white p-6 rounded-2xl border border-[#E2ECE7] shadow-xs hover:border-[#167A5B] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#DDF3E9] text-[#167A5B] flex items-center justify-center border border-[#BDE3D3]">
                  <Camera className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#26332E]">
                  Galeri Kegiatan
                </h3>
                <p className="text-xs text-[#68756F] leading-relaxed">
                  Dokumentasi momen ceria karya siswa, pentas seni, dan
                  perkemahan.
                </p>
              </div>
              <Link
                href="/galeri"
                className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#167A5B] hover:text-[#126349]"
              >
                <span>Buka Galeri Foto</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Embedded Activity Gallery Section */}
      <KegiatanGallery />

      <Footer />
    </main>
  );
}
