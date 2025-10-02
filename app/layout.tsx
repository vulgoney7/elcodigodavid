import type React from "react";
// A importação está correta
import { GeistSans } from 'geist/font/sans';
import { Playfair_Display } from "next/font/google";
import "./globals.css";

// CORREÇÃO: Não chame GeistSans como uma função.
// Ela já é o objeto da fonte que precisamos.
// Apenas a fonte do Google Fonts (Playfair) precisa ser chamada como função.
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "El Código David - Fortalece la Fe de tu Hijo",
  description: "Guía completa para padres que desean blindar la fe de sus hijos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // CORREÇÃO: Use a variável da GeistSans diretamente.
    <html lang="es" className={`${GeistSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

