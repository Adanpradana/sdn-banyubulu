"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FacilityGallery from "../components/FacilityGallery";
import { Building2 } from "lucide-react";

export default function FasilitasPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#26332E] selection:bg-[#167A5B] selection:text-white">
      <Navbar />

      {/* Header */}
      <section className="pt-12 pb-10 bg-[#F1F7F3] border-b border-[#E2ECE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF3E9] border border-[#BDE3D3] text-xs font-bold text-[#167A5B]">
            <Building2 className="w-4 h-4" />
            <span>Fasilitas Smart Campus SD</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#26332E]">
            Sarana & Fasilitas <span className="text-[#167A5B]">Ramah Anak</span>
          </h1>
          <p className="text-[#68756F] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Eksplorasi ruang kelas interaktif, laboratorium STEM & Robotik cilik, perpustakaan cerita anak, dan fasilitas olahraga terpadu.
          </p>
        </div>
      </section>

      <FacilityGallery />

      <Footer />
    </main>
  );
}
