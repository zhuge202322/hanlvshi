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
            ? "bg-white/90 backdrop-blur-3xl border-b border-black/5 py-4 shadow-sm"
            : "bg-white/70 backdrop-blur-2xl py-6"
        )}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group" onClick={closeMobileMenu}>
            <div className="w-10 h-10 rounded-full bg-[#775a19] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Scale className="text-white w-5 h-5" />
            </div>
            <span className="text-xl md:text-2xl font-serif text-[#775a19] tracking-tighter">
              韩曼莉律师团队
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#4e4639] font-sans font-medium text-[16px] hover:text-[#775a19] transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#775a19] after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#1a1c1c] hover:text-[#775a19] transition-colors"
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
          "fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-50 transition-transform duration-300 ease-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-lg font-serif text-[#775a19]">菜单</span>
            <button
              onClick={closeMobileMenu}
              className="text-[#1a1c1c] hover:text-[#775a19] transition-colors"
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
                className="text-[#1a1c1c] font-sans font-medium text-[16px] hover:text-[#775a19] hover:bg-[#f9f9f9] py-3 px-4 rounded-lg transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-8 border-t border-[#dadada]">
            <p className="text-[14px] text-[#4e4639] mb-2">联系我们</p>
            <a 
              href="tel:02087077500" 
              className="text-[#775a19] font-semibold text-[16px] hover:underline"
            >
              020-8707 7500
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
