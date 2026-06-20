"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navigation from "@/components/Navigation";
import { ChevronDown, ChevronUp } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const mainArticle = {
  date: "2026年3月24日",
  category: "广州女律师领导力高级研修班学习心得",
  title: "律路繁花映初心，刚柔并济启新程",
  content: [
    "春意渐浓，万物竞发。在这充满生机的时节，我有幸参与广州女律师领导力高级研修班并顺利结业。这段时光，既是一次知识的充电、思维的碰撞，更是一场心灵的洗礼、初心的回望。",
    "研修班走进重庆多家标杆律所，探寻其发展背后的底层逻辑：从顶层架构搭建到核心资源配置，从人才引进培养到专业能力赋能，每一处细节都藏着行业发展的智慧与规律。",
    "多家优秀律所均将党建工作与律所管理、业务发展深度融合，通过党支部建设凝聚团队力量，通过党员先锋岗引领专业精进，形成\"党建强、业务兴\"的良性循环。",
    "作为家族传承中心负责人、律所党支部书记与管委会成员，我更加明确：党建工作不是独立的支线任务，而是律所发展的红色引擎。家族传承中心的发展，同样需要党建引领。",
    "在女性领导力课程中，我对女性律师的专业力量有了更深理解。女性领导力的核心，在于刚柔并济的平衡、多元包容的思维、温润坚定的力量。这种力量用于家族传承服务时，既能坚守原则、严谨务实，也能理解客户的情感需求。",
    "人工智能、大数据等技术正在改变法律服务行业。从文书起草、案例检索到客户分析、业务拓展，技术赋能让法律服务的效率与质量提升，也要求律师团队持续更新服务方式。",
    "回顾十九年的律途思考，我将其归纳为\"选择、平衡、专注\"。从财富传承领域的深耕，到非遗咏春的研习，再到律所党建工作的推进，每一次选择都锚定法治初心，每一次平衡都兼顾责任与担当。",
    "作为家族传承中心负责人，我们不仅提供财富传承、家族治理的专业方案，更传递对家庭责任、亲情守护与文化传承的价值理念。尤其在特殊人群监护、医疗预嘱、意定监护等领域，我们用专业法律知识为客户的人生全旅程提供保障。",
    "未来，我将继续以党建为魂、以专业为基、以女性力量为翼，带领家族传承中心完善服务体系，为大湾区家族客户提供更专业、更全面、更有温度的财富传承与家族治理解决方案。"
  ]
};

const otherArticles = [
  {
    date: "2026年1月15日",
    category: "财富传承",
    title: "意定监护：单身、失独、丁克人群的晚年尊严保障",
    excerpt: "深入解析意定监护制度在实务中的运用，探讨单身或无子女群体如何通过法律提前规划，确保晚年医疗、财产与照护的自主权。"
  },
  {
    date: "2025年12月8日",
    category: "公司法务",
    title: "财富保护：家族企业股权代持的法律风险与防范",
    excerpt: "结合真实案例，分析家族企业中常见的股权代持\"隐雷\"，并提供关于代持协议审查、显名退出机制及资产隔离的专业建议。"
  },
  {
    date: "2025年11月22日",
    category: "特殊人群",
    title: "人财保传：特殊儿童家庭如何建立终身守护机制",
    excerpt: "针对心智障碍等特殊需求家庭，拆解如何通过复合监护、特殊需要信托与遗嘱设计的组合拳，实现跨代际的长期照护与资产安全。"
  },
  {
    date: "2025年10月10日",
    category: "家事法律",
    title: "《民法典》时代的婚姻财产协议实务要点",
    excerpt: "从婚前、婚内到离婚财产协议，结合《民法典》最新规定，解析财产协议的效力边界、签署时机及常见风险防范。"
  },
  {
    date: "2025年9月18日",
    category: "继承法",
    title: "遗嘱效力争议：如何避免\"一纸遗嘱\"引发家族纷争",
    excerpt: "通过典型案例分析遗嘱无效的常见原因，提供遗嘱起草、见证、保管及执行的全流程专业建议，确保遗愿得以实现。"
  }
];

export default function ArticlesPage() {
  const container = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      ".hero-content > *",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.3 }
    );

    gsap.utils.toArray(".article-item").forEach((item) => {
      gsap.fromTo(item as HTMLElement,
        { y: 40, opacity: 0 },
        {
          scrollTrigger: { trigger: item as HTMLElement, start: "top 92%" },
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out"
        }
      );
    });
  }, { scope: container });

  return (
    <main className="bg-[#f9f9f9] min-h-screen" ref={container}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-[#775a19]/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-[1280px] mx-auto w-full px-6 lg:px-16 relative z-10">
          <div className="hero-content max-w-3xl">
            <span className="font-sans text-[12px] font-semibold text-[#775a19] tracking-[0.4em] mb-6 block uppercase">
              专业观点与思考
            </span>
            <h1 className="font-serif text-[56px] md:text-[64px] leading-[1.1] mb-6 text-[#1a1c1c]">
              文章与分享
            </h1>
            <p className="text-[18px] text-[#4e4639] leading-[1.6]">
              探索财富传承、家事治理、法律服务的专业洞察与实务经验分享。
            </p>
          </div>
        </div>
      </section>

      {/* Main Article */}
      <section className="section py-[120px]">
        <div className="max-w-[900px] mx-auto px-6 lg:px-16">
          <article className="glass-card p-12 rounded-[1.5rem]">
            <div className="mb-8">
              <p className="text-[14px] text-[#775a19] font-semibold mb-2">
                {mainArticle.date} · {mainArticle.category}
              </p>
              <h2 className="font-serif text-[40px] text-[#1a1c1c] leading-[1.2]">
                {mainArticle.title}
              </h2>
            </div>

            <div className="space-y-6 text-[16px] text-[#4e4639] leading-[1.8]">
              {mainArticle.content.slice(0, expanded ? mainArticle.content.length : 3).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-8 flex items-center gap-2 text-[14px] text-[#775a19] font-semibold hover:text-[#1a1c1c] transition-colors"
            >
              {expanded ? (
                <>
                  收起全文 <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  展开阅读全文 <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </article>
        </div>
      </section>

      {/* Other Articles */}
      <section className="section py-[120px] bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="font-sans text-[12px] font-semibold tracking-[0.2em] text-[#775a19] uppercase mb-3">更多文章</h2>
            <h3 className="font-serif text-[40px] md:text-[48px] text-[#1a1c1c] leading-[1.2]">专业观点与实务分享</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherArticles.map((article, i) => (
              <article key={i} className="article-item glass-card p-8 rounded-[1.5rem] cursor-pointer hover:scale-[1.02] transition-transform">
                <p className="text-[12px] text-[#775a19] font-semibold mb-2 uppercase tracking-wider">
                  {article.category}
                </p>
                <h3 className="font-serif text-[24px] text-[#1a1c1c] mb-4 leading-[1.3]">
                  {article.title}
                </h3>
                <p className="text-[14px] text-[#4e4639] leading-[1.6] mb-4">
                  {article.excerpt}
                </p>
                <p className="text-[12px] text-[#7f7667]">{article.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section py-[120px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="glass-card p-12 rounded-[1.5rem] text-center">
            <h2 className="font-serif text-[32px] md:text-[40px] text-[#1a1c1c] mb-6">
              需要专业法律咨询？
            </h2>
            <p className="text-[16px] text-[#4e4639] mb-8 max-w-2xl mx-auto">
              韩曼莉律师团队专注于家族财富传承与家事治理，为您提供专业、全面的法律服务方案。
            </p>
            <a
              href="/#contact"
              className="inline-block bg-[#775a19] text-white px-10 py-4 rounded-full font-sans text-[12px] font-semibold uppercase tracking-wider hover:scale-105 shadow-md hover:shadow-xl transition-all"
            >
              联系我们
            </a>
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
