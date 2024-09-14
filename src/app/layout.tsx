import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Touring Car",
  description: "Encontre o seu veículo dos sonhos conosco!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`antialiased max-w-screen-2xl min-h-screen w-screen flex flex-col items-center mx-auto pt-8 bg-faint-white text-black overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
