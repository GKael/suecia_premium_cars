import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suécia Premium Cars | Serviços Automotivos Premium",
  description: "Oficina Especializada em Volvo e atendimento premium Multimarcas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${outfit.className} bg-dark text-light antialiased selection:bg-primary selection:text-dark overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
