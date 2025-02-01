import type { Metadata } from "next";
import Header from "@/components/header/page";
import "./globals.css";

export const metadata: Metadata = {
  title: "tejaia.blog",
  description: "노는게 제일 좋아",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="flex-1 w-full max-w-4xl mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
