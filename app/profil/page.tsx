"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import KeunggulanSection from "../components/KeunggulanSection";
import ProgramSection from "../components/ProgramSection";
import { BookOpen, Target, Heart } from "lucide-react";

export default function ProfilPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#26332E] selection:bg-[#167A5B] selection:text-white">
      <Navbar />

      {/* Header */}
      <section className="pt-12 pb-10 bg-[#F1F7F3] border-b border-[#E2ECE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF3E9] border border-[#BDE3D3] text-xs font-bold text-[#167A5B]">
            <BookOpen className="w-4 h-4" />
            <span>Profil & Visi Misi Sekolah</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#26332E]">
            Profil & Program{" "}
            <span className="text-[#167A5B]">SD Negeri Banyubulu 2</span>
          </h1>
          <p className="text-[#68756F] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Menyelenggarakan pendidikan dasar holistik berbasis karakter mulia,
            kemampuan komputasional, serta wawasan global bagi generasi penerus
            bangsa.
          </p>
        </div>
      </section>

      {/* Visi Misi Cards */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2ECE7] shadow-xs space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#DDF3E9] text-[#167A5B] flex items-center justify-center border border-[#BDE3D3]">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-[#26332E]">
                Visi Utama Sekolah
              </h2>
            </div>
            <p className="text-[#4B5953] text-sm leading-relaxed">
              "Menjadi Sekolah Dasar unggulan terdepan yang terpercaya dalam
              membentuk peserta didik berkarakter mulia, cerdas berlogika,
              kreatif bereksperimen, serta siap bersaing secara global."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2ECE7] shadow-xs space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFF8E7] text-[#D97706] flex items-center justify-center border border-[#F4C95D]/40">
                <Heart className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-[#26332E]">
                Misi Pembelajaran
              </h2>
            </div>
            <ul className="text-[#4B5953] text-xs sm:text-sm space-y-2 list-disc list-inside leading-relaxed">
              <li>
                Menerapkan metode pembelajaran Kurikulum Merdeka yang aktif dan
                menyenangkan.
              </li>
              <li>
                Membiasakan karakter islami, kepedulian sosial, dan sopan santun
                harian.
              </li>
              <li>
                Mengenalkan logika sains, teknologi, dan bahasa Inggris sejak
                usia dini.
              </li>
              <li>
                Menyediakan lingkungan belajar yang aman, sehat, dan ramah anak.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      <KeunggulanSection />
      <ProgramSection />

      <Footer />
    </main>
  );
}
