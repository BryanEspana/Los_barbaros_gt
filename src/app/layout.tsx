import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Los Bárbaros GT | Banda de Covers en Vivo — Guatemala",
  description:
    "Los Bárbaros: banda de covers en vivo para bodas, corporativos, cumpleaños y eventos privados en Guatemala. Energía, versatilidad y el mejor repertorio. ¡Cotiza tu evento hoy!",
  keywords: [
    "banda covers guatemala",
    "música en vivo guatemala",
    "banda para bodas guatemala",
    "banda para eventos guatemala",
    "Los Bárbaros GT",
    "cover band guatemala",
    "música para fiestas",
    "banda rock en español",
  ],
  openGraph: {
    title: "Los Bárbaros GT | Música en Vivo para Eventos",
    description:
      "Energía, versatilidad y el mejor repertorio para una noche inolvidable. Banda de covers en vivo en Guatemala.",
    type: "website",
    locale: "es_GT",
    siteName: "Los Bárbaros GT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-screen grain-overlay">{children}</body>
    </html>
  );
}
