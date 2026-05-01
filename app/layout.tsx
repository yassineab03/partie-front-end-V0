import type { Metadata } from "next";
import "./global.css";
import { LanguageProvider } from '@/app/i18n/LanguageContext';

export const metadata: Metadata = {
  title: "ProjAI — Gestion de Projets Intelligente | EMSI",
  description:
    "Plateforme web de gestion de projets avec assistant IA (Gemini). Analyse automatique du CDC, Kanban, sprints, ressources, coûts et registre des risques.",
  keywords: ["gestion de projet", "IA", "Gemini", "Agile", "Kanban", "EMSI"],
  authors: [
    { name: "Abderrazik Yassine" },
    { name: "Ghazouani Abderrahman" },
    { name: "Essaoudi Soufiane" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="bg-background">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
