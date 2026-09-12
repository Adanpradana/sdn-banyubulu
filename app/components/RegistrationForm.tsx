"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Send,
  CheckCircle2,
  Sparkles,
  Phone,
  User,
  School,
  BookOpen,
} from "lucide-react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    namaAnak: "",
    asalTK: "",
    whatsapp: "",
    peminatan: "reguler",
    catatan: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.namaAnak || !formData.whatsapp) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger Celebration Confetti explosion
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#167A5B", "#F4C95D", "#E89B5A", "#0284C7"],
      });
    }, 700);
  };

  return (
    <section
      id="pendaftaran"
      className="py-16 relative overflow-hidden bg-[#F1F7F3] border-t border-[#E2ECE7]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF3E9] border border-[#BDE3D3] text-xs font-bold text-[#167A5B]">
            <Sparkles className="w-4 h-4 text-[#167A5B]" />
            <span>Pendaftaran Siswa Baru SD 2026/2027</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#26332E]">
            Formulir PPDB{" "}
            <span className="text-[#167A5B]">SD Negeri Banyubulu 2</span>
          </h2>
          <p className="text-[#68756F] text-sm sm:text-base">
            Silakan isi formulir pendaftaran Kelas 1 SD / Pindahan di bawah ini
            untuk mengamankan kuota siswa baru.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white p-6 sm:p-10 rounded-2xl border border-[#E2ECE7] shadow-md"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-[#DDF3E9] text-[#167A5B] border border-[#BDE3D3] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-[#26332E]">
                Pendaftaran SD Berhasil Dikirim! 🎉
              </h3>
              <p className="text-[#4B5953] text-sm max-w-md mx-auto leading-relaxed">
                Terima kasih! Data pendaftaran untuk ananda{" "}
                <span className="text-[#167A5B] font-bold">
                  {formData.namaAnak}
                </span>{" "}
                telah kami terima. Tim admisi SD Negeri Banyubulu 2 akan
                menghubungi nomor WhatsApp{" "}
                <span className="text-[#167A5B] font-bold">
                  {formData.whatsapp}
                </span>{" "}
                dalam waktu 1x24 jam untuk undangan jadwal observasi cilik.
              </p>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    namaAnak: "",
                    asalTK: "",
                    whatsapp: "",
                    peminatan: "reguler",
                    catatan: "",
                  });
                }}
                className="mt-4 px-6 py-2.5 rounded-xl bg-[#F1F7F3] border border-[#E2ECE7] text-[#26332E] text-xs font-bold hover:bg-[#E2ECE7] transition-colors"
              >
                Isi Formulir Baru
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Nama Calon Murid */}
                <div>
                  <label className="block text-xs font-bold text-[#26332E] mb-2">
                    Nama Lengkap Calon Murid SD *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#68756F] absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Ananda Muhammad Rayhan"
                      value={formData.namaAnak}
                      onChange={(e) =>
                        setFormData({ ...formData, namaAnak: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#E2ECE7] text-[#26332E] text-xs sm:text-sm focus:outline-none focus:border-[#167A5B] transition-colors"
                    />
                  </div>
                </div>

                {/* Asal TK / PAUD */}
                <div>
                  <label className="block text-xs font-bold text-[#26332E] mb-2">
                    Asal Sekolah TK / RA / PAUD *
                  </label>
                  <div className="relative">
                    <School className="w-4 h-4 text-[#68756F] absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="Contoh: TK Islam Al-Azhar / TK Pembina"
                      value={formData.asalTK}
                      onChange={(e) =>
                        setFormData({ ...formData, asalTK: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#E2ECE7] text-[#26332E] text-xs sm:text-sm focus:outline-none focus:border-[#167A5B] transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* No WhatsApp Orang Tua */}
                <div>
                  <label className="block text-xs font-bold text-[#26332E] mb-2">
                    No. WhatsApp Orang Tua / Wali *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#68756F] absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="081234567890"
                      value={formData.whatsapp}
                      onChange={(e) =>
                        setFormData({ ...formData, whatsapp: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#E2ECE7] text-[#26332E] text-xs sm:text-sm focus:outline-none focus:border-[#167A5B] transition-colors"
                    />
                  </div>
                </div>

                {/* Pilihan Program SD */}
                <div>
                  <label className="block text-xs font-bold text-[#26332E] mb-2">
                    Pilihan Program SD Utama *
                  </label>
                  <div className="relative">
                    <BookOpen className="w-4 h-4 text-[#68756F] absolute left-3.5 top-3.5" />
                    <select
                      value={formData.peminatan}
                      onChange={(e) =>
                        setFormData({ ...formData, peminatan: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#E2ECE7] text-[#26332E] text-xs sm:text-sm focus:outline-none focus:border-[#167A5B] transition-colors"
                    >
                      <option value="reguler">
                        Kelas Reguler Unggulan Merdeka
                      </option>
                      <option value="bilingual">
                        Kelas International Cambridge Primary
                      </option>
                      <option value="tahfiz">
                        Kelas Tahfiz & Karakter Islami
                      </option>
                      <option value="stem">STEM & Robotik Kids Pathway</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Catatan Ortu */}
              <div>
                <label className="block text-xs font-bold text-[#26332E] mb-2">
                  Catatan / Pertanyaan Orang Tua (Opsional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Contoh: Saya ingin menanyakan kesiapan masuk anak usia 6 tahun..."
                  value={formData.catatan}
                  onChange={(e) =>
                    setFormData({ ...formData, catatan: e.target.value })
                  }
                  className="w-full p-4 rounded-xl bg-[#FAF9F5] border border-[#E2ECE7] text-[#26332E] text-xs sm:text-sm focus:outline-none focus:border-[#167A5B] transition-colors"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#167A5B] hover:bg-[#126349] text-white font-extrabold text-sm transition-colors shadow-xs disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Mengirim Pendaftaran...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Kirim Pendaftaran SD & Ambil Jadwal Observasi</span>
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
