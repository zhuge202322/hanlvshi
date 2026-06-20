"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// 注册 ScrollTrigger 插件，防止在 SSR 时报错
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const teamMembers = [
  { 
    name: "韩曼莉", 
    title: "高级合伙人", 
    desc: "家业传承财富中心主任，专注财富规划与传承、家事治理、私人法律顾问。",
    img: "/assets/han-manli-red.webp",
    id: "han"
  },
  { 
    name: "王溥欣", 
    title: "专职律师", 
    desc: "政企法律服务与多元解纷专家，擅长行政复议与行政诉讼、民商事争议解决。",
    img: "/assets/wang-puxin.webp",
    id: "wang"
  },
  { 
    name: "赵开升", 
    title: "高级合伙人", 
    desc: "深耕经济纠纷处理和企业风险控制，特别是企业间经济纠纷的非诉讼解决。",
    img: "/assets/zhao-kaisheng.jpg",
    id: "zhao"
  },
  { 
    name: "林美琼", 
    title: "专职律师", 
    desc: "融媒体中心执行主任，深耕家企风险管理、婚姻财产保护、家族财富传承。",
    img: "/assets/lin-meiqiong.webp",
    id: "lin"
  },
  { 
    name: "陈越", 
    title: "专职律师", 
    desc: "争议解决律师，擅长刑事辩护与控告、婚姻家庭争议解决、常年法律顾问。",
    img: "/assets/chen-yue.webp",
    id: "chen"
  },
];

export default function TeamSpiral() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".team-card") as HTMLElement[];
    
    // 简单的渐入动画
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: container });

  return (
    <section className="py-[120px] bg-white" ref={container}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <span className="font-sans text-[12px] font-semibold text-[#775a19] tracking-[0.4em] mb-4 block uppercase">
            核心团队
          </span>
          <h2 className="font-serif text-[42px] md:text-[52px] text-[#1a1c1c] mb-6">
            专业律师团队
          </h2>
          <p className="text-[18px] text-[#4e4639] max-w-2xl mx-auto">
            以韩曼莉律师为核心，汇聚多领域专业律师，为您提供全方位法律服务
          </p>
        </div>

        {/* 团队卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <a
              key={member.id}
              href={`/team?lawyer=${member.id}`}
              className="team-card group block"
            >
              <div className="bg-white rounded-[1.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#dadada]/30 hover:border-[#775a19]/30 hover:-translate-y-2">
                {/* 图片区域 */}
                <div className="relative h-[320px] overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-serif text-[28px] text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[14px] text-white/90 font-medium">
                      {member.title}
                    </p>
                  </div>
                </div>

                {/* 描述区域 */}
                <div className="p-6">
                  <p className="text-[15px] text-[#4e4639] leading-relaxed">
                    {member.desc}
                  </p>
                  <div className="mt-4 flex items-center text-[#775a19] font-semibold text-[14px] group-hover:translate-x-2 transition-transform duration-300">
                    <span>查看详情</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
