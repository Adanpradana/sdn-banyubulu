"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Award,
  ArrowRight,
  Smile,
  CheckCircle2,
  HeartHandshake,
} from "lucide-react";

export default function HeroSection() {
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="pt-10 pb-16 md:pt-16 md:pb-24 relative overflow-hidden bg-[#FAF9F5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Announcement Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF3E9] border border-[#BDE3D3] text-xs font-bold text-[#167A5B]"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#167A5B]" />
              <span>PPDB SD 2026/2027 Resmi Dibuka</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#26332E] leading-[1.15]"
            >
              Membentuk Generasi <br className="hidden sm:inline" />
              <span className="text-[#167A5B]">
                Cerdas, Ceria & Berkarakter
              </span>{" "}
              <br />
              Sejak Usia Dini
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#4B5953] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              **SD Negeri Banyubulu 2** menghadirkan pengalaman belajar yang
              hangat dan menyenangkan dengan gabungan **Kurikulum Merdeka**,
              **Cambridge Primary**, **STEM Creative Kids**, serta pembiasaan
              akhlak mulia dalam lingkungan yang aman & ramah anak.
            </motion.p>

            {/* Quick Feature Bullets */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 text-xs font-medium text-[#26332E]"
            >
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
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/pendaftaran"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#167A5B] hover:bg-[#126349] text-white font-extrabold text-sm transition-all shadow-sm"
                >
                  <span>Daftar PPDB SD Sekarang</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/profil"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-[#F1F7F3] text-[#26332E] font-bold text-sm border border-[#E2ECE7] transition-all shadow-xs"
                >
                  <Smile className="w-4 h-4 text-[#E89B5A]" />
                  <span>Lihat Profil & Program</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column: Image & Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#26332E]/70 via-transparent to-transparent" />

              {/* Overlaid Bottom Title */}
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
                  <div className="w-8 h-8 rounded-full bg-[#DDF3E9] flex items-center justify-center">
                    <Smile className="w-4 h-4 text-[#167A5B]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge 1: Akreditasi A */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 hidden sm:flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#E2ECE7] shadow-lg"
            >
              <div className="w-9 h-9 rounded-xl bg-[#FFF8E7] border border-[#F4C95D]/40 flex items-center justify-center">
                <Award className="w-5 h-5 text-[#D97706]" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#26332E]">
                  Akreditasi A Unggul
                </div>
                <div className="text-[10px] text-[#68756F]">
                  Kemendikbudristek RI
                </div>
              </div>
            </motion.div>

            {/* Floating Badge 2: Karakter */}
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-4 -right-4 hidden sm:flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#E2ECE7] shadow-lg"
            >
              <div className="w-9 h-9 rounded-xl bg-[#DDF3E9] border border-[#167A5B]/30 flex items-center justify-center">
                <HeartHandshake className="w-5 h-5 text-[#167A5B]" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#26332E]">
                  Pendidikan Karakter
                </div>
                <div className="text-[10px] text-[#68756F]">
                  Religius, Mandiri & Santun
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Statistics Cards */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
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
  );
}
