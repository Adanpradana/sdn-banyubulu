"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Globe, Microchip, BookOpen, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProgramSection() {
  const [activeTab, setActiveTab] = useState("reguler");

  const programs = [
    {
      id: "reguler",
      title: "Kelas Reguler Unggulan Merdeka",
      subtitle: "Fokus pada penguatan Literasi, Numerasi, Pendidikan Pancasila & Seni",
      icon: BookOpen,
      highlights: [
        "Metode Pembelajaran Active & Experiential Learning",
        "Pembiasaan Membaca Buku (Literacy Time 15 Menit)",
        "Projek Penguatan Profil Pelajar Pancasila (P5)",
        "Kegiatan Field Trip & Outdoor Learning berkala",
      ],
      career: "Lanjut ke SMP Negeri Unggulan & SMP Swasta Favorit",
      quote: "Menanamkan rasa ingin tahu dan kegemaran membaca sejak usia dasar.",
    },
    {
      id: "bilingual",
      title: "Kelas International Cambridge Primary",
      subtitle: "Pengantar Dual Language (English & Bahasa) untuk Science & Math",
      icon: Globe,
      highlights: [
        "Kurikulum Cambridge Primary (English, Math, Science)",
        "Native & Specialist English Teacher Mentoring",
        "Cambridge Primary Checkpoint Preparation",
        "Suasana belajar interaktif berbasis presentasi cilik",
      ],
      career: "Lanjut ke SMP International IB / Cambridge / Bilingual",
      quote: "Melatih anak percaya diri berkomunikasi dalam Bahasa Inggris sejak dini.",
    },
    {
      id: "tahfiz",
      title: "Kelas Tahfiz & Karakter Islami",
      subtitle: "Program hafalan Al-Qur'an (Juz 30 & 29) serta pembiasaan ibadah",
      icon: Microchip,
      highlights: [
        "Target hafalan Juz 30 & Juz 29 saat lulus SD",
        "Metode Ummi / Yanbu'a tajwid menyenangkan",
        "Sholat Dzuhur & Dhuha Berjamaah di sekolah",
        "Pembentukan karakter jujur, santun, dan taat ortu",
      ],
      career: "Lanjut ke SMP Islam Terpadu (JSIT) & Pondok Modern",
      quote: "Mencetak anak sholeh-sholehah yang beraqidah lurus dan santun.",
    },
    {
      id: "stem",
      title: "STEM & Robotik Kids Pathway",
      subtitle: "Program peminatan khusus Logika Komputer & Robotik Cilik",
      icon: Code,
      highlights: [
        "Pengenalan Coding Visual dengan Scratch Jr & Blocky",
        "Perakitan Kit Robotik Edukatif (LEGO Wedo 2.0)",
        "Eksperimen Sains Sederhana & Hands-on Lab",
        "Kompetisi Robotik Cilik tingkat Kota & Nasional",
      ],
      career: "Melatih pemikiran komputasional (Computational Thinking)",
      quote: "Mengubah wkt bermain gadget anak menjadi aktivitas kreasi teknologi positif.",
    },
  ];

  const currentProgram = programs.find((p) => p.id === activeTab)!;

  return (
    <section id="program" className="py-16 bg-[#FAF9F5] relative overflow-hidden border-y border-[#E2ECE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <span className="px-3.5 py-1.5 rounded-full bg-[#DDF3E9] border border-[#BDE3D3] text-xs font-bold text-[#167A5B] inline-block">
            Program Pembelajaran SD
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#26332E]">
            Pilihan Kelas & <span className="text-[#167A5B]">Program Pembelajaran</span>
          </h2>
          <p className="text-[#68756F] text-sm sm:text-base">
            Sesuaikan kebutuhan dan potensi tumbuh kembang putra-putri Anda dengan program terbaik kami.
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {programs.map((prog) => {
            const Icon = prog.icon;
            const isActive = activeTab === prog.id;
            return (
              <motion.button
                key={prog.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(prog.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-[#167A5B] text-white font-bold shadow-xs"
                    : "bg-white text-[#68756F] border border-[#E2ECE7] hover:text-[#26332E] hover:bg-[#F1F7F3]"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-[#167A5B]"}`} />
                <span>{prog.title.split(" ")[0]} {prog.title.split(" ")[1]}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Tab Content Showcase */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProgram.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2ECE7] shadow-sm relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left side info */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#167A5B]">
                    <span className="w-2 h-2 rounded-full bg-[#167A5B]" />
                    <span>Detail Program Pembelajaran</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#26332E]">
                    {currentProgram.title}
                  </h3>
                  <p className="text-[#4B5953] text-sm sm:text-base leading-relaxed">
                    {currentProgram.subtitle}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#68756F]">
                      Fokus & Metode Belajar:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentProgram.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-[#26332E]">
                          <div className="w-4 h-4 rounded bg-[#DDF3E9] text-[#167A5B] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Orientasi */}
                  <div className="pt-4 border-t border-[#E2ECE7] flex flex-col sm:flex-row sm:items-center gap-3">
                    <span className="text-xs font-bold text-[#68756F] whitespace-nowrap">
                      Orientasi Kelulusan SD:
                    </span>
                    <span className="text-xs font-bold text-[#167A5B] bg-[#DDF3E9] px-3 py-1.5 rounded-lg border border-[#BDE3D3]">
                      {currentProgram.career}
                    </span>
                  </div>
                </div>

                {/* Right side quote & CTA */}
                <div className="lg:col-span-5">
                  <div className="p-6 rounded-2xl border border-[#E2ECE7] bg-[#F1F7F3] space-y-5">
                    <div className="text-xs font-medium text-[#26332E] italic border-l-2 border-[#167A5B] pl-4 py-1">
                      "{currentProgram.quote}"
                    </div>

                    <div className="space-y-3">
                      <div className="text-xs font-bold text-[#26332E]">
                        Tertarik mendaftarkan putra-putri Anda?
                      </div>
                      <Link
                        href="/pendaftaran"
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#167A5B] hover:bg-[#126349] text-white font-bold text-xs transition-colors shadow-xs"
                      >
                        <span>Daftar PPDB SD Kelas 1</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
