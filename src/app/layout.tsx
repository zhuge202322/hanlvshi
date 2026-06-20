import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "致远律师团队 | 秉持公正 追求卓越",
  description: "专业、严谨、高效的法律服务团队",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className="h-full antialiased scroll-smooth"
    >
      <body className="min-h-full flex flex-col selection:bg-primary-container selection:text-on-primary-container">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <footer className="py-8 text-center text-on-surface-variant border-t border-black/5 mt-20">
          <p>© {new Date().getFullYear()} 致远律师团队. 保留所有权利.</p>
        </footer>
      </body>
    </html>
  );
}
