import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Колёсница",
  description: "Ивент созданный стримером F1ashko",
  openGraph: {
    type: "website",
    url: "https://kolyasnica.vercel.app/",
    title: "Колёсница",
    description: "Ивент созданный стримером F1ashko",
    siteName: "Колёсница",
    images: [
      {
        url: "https://kolyasnica.vercel.app/img.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
