"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Cpu,
  Globe2,
  Sparkles,
  Heart,
  Smile,
  CheckCircle,
  Zap,
} from "lucide-react";

export default function KeunggulanSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Kurikulum Merdeka & Cambridge Primary",
      description:
        "Penggabungan Kurikulum Nasional Merdeka Belajar dengan standar Cambridge Primary untuk mengasah literasi, numerasi, dan bahasa Inggris anak sejak dini.",
      tag: "Akademik Ceria",
      iconBg: "bg-[#DDF3E9] text-[#167A5B]",
    },
    {
      icon: Heart,
      title: "Pendidikan Karakter & Akhlak Mulia",
      description:
        "Pembiasaan ibadah harian, senyum sapa santun, hafalan juz amma/doa harian, serta kepedulian sosial yang membentuk kepribadian berkarakter luhur.",
      tag: "Character Building",
      iconBg: "bg-[#FFEBEB] text-[#D93838]",
    },
    {
      icon: Cpu,
      title: "STEM Kids & Lab Robotik Cilik",
      description:
        "Mengenalkan logika sains, matematika, dan pemrograman dasar dengan media bermain edukatif seperti LEGO Education & Robotik Cilik.",
      tag: "Inovasi Sejak Dini",
      iconBg: "bg-[#E0F2FE] text-[#0284C7]",
    },
    {
      icon: Globe2,
      title: "Program Dual Language (Bilingual)",
      description:
        "Pengantar bahasa Inggris aktif untuk matematika dan sains dalam suasana kelas yang alami, menyenangkan, dan tanpa tekanan.",
      tag: "Bilingual Kids",
      iconBg: "bg-[#EEF2FF] text-[#4F46E5]",
    },
    {
      icon: Smile,
      title: "Lingkungan Aman & Ramah Anak",
      description:
        "Area sekolah tertutup dengan pengawasan CCTV 24 jam, sudut permainan edukatif (Edutainment Zone), dan ruang kelas ber-AC yang nyaman.",
      tag: "Child-Friendly Campus",
      iconBg: "bg-[#FFF8E7] text-[#D97706]",
    },
    {
      icon: Sparkles,
      title: "30+ Ekstrakurikuler Minat Anak",
      description:
        "Mulai dari Dokter Kecil, Pramuka Siaga, Seni Tari, Angklung, Futsal, hingga Klub Sains Cilik untuk menyalurkan bakat terbaik anak.",
      tag: "Eksplorasi Bakat",
      iconBg: "bg-[#DDF3E9] text-[#167A5B]",
    },
  ];

  return (
    <section
      id="keunggulan"
      className="py-16 bg-[#F1F7F3] relative overflow-hidden border-y border-[#E2ECE7]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF3E9] border border-[#BDE3D3] text-xs font-bold text-[#167A5B]">
            <Zap className="w-3.5 h-3.5" />
            <span>Mengapa Memilih SD Negeri Banyubulu 2</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#26332E] tracking-tight">
            Pilar Pendidikan{" "}
            <span className="text-[#167A5B]">Sekolah Dasar Unggulan</span>
          </h2>
          <p className="text-[#68756F] text-sm sm:text-base leading-relaxed">
            Kami menghadirkan dasar pendidikan terbaik bagi putra-putri Anda
            untuk tumbuh menjadi anak yang cerdas, kreatif, berani, dan
            berakhlak mulia.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -3 }}
                className="bg-white p-6 rounded-2xl border border-[#E2ECE7] shadow-xs hover:border-[#167A5B] hover:shadow-md transition-all relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center font-bold`}
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#F1F7F3] text-[#4B5953] border border-[#E2ECE7]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#26332E] group-hover:text-[#167A5B] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#68756F] text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2ECE7] flex items-center text-xs font-bold text-[#167A5B] group-hover:translate-x-1 transition-transform">
                  <span>Pelajari Program</span>
                  <CheckCircle className="w-3.5 h-3.5 ml-1.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
