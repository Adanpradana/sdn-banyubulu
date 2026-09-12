"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Berapa usia minimal calon siswa untuk mendaftar Kelas 1 SD?",
      a: "Usia minimal calon siswa Kelas 1 SD adalah 6 tahun pada bulan Juli tahun ajaran berjalan. Bagi anak usia 5.5 tahun dapat mempertimbangkan hasil rekomendasi psikolog kesiapan sekolah.",
    },
    {
      q: "Apakah calon murid SD harus sudah lancar membaca dan berhitung (Calistung)?",
      a: "Tidak harus. SD Negeri Banyubulu 2 menerima calon murid dengan berbagai tingkat kesiapan. Pada semester pertama Kelas 1, kami menyediakan program matrikulasi calistung dengan metode bermain yang menyenangkan.",
    },
    {
      q: "Bagaimana sistem pengawasan keamanan anak selama di sekolah?",
      a: "Sekolah kami menerapkan One Gate System dengan gerbang otomatis, CCTV 24 jam di seluruh area kelas & koridor, serta staf keamanan yang ramah mendampingi penjemputan anak.",
    },
    {
      q: "Apakah ada fasilitas jemputan dan catering makan siang anak?",
      a: "Ya, kami bekerja sama dengan armada antar-jemput ber-AC terpercaya dan menyediakan layanan catering makan siang sehat organik yang disusun bersama ahli gizi anak.",
    },
    {
      q: "Bagaimana cara mendaftar pendaftaran siswa baru (PPDB SD)?",
      a: "Orang tua dapat mengisi formulir online di halaman ini atau datang langsung ke ruang admisi sekolah untuk mengagendakan observasi cilik.",
    },
  ];

  return (
    <section id="faq" className="py-16 bg-[#FAF9F5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF3E9] border border-[#BDE3D3] text-xs font-bold text-[#167A5B]">
            <HelpCircle className="w-4 h-4" />
            <span>Pusat Informasi Ortu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#26332E]">
            Pertanyaan Yang{" "}
            <span className="text-[#167A5B]">Sering Diajukan Orang Tua</span>
          </h2>
          <p className="text-[#68756F] text-sm sm:text-base">
            Informasi lengkap seputar pendaftaran, kesiapan anak, dan fasilitas
            di SD Negeri Banyubulu 2.
          </p>
        </motion.div>

        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-xl border border-[#E2ECE7] overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm font-bold text-[#26332E] hover:text-[#167A5B] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#68756F] transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#167A5B]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 pb-4 text-xs sm:text-sm text-[#4B5953] leading-relaxed border-t border-[#E2ECE7] pt-3 bg-[#FAF9F5]"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
