import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "SD Negeri Banyubulu 2 - Sekolah Dasar Unggulan Berkarakter & Ceria",
  description:
    "SD Negeri Banyubulu 2 adalah Sekolah Dasar unggulan dengan Kurikulum Merdeka, Cambridge Primary, Pembentukan Karakter, STEM Kids, dan Lingkungan Ramah Anak. PPDB 2026/2027 Resmi Dibuka.",
  keywords: [
    "SD Negeri Banyubulu 2",
    "Sekolah Dasar Unggulan",
    "PPDB SD 2026",
    "SD Terbaik Jakarta",
    "Pendaftaran SD 2026",
    "Kurikulum Merdeka SD",
    "Sekolah Dasar Islam Plus",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${jakartaSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#060911] text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
