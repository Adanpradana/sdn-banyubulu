"use client";

import { motion } from "framer-motion";
import { Star, Heart } from "lucide-react";

export default function TestimoniAlumni() {
  const testimonials = [
    {
      name: "Ibu Ratna Wijaya",
      role: "Orang Tua Ananda Kenzo (Kelas 3 SD)",
      quote:
        "Anak saya dulu sangat pemalu, tapi sejak sekolah di SD Negeri Banyubulu 2 jadi makin percaya diri dan rajin hafalan Juz Amma. Guru-gurunya sangat sabar dan komunikatif dengan orang tua.",
      avatar: "RW",
      badge: "Orang Tua Murid",
    },
    {
      name: "Bapak Hendra Kurniawan",
      role: "Orang Tua Ananda Naura (Kelas 5 SD)",
      quote:
        "Program Robotik Cilik dan Cambridge English di sekolah ini luar biasa! Naura berhasil meraih juara Olimpiade Sains SD. Lingkungan sekolahnya sangat aman dan bersih.",
      avatar: "HK",
      badge: "Orang Tua Murid",
    },
    {
      name: "dr. Clarissa Sp.A",
      role: "Orang Tua Ananda Rayhan (Kelas 1 SD)",
      quote:
        "Sebagai dokter anak, saya sangat memperhatikan aspek psikologis dan kebersihan sekolah. SD Negeri Banyubulu 2 menerapkan pola hidup bersih sehat dan metode belajar ramah anak.",
      avatar: "CL",
      badge: "Orang Tua Murid",
    },
  ];

  return (
    <section
      id="testimoni"
      className="py-16 bg-[#FAF9F5] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8E7] border border-[#F4C95D]/40 text-xs font-bold text-[#D97706]">
            <Heart className="w-4 h-4 text-[#D97706]" />
            <span>Testimoni Orang Tua Murid</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#26332E]">
            Kepercayaan{" "}
            <span className="text-[#D97706]">Orang Tua Murid SD</span>
          </h2>
          <p className="text-[#68756F] text-sm sm:text-base">
            Pengalaman nyata para wali murid melihat tumbuh kembang putra-putri
            tercinta di SD Negeri Banyubulu 2.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -3 }}
              className="bg-white p-6 rounded-2xl border border-[#E2ECE7] shadow-xs hover:border-[#167A5B] transition-all relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#F4C95D]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#F4C95D] text-[#F4C95D]"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#DDF3E9] text-[#167A5B] border border-[#BDE3D3]">
                    {item.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#4B5953] italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2ECE7] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#167A5B] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#26332E]">
                    {item.name}
                  </h4>
                  <div className="text-[11px] text-[#68756F]">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
