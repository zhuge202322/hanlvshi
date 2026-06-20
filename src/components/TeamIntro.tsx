"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const teamMembers = [
  { 
    id: "han",
    name: "韩曼莉", 
    title: "瀛和家族财富传承中心主任", 
    desc: "20年+法律从业经验，15年+财富传承领域实务，原创"人财保传"理论体系，成功落地1000+家企专项服务项目。",
    image: "/assets/han-manli-red.webp"
  },
  { 
    id: "wang",
    name: "王溥欣", 
    title: "专职律师｜政企法律服务与多元解纷", 
    desc: "兼具政府机关、大型国企法律实践经验，擅长行政复议与诉讼、企业合规及商事调解。",
    image: "/assets/wang-puxin.webp"
  },
  { 
    id: "zhao",
    name: "赵开升", 
    title: "高级合伙人", 
    desc: "5000+案例非诉讼实战经验，深耕企业间经济纠纷非诉解决与家族企业风险隔离传承。",
    image: "/assets/zhao-kaisheng.jpg"
  },
  { 
    id: "lin",
    name: "林美琼", 
    title: "专职律师｜融媒体中心执行主任", 
    desc: "兼具保险行业跨界经历与16年大客户服务经验，深耕家企风险管理、婚姻财产保护与保险理赔。",
    image: "/assets/lin-meiqiong.webp"
  },
  { 
    id: "chen",
    name: "陈越", 
    title: "争议解决律师｜刑事辩护与控告", 
    desc: "西南政法大学刑法学法律硕士，擅长刑事辩护与控告、涉财产分割婚姻家庭争议解决。",
    image: "/assets/chen-yue.webp"
  },
];

export default function TeamIntro() {
  const container = useRef<HTMLDivElement>(null);
  const spiralRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".team-card") as HTMLElement[];
    let currentIndex = 0;
    let hoveredIndex = -1;
    
    // Layout parameters
    const yOffset = 160; // 垂直向下的间距
    const xOffset = 120; // 水平向右的间距
    const zOffset = 250; // 向后的景深间距
    const rotYOffset = 15; // 围绕 Y 轴旋转的角度，正值使右侧向内

    // 初始位置设置，只负责把卡片绝对定位在正中央，所有变换通过 update 更新
    cards.forEach((card) => {
      gsap.set(card, {
        transformOrigin: "center center",
        xPercent: -50,
      });
    });

    const updateCards = (progress: number) => {
      currentIndex = progress * (cards.length - 1);
      
      cards.forEach((card, i) => {
        const relIndex = i - currentIndex;
        
        let targetX = relIndex * xOffset;
        let targetY = relIndex * yOffset;
        let targetZ = -relIndex * zOffset;
        let targetRotY = relIndex * rotYOffset;
        
        let opacity = 1 - Math.abs(relIndex) * 0.3;
        
        // 当卡片滚过当前激活位置（relIndex < 0），让它向上方和左方飞出并消失
        if (relIndex < 0) {
          targetY = relIndex * yOffset * 1.5;
          targetX = relIndex * xOffset * 1.5;
          opacity = 1 - Math.abs(relIndex) * 1.5;
        }

        if (hoveredIndex === i) {
          // 悬停时，强制正面停留 (rotationY = 0)
          gsap.to(card, {
            x: targetX,
            y: targetY,
            z: targetZ + 50, // 稍微往前突起一点
            rotationY: 0, // 正面显示
            opacity: Math.max(0.2, opacity + 0.2), // 稍微提亮
            scale: 1.05,
            duration: 0.4,
            ease: "power2.out",
            overwrite: "auto"
          });
        } else {
          // 正常滚动状态
          gsap.to(card, {
            x: targetX,
            y: targetY,
            z: targetZ,
            rotationY: targetRotY,
            opacity: Math.max(0, opacity),
            scale: 1,
            duration: 0.1,
            ease: "none",
            overwrite: "auto"
          });
        }
      });
    };

    // 初始调用一次
    updateCards(0);

    ScrollTrigger.create({
      id: "team-scroll",
      trigger: container.current,
      start: "top top",
      end: `+=${cards.length * 400}`,
      scrub: 1, // scrub = 1 提供平滑的缓动
      pin: true,
      onUpdate: (self) => {
        updateCards(self.progress);
      }
    });

    // 添加鼠标悬停事件
    cards.forEach((card, i) => {
      card.addEventListener("mouseenter", () => {
        hoveredIndex = i;
        // 触发一次更新
        updateCards(ScrollTrigger.getById("team-scroll")?.progress || (currentIndex / (cards.length - 1)) || 0);
      });
      
      card.addEventListener("mouseleave", () => {
        hoveredIndex = -1;
        // 恢复正常
        updateCards(ScrollTrigger.getById("team-scroll")?.progress || (currentIndex / (cards.length - 1)) || 0);
      });
    });

  }, { scope: container });

  return (
    <section id="team" className="bg-[#f3f3f3] relative overflow-hidden h-screen" ref={container}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 pt-[120px] pb-6 relative z-10 text-center">
        <h2 className="font-sans text-[12px] font-semibold tracking-[0.2em] text-[#775a19] uppercase mb-3">精英汇聚</h2>
        <h3 className="font-serif text-[40px] md:text-[48px] text-[#1a1c1c] mb-6 leading-[1.2]">核心团队</h3>
        <p className="font-sans text-[18px] text-[#4e4639] max-w-2xl mx-auto leading-[1.6]">
          汇聚业界精英，以集体智慧为您提供坚实的法律后盾。
        </p>
      </div>

      <div className="relative w-full h-full flex justify-center items-start mt-8 perspective-[1200px]">
        <div ref={spiralRef} className="relative w-full transform-style-3d will-change-transform">
          {teamMembers.map((member, i) => (
            <div 
              key={i} 
              className="team-card absolute top-0 left-1/2 w-80 md:w-96 glass-card p-10 rounded-[1.5rem] flex flex-col items-center text-center cursor-pointer"
              style={{ transformOrigin: "center center" }}
              onClick={() => window.location.href = `/team?lawyer=${member.id}`}
            >
              <div className="w-24 h-24 rounded-full bg-[#eeeeee] mb-6 border-4 border-white shadow-md overflow-hidden">
                 <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: `url(${member.image})`}} />
              </div>
              <h4 className="font-serif text-[24px] text-[#1a1c1c] mb-2">{member.name}</h4>
              <h5 className="font-sans text-[14px] font-semibold text-[#775a19] uppercase tracking-wider mb-4">{member.title}</h5>
              <p className="font-sans text-[16px] text-[#4e4639] leading-[1.6]">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
