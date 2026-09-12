"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Building2, CheckCircle2 } from "lucide-react";

export default function FacilityGallery() {
  const [selectedFacility, setSelectedFacility] = useState(0);

  const facilities = [
    {
      title: "Laboratorium STEM & Robotik Cilik",
      category: "Teknologi & Inovasi Kids",
      image: "/images/facility_lab.jpg",
      description:
        "Ruang komputer dan robotika anak yang dilengkapi perangkat komputer layar sentuh, kit LEGO Education Wedo 2.0, dan media eksperimen sains anak.",
      specs: ["Interactive Touch Computers", "LEGO Education Robotics Kit", "Safety STEM Tools for Kids"],
    },
    {
      title: "Perpustakaan Anak & Corner Mendongeng",
      category: "Literasi & Cerita Ceria",
      image: "/images/facility_library.jpg",
      description:
        "Koleksi 10.000+ buku cerita bergambar, buku ensiklopedia anak, panggung mendongeng, dan karpet santai berwarna-warni yang membangkitkan minat baca.",
      specs: ["Storytelling Stage", "Ribuan Buku Bergambar Bilingual", "Karpet & Cushion Sofa Empuk"],
    },
    {
      title: "Smart Classroom SD Ber-AC",
      category: "Ruang Kelas Ceria",
      image: "/images/hero_school.jpg",
      description:
        "Ruang kelas berpendingin udara yang dilengkapi Smart Touchboard 75-inch, meja kursi modular fleksibel, dan sudut baca mini di setiap kelas.",
      specs: ["Interactive Smart Board 75\"", "Meja Kursi Warna-Warni Ergonomis", "CCTV & Air Purifier HEPA"],
    },
  ];

  const current = facilities[selectedFacility];

  return (
    <section id="fasilitas" className="py-16 bg-[#F1F7F3] relative overflow-hidden border-y border-[#E2ECE7]">
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
            <Building2 className="w-4 h-4" />
            <span>Fasilitas SD Ramah Anak</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#26332E]">
            Fasilitas Sekolah <span className="text-[#167A5B]">Aman, Nyaman & Modern</span>
          </h2>
          <p className="text-[#68756F] text-sm sm:text-base">
            Mendukung kegiatan belajar, bermain, dan eksplorasi bakat anak dalam lingkungan yang higienis dan terawasi.
          </p>
        </motion.div>

        {/* Facility Selector Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {facilities.map((fac, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedFacility(idx)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                selectedFacility === idx
                  ? "bg-[#167A5B] text-white border-[#167A5B] shadow-xs font-bold"
                  : "bg-white text-[#68756F] border-[#E2ECE7] hover:text-[#26332E] hover:bg-[#FAF9F5]"
              }`}
            >
              {fac.title}
            </motion.button>
          ))}
        </div>

        {/* Active Facility Card Display */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFacility}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2ECE7] shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Image Side */}
                <div className="lg:col-span-7 relative rounded-xl overflow-hidden group border border-[#E2ECE7]">
                  <Image
                    src={current.image}
                    alt={current.title}
                    width={800}
                    height={500}
                    className="w-full h-[340px] sm:h-[400px] object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#26332E]/60 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#167A5B] text-white shadow-xs">
                      {current.category}
                    </span>
                  </div>
                </div>

                {/* Text Side */}
                <div className="lg:col-span-5 space-y-5">
                  <h3 className="text-2xl font-bold text-[#26332E]">{current.title}</h3>
                  <p className="text-[#68756F] text-sm leading-relaxed">
                    {current.description}
                  </p>

                  <div className="space-y-3 pt-2 border-t border-[#E2ECE7]">
                    <div className="text-xs font-bold text-[#68756F] uppercase tracking-wider">
                      Fasilitas Kunci:
                    </div>
                    {current.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-[#26332E]">
                        <CheckCircle2 className="w-4 h-4 text-[#167A5B] flex-shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
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
