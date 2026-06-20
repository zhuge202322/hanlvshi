"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Award, Briefcase, GraduationCap } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PersonalIntro() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(
      ".intro-image-container",
      { x: -50, opacity: 0, scale: 0.95 },
      { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(
      ".intro-content > *",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" },
      "-=0.6"
    )
    .fromTo(
      ".intro-stat",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.5)" },
      "-=0.4"
    );
  }, { scope: container });

  return (
    <section id="personal" className="py-[120px] relative bg-[#f3f3f3]" ref={container}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="intro-image-container relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden glass-card p-2 shadow-xl">
              <div className="w-full h-full bg-[#eeeeee] rounded-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#f9f9f9]/80 via-transparent to-transparent z-10" />
                <div className="w-full h-full bg-[url('/assets/han-profile-doc.webp')] bg-cover bg-[center_18%] transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 glass-card p-6 flex items-center gap-4 animate-bounce-slow rounded-2xl shadow-xl">
              <div className="w-12 h-12 rounded-full bg-[#775a19]/10 flex items-center justify-center">
                <Award className="text-[#775a19] w-6 h-6" />
              </div>
              <div>
                <p className="font-serif text-[24px] font-bold text-[#1a1c1c]">20+</p>
                <p className="font-sans text-[12px] font-medium text-[#4e4639]">年执业经验</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="intro-content">
            <h2 className="font-sans text-[12px] font-semibold tracking-[0.2em] text-[#775a19] uppercase mb-3">瀛和家族财富传承中心主任</h2>
            <h3 className="font-serif text-[40px] md:text-[48px] text-[#1a1c1c] mb-6 leading-[1.2]">
              韩曼莉
            </h3>
            
            <div className="space-y-6 text-[#1a1c1c] font-sans text-[16px] md:text-[18px] leading-[1.6] mb-10">
              <p>
                广东省律师协会信托与财富管理专委会副主任。团队深入研究中国家族（企业）成长模式、私人财富管理与传承等理论与实务，并从文化、治理和成员关系的视角关注民营家族企业的代际传承。
              </p>
              <p className="text-[#4e4639] italic border-l-2 border-[#c5a059] pl-4">
                原创“人财保传”理论体系，“人+财+文化”三维传承模型。其中，A类特殊人群项目荣获中国政法大学产品大赛提名奖及新则标杆案例奖等荣誉。
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="intro-stat flex items-start gap-4">
                <div className="mt-1 p-3 rounded-xl bg-white shadow-sm border border-black/5">
                  <GraduationCap className="w-6 h-6 text-[#775a19]" />
                </div>
                <div>
                  <h4 className="text-[#1a1c1c] font-sans font-semibold mb-1">专业资格</h4>
                  <p className="font-sans text-[14px] text-[#4e4639]">国际注册高级私人财富管理师（SPWM）</p>
                </div>
              </div>
              <div className="intro-stat flex items-start gap-4">
                <div className="mt-1 p-3 rounded-xl bg-white shadow-sm border border-black/5">
                  <Briefcase className="w-6 h-6 text-[#775a19]" />
                </div>
                <div>
                  <h4 className="text-[#1a1c1c] font-sans font-semibold mb-1">实务经验</h4>
                  <p className="font-sans text-[14px] text-[#4e4639]">15年+财富传承实务，成功落地1000+项目</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
