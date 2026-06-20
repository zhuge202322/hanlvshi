"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, BookOpen } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const articles = [
  {
    title: "意定监护：单身、失独、丁克人群的晚年尊严保障",
    date: "2026-05-12",
    category: "财富传承",
    excerpt: "深入解析意定监护制度在实务中的运用，探讨单身或无子女群体如何通过法律提前规划，确保晚年医疗、财产与照护的自主权。"
  },
  {
    title: "财富保护：家族企业股权代持的法律风险与防范",
    date: "2026-04-28",
    category: "公司法务",
    excerpt: "结合真实案例，分析家族企业中常见的股权代持“隐雷”，并提供关于代持协议审查、显名退出机制及资产隔离的专业建议。"
  },
  {
    title: "人财保传：特殊儿童家庭如何建立终身守护机制",
    date: "2026-03-15",
    category: "特殊人群",
    excerpt: "针对心智障碍等特殊需求家庭，拆解如何通过复合监护、特殊需要信托与遗嘱设计的组合拳，实现跨代际的长期照护与资产安全。"
  }
];

export default function Articles() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".article-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: container });

  return (
    <section id="articles" className="py-[120px] relative bg-white" ref={container}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-black/5 pb-8">
          <div>
            <h2 className="font-sans text-[12px] font-semibold tracking-[0.2em] text-[#775a19] uppercase mb-3">专业洞察</h2>
            <h3 className="font-serif text-[40px] md:text-[48px] text-[#1a1c1c] leading-[1.2]">专业文章</h3>
          </div>
          <button className="flex items-center gap-2 font-sans text-[14px] font-semibold text-[#1a1c1c] hover:text-[#775a19] transition-colors group uppercase tracking-widest">
            查看全部
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <article key={i} className="article-card group cursor-pointer glass-card p-6 rounded-[1.5rem]">
              <div className="h-48 rounded-[1rem] bg-[#eeeeee] mb-6 overflow-hidden relative border border-black/5">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10" />
                <div className="w-full h-full bg-[#f9f9f9] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <BookOpen className="w-12 h-12 text-[#dadada]" />
                </div>
                <div className="absolute top-4 left-4 z-20 px-4 py-1.5 bg-white/90 backdrop-blur text-[#775a19] font-sans text-[12px] font-semibold tracking-wider rounded-full shadow-sm">
                  {article.category}
                </div>
              </div>
              <div className="flex items-center gap-4 font-sans text-[14px] text-[#5d5e61] mb-4">
                <time>{article.date}</time>
                <div className="w-1 h-1 rounded-full bg-[#dadada]" />
                <span>5 min read</span>
              </div>
              <h4 className="font-serif text-[24px] text-[#1a1c1c] mb-3 group-hover:text-[#775a19] transition-colors line-clamp-2 leading-[1.4]">
                {article.title}
              </h4>
              <p className="font-sans text-[16px] text-[#4e4639] line-clamp-3 leading-[1.6]">
                {article.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
