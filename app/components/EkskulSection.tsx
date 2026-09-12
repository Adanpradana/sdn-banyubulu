"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Bot, Activity, Music, Flag, HeartHandshake, X, ExternalLink } from "lucide-react";

export default function EkskulSection() {
  const [filter, setFilter] = useState("semua");
  const [modalEkskul, setModalEkskul] = useState<any | null>(null);

  const ekskuls = [
    {
      id: "robotik",
      name: "Robotik Cilik & Coding Kids",
      category: "sains",
      icon: Bot,
      members: "60 Murid",
      achievements: "Juara 1 International Kids Robotics 2025",
      desc: "Merancang robot sederhana dengan LEGO Education & belajar dasar animasi coding visual Scratch.",
      schedule: "Senin & Rabu, 14.00 WIB",
    },
    {
      id: "sains",
      name: "Klub Sains Cerdas & Eksperimen",
      category: "sains",
      icon: Trophy,
      members: "75 Murid",
      achievements: "Medali Emas Olimpiade Sains SD Nasional",
      desc: "Eksperimen sains menyenangkan sederhana (gunung berapi, pelangi cair, filter air, dan perbintangan).",
      schedule: "Selasa, 14.00 WIB",
    },
    {
      id: "pramuka",
      name: "Pramuka Siaga SD",
      category: "kepemimpinan",
      icon: Flag,
      members: "150 Murid",
      achievements: "Pramuka Siaga Teladan Kota",
      desc: "Melatih kemandirian, kerja sama tim, tali temali dasar, serta kepedulian lingkungan hidup.",
      schedule: "Jumat, 13.30 WIB",
    },
    {
      id: "tari",
      name: "Seni Tari & Musik Angklung",
      category: "seni",
      icon: Music,
      members: "55 Murid",
      achievements: "Penampil Terbaik Festival Seni Anak",
      desc: "Melestarikan tarian nusantara anak-anak dan permainan musik angklung secara serasi dan ceria.",
      schedule: "Kamis, 14.00 WIB",
    },
    {
      id: "dokter",
      name: "Dokter Kecil & PMR Mula",
      category: "kepemimpinan",
      icon: HeartHandshake,
      members: "40 Murid",
      achievements: "Dokter Kecil Terbaik Kecamatan",
      desc: "Edukasi kesehatan diri, gizi seimbang, pertolongan pertama pada luka kecil, serta kebersihan lingkungan.",
      schedule: "Rabu, 14.00 WIB",
    },
    {
      id: "futsal",
      name: "Futsal & Renang Cilik",
      category: "olahraga",
      icon: Activity,
      members: "80 Murid",
      achievements: "Juara Turnamen Futsal SD 2025",
      desc: "Pelatihan teknik dasar sepak bola, ketangkasan tubuh, serta renang gaya dasar dengan pelatih ramah anak.",
      schedule: "Sabtu Pagi, 08.00 WIB",
    },
  ];

  const filteredEkskul =
    filter === "semua" ? ekskuls : ekskuls.filter((item) => item.category === filter);

  return (
    <section id="ekskul" className="py-16 bg-[#FAF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF3E9] border border-[#BDE3D3] text-xs font-bold text-[#167A5B]">
            <Trophy className="w-4 h-4" />
            <span>Ekstrakurikuler SD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#26332E]">
            Wadah Penyaluran Bakat <span className="text-[#167A5B]">& Kreativitas Anak</span>
          </h2>
          <p className="text-[#68756F] text-sm sm:text-base">
            Berbagai kegiatan ekstrakurikuler yang dirancang aman, gembira, dan melatih potensi kebaikan anak sejak usia SD.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {[
            { id: "semua", label: "Semua Ekskul" },
            { id: "sains", label: "Sains & Robotik" },
            { id: "seni", label: "Seni & Budaya" },
            { id: "olahraga", label: "Olahraga Cilik" },
            { id: "kepemimpinan", label: "Karakter & Kepemimpinan" },
          ].map((btn) => (
            <motion.button
              key={btn.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setFilter(btn.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === btn.id
                  ? "bg-[#167A5B] text-white shadow-xs"
                  : "bg-white text-[#68756F] border border-[#E2ECE7] hover:text-[#26332E] hover:bg-[#F1F7F3]"
              }`}
            >
              {btn.label}
            </motion.button>
          ))}
        </div>

        {/* Ekskul Grid */}
        <motion.div layout className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredEkskul.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ y: -3 }}
                  onClick={() => setModalEkskul(item)}
                  className="bg-white p-6 rounded-2xl border border-[#E2ECE7] shadow-xs hover:border-[#167A5B] hover:shadow-md cursor-pointer group relative flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#DDF3E9] border border-[#BDE3D3] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#167A5B] group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-[10px] font-bold text-[#D97706] bg-[#FFF8E7] px-2.5 py-1 rounded-full border border-[#F4C95D]/40">
                        {item.members}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#26332E] group-hover:text-[#167A5B] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#68756F] mt-2 line-clamp-2">{item.desc}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E2ECE7] flex items-center justify-between text-xs">
                    <span className="text-[#167A5B] font-semibold">{item.achievements}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#68756F] group-hover:text-[#167A5B] transition-colors" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {modalEkskul && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25 }}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2ECE7] max-w-lg w-full relative shadow-xl space-y-5"
            >
              <button
                onClick={() => setModalEkskul(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#F1F7F3] border border-[#E2ECE7] text-[#68756F] hover:text-[#26332E]"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#DDF3E9] border border-[#BDE3D3] flex items-center justify-center">
                  <modalEkskul.icon className="w-5 h-5 text-[#167A5B]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#26332E]">{modalEkskul.name}</h3>
                  <span className="text-xs text-[#167A5B] font-semibold">{modalEkskul.achievements}</span>
                </div>
              </div>

              <p className="text-[#4B5953] text-sm leading-relaxed">{modalEkskul.desc}</p>

              <div className="p-4 rounded-xl bg-[#F1F7F3] border border-[#E2ECE7] space-y-2 text-xs text-[#26332E]">
                <div className="flex justify-between">
                  <span className="text-[#68756F]">Jadwal Latihan:</span>
                  <span className="font-semibold text-[#26332E]">{modalEkskul.schedule}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#68756F]">Peserta Didik Aktif:</span>
                  <span className="font-semibold text-[#167A5B]">{modalEkskul.members}</span>
                </div>
              </div>

              <button
                onClick={() => setModalEkskul(null)}
                className="w-full py-3 rounded-xl bg-[#167A5B] text-white font-bold text-xs hover:bg-[#126349] transition-colors"
              >
                Tutup Detail
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
