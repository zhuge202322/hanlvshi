"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Building2, Lightbulb, Scale, Users, FileSignature, ShieldAlert } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const products = [
  {
    title: "人财保·传产品",
    desc: "A类特殊人群“复合监护+监督+遗产管理+财富传承”一体化解决方案，提供人身与财产双重保障。",
    icon: ShieldAlert,
  },
  {
    title: "私人定制服务",
    desc: "针对高净值人群提供专属私人法律顾问，涵盖家庭风险防范、婚前/婚内财产规划。",
    icon: Users,
  },
  {
    title: "家事诉讼争议",
    desc: "代理重大疑难离婚财产分割、继承纠纷、抚养权变更及避债效力争议案件。",
    icon: Scale,
  },
  {
    title: "家族企业专项",
    desc: "提供家族企业股权顶层设计、股权激励、IPO项目及家族企业法律顾问服务。",
    icon: Building2,
  },
  {
    title: "人财保全计划",
    desc: "围绕特殊人群监护、监督、遗产管理与资产安全，防范资产流失与侵占。",
    icon: Lightbulb,
  },
  {
    title: "家族信托与规划",
    desc: "综合运用信托、保险、遗嘱等工具，实现家族财富的安全隔离与跨代传承。",
    icon: FileSignature,
  }
];

export default function LegalProducts() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(
      ".section-header > *",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" }
    )
    .fromTo(
      ".product-card",
      { y: 50, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.2)" },
      "-=0.4"
    );
  }, { scope: container });

  return (
    <section id="products" className="py-[120px] relative bg-white" ref={container}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        <div className="section-header text-center mb-20">
          <h2 className="font-sans text-[12px] font-semibold tracking-[0.2em] text-[#775a19] uppercase mb-3">核心业务</h2>
          <h3 className="font-serif text-[40px] md:text-[48px] text-[#1a1c1c] mb-6 leading-[1.2]">法律产品服务</h3>
          <p className="font-sans text-[18px] text-[#4e4639] max-w-2xl mx-auto leading-[1.6]">
            我们提供多维度、深层次的专业法律服务，以应对不断变化的商业环境和复杂的法律挑战。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="product-card group relative p-10 rounded-[1.5rem] glass-card overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-[0.75rem] bg-[#775a19]/10 border border-[#775a19]/20 flex items-center justify-center mb-6 group-hover:bg-[#775a19] transition-colors duration-500">
                  <product.icon className="w-7 h-7 text-[#775a19] group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h4 className="font-serif text-[24px] text-[#1a1c1c] mb-4">{product.title}</h4>
                <p className="font-sans text-[16px] text-[#4e4639] leading-[1.6] mb-8">
                  {product.desc}
                </p>
                
                <div className="flex items-center text-[14px] font-semibold text-[#775a19] group-hover:text-[#4e3700] transition-colors cursor-pointer uppercase tracking-widest">
                  了解详情
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
