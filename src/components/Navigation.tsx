"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Scale, Menu, X } from "lucide-react";
import { clsx } from "clsx";

const navItems = [
  { name: "首页", href: "/" },
  { name: "个人介绍", href: "/han-manli" },
  { name: "法律产品", href: "/product" },
  { name: "团队介绍", href: "/team" },
  { name: "专业文章", href: "/articles" },
  { name: "荣誉证书", href: "/certificates" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 关闭移动菜单
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 w-full z-50 transition-all duration-500",
          scrolled
            ? "bg-[#1a2332]/95 backdrop-blur-3xl border-b border-[#c5a059]/20 py-4 shadow-lg"
            : "bg-[#1a2332]/90 backdrop-blur-2xl py-6"
        )}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group" onClick={closeMobileMenu}>
            <div className="w-10 h-10 rounded-full bg-[#c5a059] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Scale className="text-[#1a2332] w-5 h-5" />
            </div>
            <span className="text-xl md:text-2xl font-serif text-[#c5a059] tracking-tighter">
              韩曼莉律师团队
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/90 font-sans font-medium text-[16px] hover:text-[#c5a059] transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#c5a059] after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-[#c5a059] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={clsx(
          "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu Panel */}
      <div
        className={clsx(
          "fixed top-0 right-0 h-full w-[280px] bg-[#1a2332] shadow-2xl z-50 transition-transform duration-300 ease-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-lg font-serif text-[#c5a059]">菜单</span>
            <button
              onClick={closeMobileMenu}
              className="text-white hover:text-[#c5a059] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMobileMenu}
                className="text-white/90 font-sans font-medium text-[16px] hover:text-[#c5a059] hover:bg-white/5 py-3 px-4 rounded-lg transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-[14px] text-white/60 mb-2">联系我们</p>
            <a 
              href="tel:02087077500" 
              className="text-[#c5a059] font-semibold text-[16px] hover:underline"
            >
              020-8707 7500
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
