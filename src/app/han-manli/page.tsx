"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navigation from "@/components/Navigation";
import { Award, Briefcase } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const dynamic = 'force-dynamic';

export default function HanManliPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero animation
    gsap.fromTo(
      ".hero-content > *",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.3 }
    );

    // Section animations
    gsap.utils.toArray(".detail-grid article, .case-grid article").forEach((item) => {
      gsap.fromTo(item as HTMLElement, 
        { y: 50, opacity: 0, rotationX: 10, transformPerspective: 1000 },
        {
          scrollTrigger: { trigger: item as HTMLElement, start: "top 90%" },
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.8,
          ease: "power3.out"
        }
      );
    });

    gsap.utils.toArray(".role-list p, .paper-list p").forEach((item) => {
      gsap.fromTo(item as HTMLElement,
        { x: -30, opacity: 0 },
        {
          scrollTrigger: { trigger: item as HTMLElement, start: "top 92%" },
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out"
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
          <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-[#775a19]/5 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-[1280px] mx-auto w-full px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="hero-content">
            <span className="font-sans text-[12px] font-semibold text-[#775a19] tracking-[0.4em] mb-6 block uppercase">
              韩曼莉律师详细资料
            </span>
            <h1 className="font-serif text-[48px] md:text-[56px] leading-[1.1] mb-6 text-[#1a1c1c]">
              家族财富传承与家事治理的长期主义实践者
            </h1>
            <p className="text-[18px] text-[#4e4639] leading-[1.6] mb-8">
              家业传承财富中心主理人。专注财富规划与传承、家事治理、私人法律顾问、家族企业治理与复杂争议解决。
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/certificates" className="bg-[#775a19] text-white px-8 py-4 rounded-full font-sans text-[12px] font-semibold uppercase tracking-wider hover:scale-105 shadow-md hover:shadow-xl transition-all">
                查看证书与聘书
              </a>
              <a href="/product" className="border border-[#7f7667] text-[#1a1c1c] px-8 py-4 rounded-full font-sans text-[12px] font-semibold uppercase tracking-wider hover:bg-black/5 transition-all">
                查看人财保·传产品
              </a>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/assets/han-manli-white.webp" 
              alt="韩曼莉律师职业照" 
              className="w-full max-w-[500px] mx-auto rounded-[1.5rem] shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* 执业定位 */}
      <section className="section py-[120px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="font-sans text-[12px] font-semibold tracking-[0.2em] text-[#775a19] uppercase mb-3">执业定位</h2>
            <h3 className="font-serif text-[40px] md:text-[48px] text-[#1a1c1c] leading-[1.2]">以家庭、资产、企业与传承为服务主轴</h3>
          </div>
          <div className="detail-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="glass-card p-8 rounded-[1.5rem]">
              <h3 className="font-serif text-[24px] text-[#1a1c1c] mb-4">执业领域</h3>
              <p className="text-[16px] text-[#4e4639] leading-[1.6]">家族（企业）财富规划、保护、管理与传承；家族（企业）治理；股权顶层设计；家族（企业）法律顾问；私人法律顾问；家庭风险防范；高端婚姻继承纠纷解决；疑难复杂民商事争议解决。</p>
            </article>
            <article className="glass-card p-8 rounded-[1.5rem]">
              <h3 className="font-serif text-[24px] text-[#1a1c1c] mb-4">专业资格</h3>
              <p className="text-[16px] text-[#4e4639] leading-[1.6]">中国律师资格、高级中学教师资格、国际注册高级私人财富管理师（SPWM）。</p>
            </article>
            <article className="glass-card p-8 rounded-[1.5rem]">
              <h3 className="font-serif text-[24px] text-[#1a1c1c] mb-4">工作积累</h3>
              <p className="text-[16px] text-[#4e4639] leading-[1.6]">近二十年从业经验，公开发表近千篇文章著作，参与编写及出版《华南地区婚姻继承典型案例评析》《家事应对攻略》等专业成果。</p>
            </article>
          </div>
        </div>
      </section>

      {/* 社会职务 */}
      <section className="section py-[120px] bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="font-sans text-[12px] font-semibold tracking-[0.2em] text-[#775a19] uppercase mb-3">社会职务</h2>
            <h3 className="font-serif text-[40px] md:text-[48px] text-[#1a1c1c] leading-[1.2]">行业履职与多元争议解决角色</h3>
          </div>
          <div className="role-list space-y-4">
            {[
              "广东省律师协会信托与财富管理法律专业委员会副主任",
              "广州市律师协会信托与财富管理业务专业委员会秘书长",
              "粤港澳全面合作法律事务专家咨询委员会青年创新创业合作专家组副组长",
              "广东省法学会婚姻家庭法学研究会理事",
              "广州国际商贸商事调解中心（GICMC）调解员",
              "广州市婚姻家庭纠纷人民调解委员会调解员",
              "广州铁路运输两级法院驻场调解员",
              "广州市法院家事调解员",
              "广州市越秀区人民检察院听证员",
              "河源、茂名仲裁委员会仲裁员",
              "广东省法律援助局公益律师、广东省（市）妇女维权站律师",
              "成和家族办公室联合创始人、FIR家族承传研究员"
            ].map((role, i) => (
              <p key={i} className="text-[18px] text-[#1a1c1c] pl-6 border-l-2 border-[#c5a059]">{role}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 讲课与传播 */}
      <section className="section py-[120px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="font-sans text-[12px] font-semibold tracking-[0.2em] text-[#775a19] uppercase mb-3">讲课与传播</h2>
            <h3 className="font-serif text-[40px] md:text-[48px] text-[#1a1c1c] leading-[1.2]">持续面向行业、企业、社区与媒体开展专业分享</h3>
          </div>
          <div className="timeline grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { year: "2025", content: "参与\"举案说法\"普法节目录制，持续进行财富传承、家事治理与调解实务传播。" },
              { year: "2024", content: "主持策划广东省律师协会财富管理交流会；受邀分享\"家族法律服务的正确打开方式\"\"新时代家庭人财保全法律实务\"等主题。" },
              { year: "2023", content: "围绕中港两地财富传承、商事合同合规、家族律师服务体系等主题开展多场分享。" },
              { year: "2021-2022", content: "围绕《民法典》时代财富智慧、家族信托、遗嘱规划、家庭财富传承观等主题开展培训与媒体录制。" }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-[1.5rem]">
                <strong className="font-serif text-[32px] text-[#775a19] block mb-4">{item.year}</strong>
                <p className="text-[16px] text-[#4e4639] leading-[1.6]">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 代表案例 */}
      <section className="section py-[120px] bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="font-sans text-[12px] font-semibold tracking-[0.2em] text-[#775a19] uppercase mb-3">代表案例</h2>
            <h3 className="font-serif text-[40px] md:text-[48px] text-[#1a1c1c] leading-[1.2]">从诉讼争议到专项治理的复合型服务经验</h3>
          </div>
          <div className="case-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "家族企业专项", content: "传媒集团股权激励及 IPO 项目、家族企业股权顶层设计、婚姻财富保全、康养与财富传承方案。" },
              { title: "家事诉讼争议", content: "夫妻共同财产转移、家庭暴力离婚、十子女继承、婚内财产协议、抚养权变更及遗嘱效力争议。" },
              { title: "人财保全计划", content: "围绕特殊人群监护、监督、遗产管理与财产安全，推动\"人财保·传\"复合服务模式落地。" }
            ].map((item, i) => (
              <article key={i} className="glass-card p-8 rounded-[1.5rem]">
                <h3 className="font-serif text-[24px] text-[#1a1c1c] mb-4">{item.title}</h3>
                <p className="text-[16px] text-[#4e4639] leading-[1.6]">{item.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 学术成果 */}
      <section className="section py-[120px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="font-sans text-[12px] font-semibold tracking-[0.2em] text-[#775a19] uppercase mb-3">学术成果</h2>
            <h3 className="font-serif text-[40px] md:text-[48px] text-[#1a1c1c] leading-[1.2]">专业研究沉淀为可执行的家庭治理方案</h3>
          </div>
          <div className="paper-list space-y-4">
            {[
              "《华南地区婚姻继承典型案例评析》",
              "《家事应对攻略》66/68 场景分析",
              "《探索家族精神的法律可由之路》",
              "《意定监护中监护制度与监督机制的合纵连横》",
              "《老龄社会应如何实现心智障碍人群的\"人财保传\"》"
            ].map((paper, i) => (
              <p key={i} className="text-[18px] text-[#1a1c1c] pl-6 border-l-2 border-[#c5a059]">{paper}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <section className="section py-[120px] bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="glass-card p-12 rounded-[1.5rem] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">
            <div>
              <h2 className="font-sans text-[12px] font-semibold tracking-[0.2em] text-[#775a19] uppercase mb-3">联系韩曼莉律师团队</h2>
              <h3 className="font-serif text-[32px] md:text-[40px] text-[#1a1c1c] mb-6">瀛和前台：020-8707 7500</h3>
              <p className="text-[16px] text-[#4e4639] leading-[1.6] mb-2">地址：广州市天河区珠江东路58号越秀金融大厦57层</p>
              <p className="text-[16px] text-[#4e4639] leading-[1.6]">邮箱：vinetoby@126.com</p>
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
