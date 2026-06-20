import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "韩曼莉律师团队 | 专业财富传承与家事法律服务",
  description: "北京瀛和（广州）律师事务所韩曼莉律师团队，专注家族财富传承、家事治理、企业合规、争议解决等专业法律服务",
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
          <p>© {new Date().getFullYear()} 韩曼莉律师团队. 保留所有权利.</p>
        </footer>
      </body>
    </html>
  );
}
