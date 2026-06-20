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
  const spiralRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".team-card") as HTMLElement[];
    let currentIndex = 0;
    let hoveredIndex = -1;
    
    // ===== 布局核心参数 =====
    const yOffset = 160;     // 每张卡片垂直向下的间距
    const xOffset = 120;     // 每张卡片水平向右的间距
    const zOffset = 250;     // 每张卡片向后的景深间距 (Z轴)
    const rotYOffset = 15;   // 围绕 Y 轴旋转的角度，产生透视阶梯感

    // 1. 初始位置设置：将所有卡片绝对定位在正中央
    cards.forEach((card) => {
      gsap.set(card, {
        transformOrigin: "center center",
        xPercent: -50, // 配合 left-1/2 实现居中
      });
    });

    // 2. 核心更新函数：根据进度重新计算每张卡片的位置
    const updateCards = (progress: number) => {
      // 计算当前"激活"的卡片索引（带小数的连续值）
      currentIndex = progress * (cards.length - 1);
      
      cards.forEach((card, i) => {
        // 计算当前卡片相对于"激活点"的距离
        const relIndex = i - currentIndex;
        
        let targetX = relIndex * xOffset;
        let targetY = relIndex * yOffset;
        let targetZ = -relIndex * zOffset;
        let targetRotY = relIndex * rotYOffset;
        
        // 越靠后的卡片透明度越低
        let opacity = 1 - Math.abs(relIndex) * 0.3;
        
        // 【关键】当卡片被往上滚过（relIndex < 0）时，让它向左上方飞出并迅速透明消失
        if (relIndex < 0) {
          targetY = relIndex * yOffset * 1.5;
          targetX = relIndex * xOffset * 1.5;
          opacity = 1 - Math.abs(relIndex) * 1.5;
        }

        if (hoveredIndex === i) {
          // 【悬停状态】：抵消所有倾斜，强制正面停留
          gsap.to(card, {
            x: targetX,
            y: targetY,
            z: targetZ + 50, // 稍微往前突起一点
            rotationY: 0,    // 强制正面显示
            opacity: Math.max(0.2, opacity + 0.2), // 稍微提亮
            scale: 1.05,
            duration: 0.4,
            ease: "power2.out",
            overwrite: "auto"
          });
        } else {
          // 【正常滚动状态】
          gsap.to(card, {
            x: targetX,
            y: targetY,
            z: targetZ,
            rotationY: targetRotY,
            opacity: Math.max(0, opacity),
            scale: 1,
            duration: 0.1, // 短过渡让 scrub 显得平滑
            ease: "none",
            overwrite: "auto"
          });
        }
      });
    };

    // 初始渲染一次，把卡片摆放到位
    updateCards(0);

    // 3. 绑定滚动事件
    ScrollTrigger.create({
      id: "team-scroll",
      trigger: container.current,
      start: "top top",
      // 滚动距离根据卡片数量动态决定
      end: `+=${cards.length * 400}`,
      scrub: 1, // scrub = 1 提供带阻尼的平滑缓动
      pin: true, // 固定外层容器
      onUpdate: (self) => {
        updateCards(self.progress);
      }
    });

    // 4. 绑定鼠标悬停事件
    cards.forEach((card, i) => {
      card.addEventListener("mouseenter", () => {
        hoveredIndex = i;
        // 鼠标进入时触发一次重绘
        updateCards(ScrollTrigger.getById("team-scroll")?.progress || (currentIndex / (cards.length - 1)) || 0);
      });
      
      card.addEventListener("mouseleave", () => {
        hoveredIndex = -1;
        // 鼠标离开时恢复正常滚动排布
        updateCards(ScrollTrigger.getById("team-scroll")?.progress || (currentIndex / (cards.length - 1)) || 0);
      });
    });

  }, { scope: container });

  return (
    // 外层容器：占满屏幕
    <section className="bg-[#f3f3f3] relative overflow-hidden h-screen" ref={container}>
      
      {/* 标题区域：固定在顶部 */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 pt-[120px] pb-6 relative z-10 text-center pointer-events-none">
        <h2 className="text-[12px] font-semibold tracking-[0.2em] text-[#775a19] uppercase mb-3">精英汇聚</h2>
        <h3 className="text-[40px] md:text-[48px] text-[#1a1c1c] mb-6 leading-[1.2] font-serif">核心团队</h3>
        <p className="text-[18px] text-[#4e4639] max-w-2xl mx-auto leading-[1.6]">
          汇聚业界精英，以集体智慧为您提供坚实的法律后盾。
        </p>
      </div>

      {/* 3D 动画容器 */}
      <div className="relative w-full h-full flex justify-center items-start mt-8 perspective-[1200px]">
        <div ref={spiralRef} className="relative w-full transform-style-3d will-change-transform">
          
          {teamMembers.map((member, i) => (
            <a
              key={i}
              href={`/team?lawyer=${member.id}`}
              className="team-card absolute top-0 left-1/2 w-80 md:w-96 glass-card backdrop-blur-xl border border-white/20 p-10 rounded-[1.5rem] flex flex-col items-center text-center cursor-pointer shadow-2xl hover:shadow-3xl transition-shadow"
              style={{ transformOrigin: "center center" }}
            >
              {/* 头像 */}
              <div className="w-24 h-24 rounded-full bg-[#eeeeee] mb-6 border-4 border-white shadow-md overflow-hidden">
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* 信息 */}
              <h4 className="text-[24px] text-[#1a1c1c] mb-2 font-serif">{member.name}</h4>
              <h5 className="text-[14px] font-semibold text-[#c5a059] uppercase tracking-wider mb-4">{member.title}</h5>
              <p className="text-[16px] text-[#4e4639] leading-[1.6]">{member.desc}</p>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
}
