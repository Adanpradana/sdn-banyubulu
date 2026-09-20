"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import KegiatanGallery from "../components/KegiatanGallery";
import ApiImageGallery from "../components/ApiImageGallery";
import { Camera } from "lucide-react";

export default function GaleriPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#26332E] selection:bg-[#167A5B] selection:text-white">
      <Navbar />

      {/* Header */}
      <section className="pt-12 pb-10 bg-[#F1F7F3] border-b border-[#E2ECE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF3E9] border border-[#BDE3D3] text-xs font-bold text-[#167A5B]">
            <Camera className="w-4 h-4" />
            <span>Dokumentasi Kegiatan SD</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#26332E]">
            Galeri Kegiatan &{" "}
            <span className="text-[#167A5B]">Karya Siswa SD</span>
          </h1>
          <p className="text-[#68756F] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Dokumentasi lengkap momen ceria pembelajaran, pentas seni,
            perlombaan, perkemahan pramuka, serta galeri media Cloudinary live.
          </p>
        </div>
      </section>

      <ApiImageGallery />

      {/* Kegiatan Gallery Section */}
      <KegiatanGallery />

      <Footer />
    </main>
  );
}
