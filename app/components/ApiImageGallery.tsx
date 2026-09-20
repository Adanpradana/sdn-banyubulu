"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Camera,
  RefreshCw,
  Search,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Copy,
  Check,
  AlertCircle,
  ImageIcon,
  Layers,
} from "lucide-react";

export type ImageItem = {
  publicId: string;
  url: string;
  width?: number;
  height?: number;
  format?: string;
};

// Fallback demo data if Cloudinary credentials are not set or API returns empty array during dev
const DEMO_IMAGES: ImageItem[] = [
  {
    publicId: "kegiatan-robotik-2026",
    url: "/images/facility_lab.jpg",
    width: 1200,
    height: 800,
    format: "jpg",
  },
  {
    publicId: "pramuka-persami-sd",
    url: "/images/activity_scout.jpg",
    width: 1200,
    height: 800,
    format: "jpg",
  },
  {
    publicId: "pentas-tari-tradisional",
    url: "/images/activity_dance.jpg",
    width: 1200,
    height: 800,
    format: "jpg",
  },
  {
    publicId: "perpustakaan-literasi-anak",
    url: "/images/facility_library.jpg",
    width: 1200,
    height: 800,
    format: "jpg",
  },
  {
    publicId: "gedung-sekolah-banyubulu",
    url: "/images/hero_school.jpg",
    width: 1200,
    height: 800,
    format: "jpg",
  },
];

export default function ApiImageGallery() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isUsingFallback, setIsUsingFallback] = useState(false);

  // Search & Filter
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("all");

  // Lightbox Modal state
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const fetchImages = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/images");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();

      if (Array.isArray(data) && data.length > 0) {
        setImages(data);
        setIsUsingFallback(false);
      } else {
        if (data && data.error) {
          setError(data.error);
        }
        setImages(DEMO_IMAGES);
        setIsUsingFallback(true);
      }
    } catch (err: unknown) {
      console.error("Error fetching images from /api/images:", err);
      setError(
        "Gagal terhubung ke API Cloudinary (/api/images). Menampilkan galeri contoh.",
      );
      setImages(DEMO_IMAGES);
      setIsUsingFallback(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    await fetchImages();
  }, []);

  // Formats available in fetched images
  const availableFormats = Array.from(
    new Set(images.map((img) => img.format).filter(Boolean)),
  ) as string[];

  // Filtered images based on search & format
  const filteredImages = images.filter((img) => {
    const matchesSearch =
      img.publicId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (img.format &&
        img.format.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesFormat =
      selectedFormat === "all" ||
      (img.format && img.format.toLowerCase() === selectedFormat.toLowerCase());

    return matchesSearch && matchesFormat;
  });

  const handleCopyLink = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const selectedImage =
    selectedIndex !== null ? filteredImages[selectedIndex] : null;

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev! === 0 ? filteredImages.length - 1 : prev! - 1,
    );
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev! === filteredImages.length - 1 ? 0 : prev! + 1,
    );
  };

  return (
    <section className="py-12 bg-[#FAF9F5] min-h-[500px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Control Bar: Title, Search, Refresh */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E2ECE7]">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-lg bg-[#DDF3E9] text-[#167A5B]">
                <Camera className="w-5 h-5" />
              </span>
              <h2 className="text-2xl font-extrabold text-[#26332E]">
                Galeri Foto Kegiatan
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#68756F] mt-1">
              Galeri ini berisi kumpulan dokumentasi foto resmi dari berbagai
              kegiatan yang telah dilaksanakan. Setiap foto mengabadikan
              rangkaian momen, aktivitas, interaksi, serta kebersamaan yang
              terjadi selama kegiatan berlangsung. Melalui galeri ini, berbagai
              momen penting dapat tersimpan dan diakses kembali sebagai bagian
              dari dokumentasi serta arsip visual kegiatan.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#68756F]" />
              <input
                type="text"
                placeholder="Cari foto / nama file..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 text-xs rounded-xl bg-white border border-[#E2ECE7] focus:outline-none focus:border-[#167A5B] text-[#26332E]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#68756F] hover:text-[#26332E]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Refresh Button */}
            <button
              onClick={fetchImages}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-[#E2ECE7] hover:border-[#167A5B] hover:bg-[#F1F7F3] text-xs font-bold text-[#167A5B] transition-all disabled:opacity-50 cursor-pointer"
            >
              <RefreshCw
                className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`}
              />
              <span>Muat Ulang</span>
            </button>
          </div>
        </div>

        {/* Fallback Banner Notice */}
        {isUsingFallback && !loading && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-3.5 rounded-xl bg-[#FFF8E6] border border-[#FCD34D] text-[#B45309] text-xs flex items-start gap-2.5"
          >
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#D97706]" />
            <div>
              <span className="font-bold">Mode Galeri Contoh (Demo):</span>{" "}
              {error ||
                "Cloudinary API belum terhubung atau `.env` belum memiliki credential Cloudinary."}{" "}
              Menampilkan sampel foto kegiatan sekolah.
            </div>
          </motion.div>
        )}

        {/* Format Filters */}
        {availableFormats.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-[#68756F] mr-1 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" /> Format:
            </span>
            <button
              onClick={() => setSelectedFormat("all")}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedFormat === "all"
                  ? "bg-[#167A5B] text-white"
                  : "bg-white border border-[#E2ECE7] text-[#68756F] hover:text-[#26332E]"
              }`}
            >
              Semua ({images.length})
            </button>
            {availableFormats.map((fmt) => {
              const count = images.filter(
                (i) => i.format?.toLowerCase() === fmt.toLowerCase(),
              ).length;
              return (
                <button
                  key={fmt}
                  onClick={() => setSelectedFormat(fmt)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer ${
                    selectedFormat.toLowerCase() === fmt.toLowerCase()
                      ? "bg-[#167A5B] text-white"
                      : "bg-white border border-[#E2ECE7] text-[#68756F] hover:text-[#26332E]"
                  }`}
                >
                  {fmt} ({count})
                </button>
              );
            })}
          </div>
        )}

        {/* Loading Skeleton Grid */}
        {loading && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div
                key={n}
                className="bg-white rounded-2xl border border-[#E2ECE7] overflow-hidden animate-pulse"
              >
                <div className="h-48 bg-[#E2ECE7]" />
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-[#E2ECE7] rounded w-3/4" />
                  <div className="h-3 bg-[#E2ECE7] rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty Search Results */}
        {!loading && filteredImages.length === 0 && (
          <div className="mt-12 text-center py-12 bg-white rounded-2xl border border-[#E2ECE7]">
            <ImageIcon className="w-12 h-12 text-[#C4D6CD] mx-auto mb-3" />
            <h3 className="text-base font-bold text-[#26332E]">
              Tidak ada foto ditemukan
            </h3>
            <p className="text-xs text-[#68756F] mt-1 max-w-sm mx-auto">
              Coba kata kunci pencarian lain atau atur ulang filter format
              gambar.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedFormat("all");
              }}
              className="mt-4 px-4 py-2 bg-[#DDF3E9] text-[#167A5B] text-xs font-bold rounded-xl hover:bg-[#BDE3D3] transition-colors cursor-pointer"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* Image Grid */}
        {!loading && filteredImages.length > 0 && (
          <motion.div
            layout
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((img, idx) => (
                <motion.div
                  key={img.publicId + idx}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl border border-[#E2ECE7] overflow-hidden shadow-xs hover:border-[#167A5B] hover:shadow-md cursor-pointer group flex flex-col justify-between transition-all"
                  onClick={() => setSelectedIndex(idx)}
                >
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-[#F1F7F3]">
                    <Image
                      src={img.url}
                      alt={img.publicId}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Format Badge */}
                    {img.format && (
                      <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase bg-black/60 text-white backdrop-blur-xs">
                        {img.format}
                      </span>
                    )}

                    {/* Quick View Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <span className="p-2.5 rounded-full bg-white text-[#167A5B] shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                        <Maximize2 className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-3.5 border-t border-[#E2ECE7] space-y-1.5">
                    <p
                      className="text-xs font-bold text-[#26332E] truncate leading-tight group-hover:text-[#167A5B] transition-colors"
                      title={img.publicId}
                    >
                      {img.publicId}
                    </p>

                    <div className="flex items-center justify-between text-[11px] text-[#68756F]">
                      <span>
                        {img.width && img.height
                          ? `${img.width} × ${img.height}px`
                          : "Resolusi HD"}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyLink(img.url, img.publicId);
                        }}
                        className="p-1 rounded text-[#68756F] hover:text-[#167A5B] hover:bg-[#F1F7F3] transition-colors"
                        title="Salin URL Gambar"
                      >
                        {copiedId === img.publicId ? (
                          <Check className="w-3.5 h-3.5 text-[#167A5B]" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              className="bg-white rounded-2xl border border-[#E2ECE7] max-w-4xl w-full relative overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-4 border-b border-[#E2ECE7] flex items-center justify-between bg-white z-10">
                <div className="space-y-0.5 truncate pr-4">
                  <h3 className="text-sm sm:text-base font-bold text-[#26332E] truncate">
                    {selectedImage.publicId}
                  </h3>
                  <p className="text-xs text-[#68756F]">
                    {selectedImage.width && selectedImage.height
                      ? `${selectedImage.width} × ${selectedImage.height} px`
                      : "Cloudinary Image Resource"}{" "}
                    {selectedImage.format &&
                      `• ${selectedImage.format.toUpperCase()}`}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() =>
                      handleCopyLink(selectedImage.url, selectedImage.publicId)
                    }
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-[#E2ECE7] hover:border-[#167A5B] text-xs font-bold text-[#167A5B] transition-colors cursor-pointer"
                  >
                    {copiedId === selectedImage.publicId ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> Tersalin!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Salin Link
                      </>
                    )}
                  </button>

                  <a
                    href={selectedImage.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#167A5B] text-white hover:bg-[#126349] text-xs font-bold transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" /> Buka Asli
                  </a>

                  <button
                    onClick={() => setSelectedIndex(null)}
                    className="p-1.5 rounded-full hover:bg-[#E2ECE7] text-[#26332E] transition-colors ml-2 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Main Preview Container */}
              <div className="relative flex-1 bg-black/95 min-h-[300px] flex items-center justify-center p-4">
                <div className="relative w-full h-[55vh] max-h-[600px]">
                  <Image
                    src={selectedImage.url}
                    alt={selectedImage.publicId}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Left / Right Nav Arrows */}
                {filteredImages.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-colors cursor-pointer"
                      aria-label="Sebelumnya"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-colors cursor-pointer"
                      aria-label="Berikutnya"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-3 bg-[#FAF9F5] border-t border-[#E2ECE7] text-center text-xs text-[#68756F]">
                Gambar {selectedIndex! + 1} dari {filteredImages.length}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
