"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  FileText,
  UserCheck,
  GraduationCap,
  CheckCircle,
} from "lucide-react";

export default function TimelinePPDB() {
  const steps = [
    {
      num: "01",
      title: "Pendaftaran Online & Berkas",
      date: "10 Jan - 28 Feb 2026",
      desc: "Mengisi formulir digital pendaftaran calon siswa Kelas 1 SD / Pindahan dan melengkapi pasfoto serta Akta Kelahiran & KK.",
      icon: FileText,
    },
    {
      num: "02",
      title: "Observasi Kesiapan & Wawancara Ortu",
      date: "05 - 10 Maret 2026",
      desc: "Anak mengikuti observasi motorik & kemandirian ramah anak (tanpa tes membaca berlebihan), serta wawancara pemetaan bersama orang tua.",
      icon: Calendar,
    },
    {
      num: "03",
      title: "Pengumuman Hasil Seleksi",
      date: "15 Maret 2026",
      desc: "Pengumuman resmi status penerimaan siswa baru SD Negeri Banyubulu 2 diakses melalui portal online dan konfirmasi WhatsApp.",
      icon: UserCheck,
    },
    {
      num: "04",
      title: "Daftar Ulang & MPLS Ceria",
      date: "20 - 30 Maret 2026",
      desc: "Pengukuran seragam sekolah, orientasi orang tua murid, dan persiapan orientasi sekolah yang menyenangkan (MPLS Ceria).",
      icon: GraduationCap,
    },
  ];

  return (
    <section className="py-16 bg-[#F1F7F3] relative overflow-hidden border-t border-[#E2ECE7]">
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
            Alur Penerimaan PPDB SD 2026/2027
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#26332E]">
            Tahapan Pendaftaran SD{" "}
            <span className="text-[#167A5B]">Mudah & Ramah Anak</span>
          </h2>
          <p className="text-[#68756F] text-sm sm:text-base">
            Proses penerimaan peserta didik baru SD dirancang hangat, ramah, dan
            mendukung perkembangan emosional anak.
          </p>
        </motion.div>

        {/* Timeline Stack */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="bg-white p-6 rounded-2xl border border-[#E2ECE7] shadow-xs relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#167A5B]">
                      {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#DDF3E9] border border-[#BDE3D3] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#167A5B]" />
                    </div>
                  </div>

                  <span className="text-[10px] font-bold text-[#D97706] bg-[#FFF8E7] px-2.5 py-1 rounded-full border border-[#F4C95D]/40 inline-block mb-3">
                    {step.date}
                  </span>

                  <h3 className="text-sm font-bold text-[#26332E] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#68756F] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#E2ECE7] flex items-center gap-1.5 text-[11px] text-[#167A5B] font-bold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Tahap {index + 1} Terbuka</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
