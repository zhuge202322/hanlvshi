"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navigation from "@/components/Navigation";
import { Users, DollarSign, Shield, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const dynamic = 'force-dynamic';

export default function ProductPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".hero-content > *",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.3 }
    );

    gsap.utils.toArray(".service-card, .audience-card, .process-card").forEach((item) => {
      gsap.fromTo(item as HTMLElement,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          scrollTrigger: { trigger: item as HTMLElement, start: "top 90%" },
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out"
        }
      );
    });
  }, { scope: container });

  return (
    <main className="bg-[#f9f9f9] min-h-screen" ref={container}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-[#775a19]/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-[1280px] mx-auto w-full px-6 lg:px-16 relative z-10">
          <div className="hero-content max-w-3xl">
            <span className="font-sans text-[12px] font-semibold text-[#775a19] tracking-[0.4em] mb-6 block uppercase">
              一体化法律服务产品手册
            </span>
            <h1 className="font-serif text-[56px] md:text-[64px] leading-[1.1] mb-6 text-[#1a1c1c]">
              A类特殊人群的人财保·传
            </h1>
            <p className="text-[18px] text-[#4e4639] leading-[1.6] mb-8">
              为特殊群体家庭提供人身监护及私人财产保护、管理和传承法律服务，构建"复合监护＋监督＋遗产管理＋资产保护＋财富传承"的全生命链条服务体系。
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#service-system" className="bg-[#775a19] text-white px-8 py-4 rounded-full font-sans text-[12px] font-semibold uppercase tracking-wider hover:scale-105 shadow-md hover:shadow-xl transition-all">
                查看服务体系
              </a>
              <a href="/public-docs/products/A类特殊人群的人财保·传产品手册（终稿）.pdf" className="border border-[#7f7667] text-[#1a1c1c] px-8 py-4 rounded-full font-sans text-[12px] font-semibold uppercase tracking-wider hover:bg-black/5 transition-all">
                打开原始手册
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 核心愿景 */}
      <section className="section py-[120px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="mb-12 text-center">
            <h2 className="font-sans text-[12px] font-semibold tracking-[0.2em] text-[#775a19] uppercase mb-3">核心愿景</h2>
            <h3 className="font-serif text-[40px] md:text-[48px] text-[#1a1c1c] leading-[1.2]">人有妥善照料 · 财有安全守护 · 传承有序可控 · 风险全面隔离</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "人", title: "人身保障", desc: "意定监护设立与登记、监护人筛选与监督、专业照护机构对接、人身权益维权支持。" },
              { icon: "财", title: "财产守护", desc: "家庭资产梳理与归类、特殊需要信托设立、资产公证提存、不动产资产管理。" },
              { icon: "保", title: "风险保全", desc: "财产与债务、婚姻风险隔离，双保护人机制全程监督，资产动态监测预警。" },
              { icon: "传", title: "定向传承", desc: "定制遗嘱补充信托资产，指定专业遗产管理人，剩余财产慈善或亲友传承。" }
            ].map((item, i) => (
              <article key={i} className="service-card glass-card p-8 rounded-[1.5rem] text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#775a19] text-white flex items-center justify-center text-[24px] font-serif">
                  {item.icon}
                </div>
                <h3 className="font-serif text-[24px] text-[#1a1c1c] mb-4">{item.title}</h3>
                <p className="text-[16px] text-[#4e4639] leading-[1.6]">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 服务对象 */}
      <section className="section py-[120px] bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="font-sans text-[12px] font-semibold tracking-[0.2em] text-[#775a19] uppercase mb-3">服务对象</h2>
            <h3 className="font-serif text-[40px] md:text-[48px] text-[#1a1c1c] leading-[1.2]">精准覆盖多元特殊家庭类型</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "独居/空巢老人", desc: "子女长期在外或往来甚少，突发疾病、失能后无人合法代为办理医疗、养老及财产事务。" },
              { title: "丁克、未婚、离异无子女群体", desc: "法定监护人缺位或不合意，希望自主指定信任主体安排晚年生活与财产管理。" },
              { title: "高净值、财产复杂人群", desc: "名下涉及房产、股权、大额理财等资产，需要监护与监督双重保障，防范资产流失。" },
              { title: "残障/自闭症/精神障碍子女家庭", desc: "父母年迈或离世后，需为子女建立终身照护、财产监管及长期给付安排。" },
              { title: "再婚或家庭关系复杂人群", desc: "通过提前安排监护、财产隔离与继承规则，降低监护权和财产争夺风险。" },
              { title: "认知下降、重病或信赖非亲属照料人群", desc: "趁具备完全民事行为能力时完成意定监护、医疗决策与照护授权安排。" }
            ].map((item, i) => (
              <article key={i} className="audience-card glass-card p-8 rounded-[1.5rem]">
                <h3 className="font-serif text-[20px] text-[#1a1c1c] mb-4">{item.title}</h3>
                <p className="text-[16px] text-[#4e4639] leading-[1.6]">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 服务流程 */}
      <section id="service-system" className="section py-[120px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="font-sans text-[12px] font-semibold tracking-[0.2em] text-[#775a19] uppercase mb-3">服务流程</h2>
            <h3 className="font-serif text-[40px] md:text-[48px] text-[#1a1c1c] leading-[1.2]">从需求诊断到后续保障的闭环服务</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { num: "01", title: "需求诊断", desc: "盘点家庭核心需求，明确\"人、财、保、传\"目标。" },
              { num: "02", title: "协议签署", desc: "签署专项法律顾问合同，组建多模块服务团队。" },
              { num: "03", title: "方案设计", desc: "深度访谈，对接生态资源，出具一体化定制解决方案。" },
              { num: "04", title: "落地执行", desc: "开展法律尽职调查，拟定法律文件，协助办理登记手续。" },
              { num: "05", title: "后续保障", desc: "定期回访与动态监测，根据家庭发展持续优化方案。" }
            ].map((item, i) => (
              <article key={i} className="process-card glass-card p-6 rounded-[1.5rem] text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#775a19]/10 text-[#775a19] flex items-center justify-center text-[20px] font-bold">
                  {item.num}
                </div>
                <h3 className="font-serif text-[20px] text-[#1a1c1c] mb-3">{item.title}</h3>
                <p className="text-[14px] text-[#4e4639] leading-[1.6]">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 核心特色 */}
      <section className="section py-[120px] bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="font-sans text-[12px] font-semibold tracking-[0.2em] text-[#775a19] uppercase mb-3">核心特色</h2>
            <h3 className="font-serif text-[40px] md:text-[48px] text-[#1a1c1c] leading-[1.2]">以法律工具组合建立长期保护结构</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "人身保障全周期", desc: "适配亲友互助、社区照护、专业机构等多元场景，提供个性化意定监护方案。" },
              { title: "财产守护精细化", desc: "针对重组家庭、LGBT 家庭及高净值家庭设计差异化资产隔离与长期给付方案。" },
              { title: "风险保全全方位", desc: "整合信托、居住权、遗嘱、遗产管理人等工具，覆盖婚姻变动、债务隔离、亲属争夺等风险。" }
            ].map((item, i) => (
              <article key={i} className="glass-card p-8 rounded-[1.5rem]">
                <h3 className="font-serif text-[24px] text-[#1a1c1c] mb-4">{item.title}</h3>
                <p className="text-[16px] text-[#4e4639] leading-[1.6]">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 经典案例 */}
      <section className="section py-[120px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="font-sans text-[12px] font-semibold tracking-[0.2em] text-[#775a19] uppercase mb-3">经典案例</h2>
            <h3 className="font-serif text-[40px] md:text-[48px] text-[#1a1c1c] leading-[1.2]">首例律师主导复合监护＋监督＋遗产管理新模式</h3>
          </div>
          <div className="glass-card p-12 rounded-[1.5rem]">
            <div className="mb-8">
              <p className="text-[14px] text-[#775a19] font-semibold mb-2">被监护人档案 · H</p>
              <h4 className="font-serif text-[32px] text-[#1a1c1c] leading-[1.3]">精神障碍患者父母双亡后的监护与财产双重危机</h4>
            </div>
            <div className="space-y-6 text-[16px] text-[#4e4639] leading-[1.7]">
              <p>H 年逾五十，独生子女，因精神障碍反复住院。父母双亡后，既无配偶、子女及其他近亲属，也未办理任何财产继承手续，陷入无人照管、财产悬空的双重生存危机。</p>
              <p>项目难点包括监护真空、财产岌岌可危、程序启动难、监护人遴选难、职责履行难与资产传承难。团队围绕监护人遴选、监督机制、遗产管理、资产保值及被监护人终身生活所需，构建复合型法律服务方案。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 产品咨询 */}
      <section className="section py-[120px] bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="glass-card p-12 rounded-[1.5rem] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">
            <div>
              <h2 className="font-sans text-[12px] font-semibold tracking-[0.2em] text-[#775a19] uppercase mb-3">产品咨询</h2>
              <h3 className="font-serif text-[32px] md:text-[40px] text-[#1a1c1c] mb-6">瀛和前台：020-8707 7500</h3>
              <p className="text-[16px] text-[#4e4639]">北京瀛和（广州）律师事务所 · 韩曼莉律师团队</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/assets/geren.png" alt="韩曼莉律师微信二维码" className="w-40 h-40 rounded-xl shadow-md mb-4" />
              <span className="text-[14px] text-[#4e4639] font-semibold">微信二维码</span>
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
