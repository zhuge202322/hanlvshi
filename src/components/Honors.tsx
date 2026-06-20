"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Award } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const honors = [
  { year: "2026", title: "金牌调解员", org: "广州市调解协会" },
  { year: "2024", title: "优秀公益律师奖", org: "广州市律师协会" },
  { year: "2022", title: "匠心律师", org: "广州市律师协会" },
  { year: "2019", title: "优秀论文奖", org: "广东省法学会婚姻家庭法学研究会" },
];

export default function Honors() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".honor-item",
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: container });

  return (
    <section id="honors" className="py-[120px] relative overflow-hidden bg-[#f3f3f3]" ref={container}>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#775a19]/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        <div className="text-center mb-20">
          <h2 className="font-sans text-[12px] font-semibold tracking-[0.2em] text-[#775a19] uppercase mb-3">实力见证</h2>
          <h3 className="font-serif text-[40px] md:text-[48px] text-[#1a1c1c] mb-6 leading-[1.2]">荣誉证书</h3>
          <p className="font-sans text-[18px] text-[#4e4639] max-w-2xl mx-auto leading-[1.6]">
            每一份荣誉都是对我们专业能力与服务品质的最高认可。
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-black/10 ml-4 md:ml-0 md:pl-0">
            {honors.map((honor, index) => (
              <div key={index} className="honor-item relative pl-8 md:pl-0 mb-12 last:mb-0 md:flex items-center gap-8 group">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-[#775a19] rounded-full -translate-x-[6.5px] md:-translate-x-1/2 mt-2 md:mt-0 shadow-[0_0_10px_rgba(119,90,25,0.4)] group-hover:scale-150 transition-transform" />
                
                {/* Year - Desktop: left side, Mobile: top */}
                <div className="md:w-1/2 md:text-right md:pr-12 mb-2 md:mb-0">
                  <span className="font-serif text-[32px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a2a5ac] to-[#5b5f65] group-hover:from-[#c5a059] group-hover:to-[#775a19] transition-colors duration-500">
                    {honor.year}
                  </span>
                </div>

                {/* Content - Desktop: right side, Mobile: bottom */}
                <div className="md:w-1/2 md:pl-12">
                  <div className="glass-card p-8 rounded-[1.5rem] bg-white/70 group-hover:border-[#775a19]/30 transition-colors">
                    <Award className="w-8 h-8 text-[#775a19] mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    <h4 className="font-serif text-[24px] text-[#1a1c1c] mb-2 leading-[1.4]">{honor.title}</h4>
                    <p className="font-sans text-[16px] text-[#4e4639] leading-[1.6]">{honor.org}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
