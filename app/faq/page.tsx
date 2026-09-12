"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FaqSection from "../components/FaqSection";
import { HelpCircle, Phone, Mail, Clock } from "lucide-react";

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#26332E] selection:bg-[#167A5B] selection:text-white">
      <Navbar />

      {/* Header */}
      <section className="pt-12 pb-10 bg-[#F1F7F3] border-b border-[#E2ECE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF3E9] border border-[#BDE3D3] text-xs font-bold text-[#167A5B]">
            <HelpCircle className="w-4 h-4" />
            <span>Pusat Bantuan & Kontak SD</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#26332E]">
            Pertanyaan Umum &{" "}
            <span className="text-[#167A5B]">Kontak Admisi</span>
          </h1>
          <p className="text-[#68756F] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Temukan jawaban atas pertanyaan Ayah/Bunda seputar pendaftaran SD
            atau hubungi tim admisi kami langsung.
          </p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#E2ECE7] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#DDF3E9] text-[#167A5B] flex items-center justify-center border border-[#BDE3D3]">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#26332E]">
              Telepon & WhatsApp
            </h3>
            <p className="text-xs text-[#68756F]">
              Hubungi tim admisi SD untuk respon cepat:
            </p>
            <div className="text-xs font-bold text-[#167A5B]">
              0812-3456-7890 / (021) 5890-4321
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E2ECE7] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center border border-[#BAE6FD]">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#26332E]">
              Email Resmi SD
            </h3>
            <p className="text-xs text-[#68756F]">
              Kirimkan surat pertanyaan ke:
            </p>
            <div className="text-xs font-bold text-[#167A5B]">
              sd.ppdb@garuda.sch.id
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E2ECE7] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFF8E7] text-[#D97706] flex items-center justify-center border border-[#F4C95D]/40">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#26332E]">
              Jam Layanan Admisi
            </h3>
            <p className="text-xs text-[#68756F]">
              Senin - Jumat: 07.30 - 15.30 WIB
            </p>
            <div className="text-xs font-bold text-[#D97706]">
              Sabtu: 08.00 - 12.00 WIB
            </div>
          </div>
        </div>
      </section>

      <FaqSection />

      <Footer />
    </main>
  );
}
