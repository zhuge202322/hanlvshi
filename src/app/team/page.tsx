"use client";

import { useRef, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navigation from "@/components/Navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 团队律师数据
const teamLawyers = {
  han: {
    name: "韩曼莉律师",
    title: "北京瀛和（广州）律师事务所高级合伙人｜家业传承财富中心主任",
    image: "/assets/han-manli-red.webp",
    summary: "北京瀛和（广州）律师事务所高级合伙人，家业传承财富中心主任，广东省律师协会信托与财富管理专委会副主任，广州市律师协会信托与财富管理专委会秘书长。20年+法律从业经验，15年+财富传承领域实务，成功落地1000+家企专项服务项目。团队深入研究中国家族（企业）成长模式、私人财富管理与传承等理论与实务，并从文化、治理和成员关系的视角关注民营家族企业的代际传承。原创\"人财保传\"理论体系，\"人+财+文化\"三维传承模型。",
    tags: ["财富传承", "家事治理", "私人顾问", "争议解决", "人财保传"],
    sections: [
      {
        heading: "核心领域",
        items: ["家族（企业）财富规划、保护、管理与传承", "家族（企业）治理、股权顶层设计、家族企业法律顾问", "私人法律顾问、家庭风险防范、高端婚姻继承纠纷解决", "特殊人群监护、监督、遗产管理、资产保护与财富传承方案"]
      },
      {
        heading: "社会职务",
        items: ["广东省律师协会信托与财富管理法律专业委员会副主任", "广州市律师协会信托与财富管理业务专业委员会秘书长", "粤港澳全面合作法律事务专家咨询委员会青年创新创业合作专家组副组长", "广州国际商贸商事调解中心（GICMC）调解员、广州市婚姻家庭纠纷人民调解委员会调解员"]
      }
    ],
    actions: [["查看韩律师详细资料", "/han-manli"], ["查看证书与聘书", "/certificates"]]
  },
  wang: {
    name: "王溥欣律师",
    title: "专职律师｜政企法律服务与多元解纷",
    image: "/assets/wang-puxin.webp",
    summary: "兼具政府机关、大型国企法律实践经验，擅长行政复议与行政诉讼、民商事争议解决、企业合规业务，具备政企法律服务、多元解纷与国际商事调解的综合能力。",
    tags: ["行政复议", "行政诉讼", "民商事争议", "企业合规", "商事调解"],
    sections: [
      {
        heading: "专业资质",
        items: ["2025年1月获中国国际贸易促进委员会商事法律服务中心颁发的企业合规师专业水平证书", "2026年1月已具备新加坡国际调解学院（SIMI）一级调解员认证资格", "2020年度获\"广东省12348公共法律服务热线抗疫先锋\"荣誉称号"]
      },
      {
        heading: "社会职务",
        items: ["广州市律师协会第十一届行政复议与行政诉讼法律专业委员会委员", "广州铁路运输中级法院特邀调解员", "广州国际商贸商事调解中心（GICMC）调解员、广州市多元解纷中心调解员"]
      }
    ],
    actions: [["查看团队证书页", "/certificates"]]
  },
  zhao: {
    name: "赵开升律师",
    title: "高级合伙人",
    image: "/assets/zhao-kaisheng.jpg",
    summary: "2003年开始从事法律实务，特别是在企业间欠款的非讼解决领域内深耕，有5000+案例的非诉讼实战经验，探索出异于常规律师函的书面催收技巧和越过法律途径之外的快捷解决思路。",
    tags: ["经济纠纷处理", "企业风险控制", "财富传承", "家族企业接班"],
    sections: [
      {
        heading: "擅长领域",
        items: ["经济纠纷处理和企业风险控制，特别是企业间经济纠纷的非诉讼解决", "财富传承，特别是家族企业的接班、风险隔离和财富合法承继问题"]
      },
      {
        heading: "社会职务",
        items: ["广东金融学院特聘风险控制专题讲师", "北京瀛和（广州）律师事务所家业传承中心企业资产管理部主任"]
      }
    ],
    actions: [["联系律师", "/#contact"]]
  },
  lin: {
    name: "林美琼律师",
    title: "专职律师｜融媒体中心执行主任｜青工委业务部部长",
    image: "/assets/lin-meiqiong.webp",
    summary: "西南政法大学管理学、法学双学士，兼具保险行业跨界执业经历，拥有16年大客户服务与综合法律服务经验，深耕家企风险管理、婚姻财产保护、家族财富传承与保险规划理赔。",
    tags: ["家企风险管理", "婚姻财产保护", "财富传承", "保险规划", "理赔争议"],
    sections: [
      {
        heading: "核心优势",
        items: ["拥有16年大客户服务经验，其中金融保险行业6年、法律服务2年+", "曾在大型外资公司担任销售总监，亦有国内头部保险经纪公司从业经验", "能够洞察客户真实需求，快速匹配解决方案并推动落地执行"]
      },
      {
        heading: "擅长领域",
        items: ["家企风险管理、婚姻财产保护、家族财富传承", "教育养老规划、保险规划理赔", "整合保险、遗嘱、信托等财富工具，为个人、家庭、企业提供全视角风险规划"]
      }
    ],
    actions: [["查看人财保·传产品", "/product"]]
  },
  chen: {
    name: "陈越律师",
    title: "争议解决律师｜刑事辩护与控告｜婚姻家庭争议",
    image: "/assets/chen-yue.webp",
    summary: "西南政法大学刑法学法律硕士，擅长刑事辩护与控告、婚姻家庭争议解决、常年法律顾问，尤其关注刑民交叉、财产分割、街道及村居法律服务等复杂场景。",
    tags: ["刑事辩护", "刑事控告", "刑民交叉", "婚姻家庭", "常年顾问"],
    sections: [
      {
        heading: "专业领域",
        items: ["刑事辩护与控告，尤其是涉刑民交叉案件", "婚姻家庭争议解决，尤其是涉财产分割争议", "常年法律顾问，尤其是街道、村居、商会及基层治理相关法律服务"]
      },
      {
        heading: "履职经历",
        items: ["现任广州市黄埔区人民法院（民一庭）特邀调解员", "黄埔区某街道商会顾问、多家村和社区常年法律顾问", "多家村社人民调解委员会副主任，擅长以谈判、调解方式解决争议"]
      }
    ],
    actions: [["查看团队联系入口", "/#contact"]]
  }
};

export default function TeamPage() {
  const container = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const [activeLawyer, setActiveLawyer] = useState("han");

  useEffect(() => {
    const lawyer = searchParams.get("lawyer");
    if (lawyer && teamLawyers[lawyer as keyof typeof teamLawyers]) {
      setActiveLawyer(lawyer);
    }
  }, [searchParams]);

  useGSAP(() => {
    gsap.fromTo(
      ".hero-content > *",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.3 }
    );
  }, { scope: container });

  const currentLawyer = teamLawyers[activeLawyer as keyof typeof teamLawyers];

  return (
    <main className="bg-[#f9f9f9] min-h-screen" ref={container}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-[#775a19]/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-[1280px] mx-auto w-full px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="hero-content">
            <span className="font-sans text-[12px] font-semibold text-[#775a19] tracking-[0.4em] mb-6 block uppercase">
              团队律师详细介绍
            </span>
            <h1 className="font-serif text-[48px] md:text-[56px] leading-[1.1] mb-6 text-[#1a1c1c]">
              以韩曼莉律师为中心的复合型法律服务团队
            </h1>
            <p className="text-[18px] text-[#4e4639] leading-[1.6]">
              团队围绕家族财富传承、家事治理、企业合规、争议解决、保险理赔与刑民交叉等专业方向协同工作，为客户提供跨领域、可落地的法律服务方案。
            </p>
          </div>

          <div className="relative">
            <img 
              src="/assets/han-manli-red.webp" 
              alt="韩曼莉律师职业照" 
              className="w-full max-w-[400px] mx-auto rounded-[1.5rem] shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Team Member Details */}
      <section className="section py-[120px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          {/* Lawyer Tabs */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {Object.keys(teamLawyers).map((key) => (
              <button
                key={key}
                onClick={() => setActiveLawyer(key)}
                className={`px-8 py-3 rounded-full font-sans text-[14px] font-semibold transition-all ${
                  activeLawyer === key
                    ? "bg-[#775a19] text-white shadow-lg"
                    : "bg-white text-[#1a1c1c] border border-[#dadada] hover:border-[#775a19]"
                }`}
              >
                {teamLawyers[key as keyof typeof teamLawyers].name.replace("律师", "")}
              </button>
            ))}
          </div>

          {/* Lawyer Profile Card */}
          <div className="glass-card p-12 rounded-[1.5rem]">
            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
              {/* Image */}
              <div>
                <img 
                  src={currentLawyer.image} 
                  alt={currentLawyer.name} 
                  className="w-full rounded-[1.5rem] shadow-xl mb-6"
                />
                <div className="flex flex-wrap gap-2">
                  {currentLawyer.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-[#775a19]/10 text-[#775a19] rounded-full text-[12px] font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="font-serif text-[40px] text-[#1a1c1c] mb-3">{currentLawyer.name}</h2>
                <p className="text-[16px] text-[#775a19] font-semibold mb-6">{currentLawyer.title}</p>
                <p className="text-[16px] text-[#4e4639] leading-[1.7] mb-8">{currentLawyer.summary}</p>

                {/* Sections */}
                <div className="space-y-8">
                  {currentLawyer.sections.map((section, i) => (
                    <div key={i}>
                      <h3 className="font-serif text-[24px] text-[#1a1c1c] mb-4">{section.heading}</h3>
                      <ul className="space-y-3">
                        {section.items.map((item, j) => (
                          <li key={j} className="text-[16px] text-[#4e4639] pl-6 border-l-2 border-[#c5a059]">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 mt-8">
                  {currentLawyer.actions.map((action, i) => (
                    <a
                      key={i}
                      href={action[1]}
                      className="px-8 py-3 bg-[#775a19] text-white rounded-full font-sans text-[12px] font-semibold uppercase tracking-wider hover:scale-105 shadow-md hover:shadow-xl transition-all"
                    >
                      {action[0]}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#1a1c1c] text-white/80 text-center">
        <p className="mb-2">北京瀛和（广州）律师事务所 · 韩曼莉律师团队</p>
        <p className="text-sm">本网站内容仅作团队与服务介绍，不构成具体法律意见。</p>
      </footer>
    </main>
  );
}
