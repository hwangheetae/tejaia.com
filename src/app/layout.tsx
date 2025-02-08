import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/config/ThemeProvider";
import Notification from "@/components/notification/Notification";
import Header from "@/components/header/page";
import Footer from "@/components/footer/Footer";
import Giscus from "@/components/giscus/Giscus";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "희태의 개발블로그",
  description: "노는게 제일 좋아",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          <Notification />
          <div className="flex-1 w-full max-w-3xl mx-auto px-4">
            <main>{children}</main>
            <Giscus />
          </div>
          <Footer />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
