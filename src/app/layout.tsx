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
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
