"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Camera, Calendar, Tag, X, Sparkles, ExternalLink } from "lucide-react";

export default function KegiatanGallery() {
  const [filter, setFilter] = useState("semua");
  const [modalItem, setModalItem] = useState<any | null>(null);

  const activities = [
    {
      id: "robotik",
      title: "Unjuk Karya Robotik Cilik & Scratch Coding",
      category: "akademik",
      categoryLabel: "Akademik & STEM",
      date: "15 Februari 2026",
      image: "/images/facility_lab.jpg",
      description:
        "Siswa-siswi Kelas 3 hingga 5 mempresentasikan hasil rakitan robot LEGO Education Wedo 2.0 dan game edukasi buatan sendiri di depan orang tua murid.",
    },
    {
      id: "pramuka",
      title: "Pesta Siaga & Perkemahan Sabtu-Minggu (Persami)",
      category: "pramuka",
      categoryLabel: "Pramuka & Karakter",
      date: "28 Januari 2026",
      image: "/images/activity_scout.jpg",
      description:
        "Kegiatan luar ruangan Pramuka Siaga untuk melatih kemandirian, kedisiplinan, kerja sama tim, dan ketangkasan anak dalam suasana ceria.",
    },
    {
      id: "tari",
      title: "Pentas Seni Tari Tradisional & Musik Angklung",
      category: "seni",
      categoryLabel: "Seni & Budaya",
      date: "20 Desember 2025",
      image: "/images/activity_dance.jpg",
      description:
        "Penampilan tari daerah nusantara dan permainan kolaborasi alat musik angklung oleh siswa-siswi SD Negeri Banyubulu 2 pada panggung akhir semester.",
    },
    {
      id: "literasi",
      title: "Literacy Day & Panggung Mendongeng Anak",
      category: "akademik",
      categoryLabel: "Akademik & STEM",
      date: "10 November 2025",
      image: "/images/facility_library.jpg",
      description:
        "Acara tahunan literasi sekolah di mana siswa mengenakan kostum tokoh cerita kesukaan mereka dan menyimak dongeng edukatif dari pustakawan.",
    },
    {
      id: "fieldtrip",
      title: "Field Trip Edukatif Agrowisata & Planetarium",
      category: "fieldtrip",
      categoryLabel: "Outing Class & Field Trip",
      date: "15 Oktober 2025",
      image: "/images/hero_school.jpg",
      description:
        "Pembelajaran luar kelas (outdoor learning) mengenalkan ekosistem tanaman organik, sains perbintangan, serta cinta lingkungan hidup.",
    },
  ];

  const filteredActivities =
    filter === "semua"
      ? activities
      : activities.filter((act) => act.category === filter);

  return (
    <section
      id="galeri-kegiatan"
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF3E9] border border-[#BDE3D3] text-xs font-bold text-[#167A5B]">
            <Camera className="w-4 h-4" />
            <span>Dokumentasi Kegiatan Sekolah</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#26332E]">
            Galeri Momen Ceria{" "}
            <span className="text-[#167A5B]">Siswa SD Negeri Banyubulu 2</span>
          </h2>
          <p className="text-[#68756F] text-sm sm:text-base">
            Potret kebahagiaan dan semangat belajar peserta didik kami dalam
            berbagai kegiatan akademik, kepramukaan, seni, dan karya.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {[
            { id: "semua", label: "Semua Momen" },
            { id: "akademik", label: "Akademik & STEM" },
            { id: "pramuka", label: "Pramuka & Karakter" },
            { id: "seni", label: "Seni & Budaya" },
            { id: "fieldtrip", label: "Field Trip & Outing" },
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

        {/* Activities Photo Grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredActivities.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -3 }}
                onClick={() => setModalItem(item)}
                className="bg-white rounded-2xl border border-[#E2ECE7] overflow-hidden shadow-xs hover:border-[#167A5B] hover:shadow-md cursor-pointer group flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#F1F7F3]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#26332E]/60 via-transparent to-transparent opacity-60" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#167A5B] text-white shadow-xs">
                        {item.categoryLabel}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-center gap-1.5 text-[11px] text-[#68756F] font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-[#167A5B]" />
                      <span>{item.date}</span>
                    </div>

                    <h3 className="text-base font-bold text-[#26332E] group-hover:text-[#167A5B] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#68756F] line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-4 pt-2 border-t border-[#E2ECE7] flex items-center justify-between text-xs text-[#167A5B] font-bold">
                  <span>Lihat Foto Lengkap</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Preview Modal */}
      <AnimatePresence>
        {modalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl border border-[#E2ECE7] max-w-2xl w-full relative shadow-2xl overflow-hidden space-y-4"
            >
              <button
                onClick={() => setModalItem(null)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 text-[#26332E] hover:bg-white shadow-md transition-colors"
                aria-label="Tutup foto"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64 sm:h-80 w-full bg-[#F1F7F3]">
                <Image
                  src={modalItem.image}
                  alt={modalItem.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-3 py-1 rounded-full font-bold bg-[#DDF3E9] text-[#167A5B] border border-[#BDE3D3]">
                    {modalItem.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1.5 text-[#68756F] font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-[#167A5B]" />
                    <span>{modalItem.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#26332E]">
                  {modalItem.title}
                </h3>
                <p className="text-sm text-[#4B5953] leading-relaxed">
                  {modalItem.description}
                </p>

                <div className="pt-3 border-t border-[#E2ECE7] flex justify-end">
                  <button
                    onClick={() => setModalItem(null)}
                    className="px-5 py-2.5 rounded-xl bg-[#167A5B] text-white font-bold text-xs hover:bg-[#126349] transition-colors"
                  >
                    Tutup Foto
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
