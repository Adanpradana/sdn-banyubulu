"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TimelinePPDB from "../components/TimelinePPDB";
import RegistrationForm from "../components/RegistrationForm";
import TestimoniAlumni from "../components/TestimoniAlumni";
import { Sparkles } from "lucide-react";

export default function PendaftaranPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#26332E] selection:bg-[#167A5B] selection:text-white">
      <Navbar />

      {/* Header */}
      <section className="pt-12 pb-10 bg-[#F1F7F3] border-b border-[#E2ECE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF3E9] border border-[#BDE3D3] text-xs font-bold text-[#167A5B]">
            <Sparkles className="w-4 h-4" />
            <span>PPDB SD Gelombang 1 Dibuka</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#26332E]">
            Pendaftaran Peserta Didik Baru <span className="text-[#167A5B]">SD 2026/2027</span>
          </h1>
          <p className="text-[#68756F] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Daftarkan putra-putri tercinta Anda untuk Kelas 1 Baru atau Siswa Pindahan SD. Dapatkan kesempatan voucher potongan biaya pendaftaran!
          </p>
        </div>
      </section>

      <TimelinePPDB />
      <RegistrationForm />
      <TestimoniAlumni />

      <Footer />
    </main>
  );
}
