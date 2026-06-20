"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Phone } from "lucide-react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".hero-reveal",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.2 }
    )
    .fromTo(
      ".hero-image",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    );
  }, { scope: container });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-white" ref={container}>
      {/* Background ambient effects */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#775a19]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#5d5e61]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1280px] mx-auto w-full px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* Text Content Side */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 mt-12 lg:mt-0">
          <span className="hero-reveal font-sans text-[12px] font-semibold text-[#775a19] tracking-[0.4em] mb-6 block uppercase">
            北京瀛和（广州）律师事务所
          </span>
          <h1 className="hero-reveal font-serif text-[64px] leading-none mb-4 text-[#1a1c1c] gold-glow">
            韩曼莉
          </h1>
          <h2 className="hero-reveal font-serif text-[32px] text-[#c5a059] mb-8 max-w-xl">
            高级合伙人 / 瀛和家族财富传承中心主任
          </h2>
          
          <div className="flex flex-wrap gap-12 mb-12">
            <div className="hero-reveal flex flex-col">
              <span className="font-serif text-[32px] text-[#1a1c1c] font-bold">20+</span>
              <span className="font-sans text-[12px] text-[#4e4639] uppercase font-semibold tracking-wider">执业经验</span>
            </div>
            <div className="hero-reveal flex flex-col">
              <span className="font-serif text-[32px] text-[#1a1c1c] font-bold">1000+</span>
              <span className="font-sans text-[12px] text-[#4e4639] uppercase font-semibold tracking-wider">项目落地</span>
            </div>
            <div className="hero-reveal flex flex-col">
              <span className="font-serif text-[32px] text-[#1a1c1c] font-bold">1000+</span>
              <span className="font-sans text-[12px] text-[#4e4639] uppercase font-semibold tracking-wider">著作发表</span>
            </div>
          </div>
          
          <div className="hero-reveal flex flex-wrap gap-4">
            <a 
              className="bg-[#775a19] text-white px-8 py-4 rounded-full font-sans text-[12px] font-semibold uppercase tracking-wider hover:scale-105 shadow-md hover:shadow-xl transition-all flex items-center gap-2" 
              href="tel:02087077500"
            >
              <Phone className="w-4 h-4" /> 免费咨询
            </a>
            <a href="/certificates" className="border border-[#7f7667] text-[#1a1c1c] px-8 py-4 rounded-full font-sans text-[12px] font-semibold uppercase tracking-wider hover:bg-black/5 transition-all">
              查看资质
            </a>
          </div>
        </div>

        {/* Image Side */}
        <div className="col-span-1 lg:col-span-5 relative flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="hero-image relative w-full max-w-[380px] h-[520px] rounded-2xl overflow-hidden glass-card p-2 group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent z-10 pointer-events-none" />
            <img 
              alt="韩曼莉律师" 
              className="w-full h-full object-cover rounded-xl transition-all duration-700" 
              src="/assets/han-manli-red.webp"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <div className="text-[#1a1c1c] font-serif text-[24px]">韩曼莉律师团队</div>
              <div className="text-[#775a19] font-sans text-[16px] font-semibold">秉持公正 追求卓越</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
