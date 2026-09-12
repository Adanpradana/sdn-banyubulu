"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EkskulSection from "../components/EkskulSection";
import { Trophy } from "lucide-react";

export default function EkstrakurikulerPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#26332E] selection:bg-[#167A5B] selection:text-white">
      <Navbar />

      {/* Header */}
      <section className="pt-12 pb-10 bg-[#F1F7F3] border-b border-[#E2ECE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF3E9] border border-[#BDE3D3] text-xs font-bold text-[#167A5B]">
            <Trophy className="w-4 h-4" />
            <span>Ekstrakurikuler & Klub Bakat</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#26332E]">
            Pengembangan Potensi <span className="text-[#167A5B]">Bakat & Minat Anak</span>
          </h1>
          <p className="text-[#68756F] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Menyediakan 30+ kegiatan ekstrakurikuler yang gembira, aman, dan mendidik untuk mengasah bakat seni, olahraga, sains, dan kepemimpinan.
          </p>
        </div>
      </section>

      <EkskulSection />

      <Footer />
    </main>
  );
}
