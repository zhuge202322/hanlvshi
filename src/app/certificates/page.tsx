"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navigation from "@/components/Navigation";
import { Award, FileText, ExternalLink } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const dynamic = 'force-dynamic';

const honors = [
  { date: "2026.02", title: "市调解协会颁发金牌调解员", thumb: "/assets/cert-thumbs/honors-29.webp", file: "/public-docs/honors/honors-29-202602-市调解协会颁发金牌调解员.pdf" },
  { date: "2025.12", title: "消费者权益保护荣誉", thumb: "/assets/cert-thumbs/honors-28.webp", file: "/public-docs/honors/honors-28-202512-消费者.pdf" },
  { date: "2025.11", title: "荣誉证书", thumb: "/assets/cert-thumbs/honors-27.webp", file: "/public-docs/honors/honors-27-202511-荣誉证书_01.pdf" },
  { date: "2024.12", title: "广东省法学会婚姻家庭法学研究会鼓励奖", thumb: "/assets/cert-thumbs/honors-24.webp", file: "/public-docs/honors/honors-24-202412-广东省法学会婚姻家庭法学研究会鼓励奖-2025.pdf" },
  { date: "2024.10", title: "天河科技园微党课特等奖", thumb: "/assets/cert-thumbs/honors-22.webp", file: "/public-docs/honors/honors-22-202410-天河科技园微党课特等奖.pdf" },
  { date: "2024.08", title: "市律协荣誉纪念证书", thumb: "/assets/cert-thumbs/honors-20.webp", file: "/public-docs/honors/honors-20-202408-市律协荣誉纪念证书.pdf" },
  { date: "2024.03", title: "广东省律师协会优秀委员", thumb: "/assets/cert-thumbs/honors-17.webp", file: "/public-docs/honors/honors-17-202403-广东省律师协会优秀委员.pdf" },
  { date: "2020.12", title: "广东法学会婚姻家庭法学研究会优秀论文奖", thumb: "/assets/cert-thumbs/honors-09.webp", file: "/public-docs/honors/honors-09-202012-.pdf" },
  { date: "2018", title: "市律协优秀专业委员会委员", thumb: "/assets/cert-thumbs/honors-04.webp", file: "/public-docs/honors/honors-04-2018-.pdf" }
];

const appointments = [
  { date: "2024.12", title: "广州市黄埔区人民法院特邀调解员", thumb: "/assets/cert-thumbs/appointments-23.webp", file: "/public-docs/appointments/appointments-23-202412-.pdf" },
  { date: "2023.12", title: "广州国际商贸商事调解中心调解员", thumb: "/assets/cert-thumbs/appointments-18.webp", file: "/public-docs/appointments/appointments-18-202312-.pdf" },
  { date: "2022.12", title: "广州市律师协会信托与财富管理专委会秘书长", thumb: "/assets/cert-thumbs/appointments-15.webp", file: "/public-docs/appointments/appointments-15-202212-.pdf" },
  { date: "2021.03", title: "广东省律师协会信托与财富管理专委会副主任", thumb: "/assets/cert-thumbs/appointments-13.webp", file: "/public-docs/appointments/appointments-13-202103-.pdf" },
  { date: "2020.05", title: "广州铁路运输第一法院特邀调解员", thumb: "/assets/cert-thumbs/appointments-11.webp", file: "/public-docs/appointments/appointments-11-202005-.pdf" },
  { date: "2018.09", title: "茂名仲裁委员会仲裁员", thumb: "/assets/cert-thumbs/appointments-05.webp", file: "/public-docs/appointments/appointments-05-201809-.pdf" },
  { date: "2018.08", title: "河源仲裁委员会仲裁员", thumb: "/assets/cert-thumbs/appointments-04.webp", file: "/public-docs/appointments/appointments-04-201808-.pdf" }
];

export default function CertificatesPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".hero-content > *",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.3 }
    );

    gsap.utils.toArray(".certificate-card").forEach((item) => {
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
  }, { scope: container });

  return (
    <main className="bg-[#f9f9f9] min-h-screen" ref={container}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-[#775a19]/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-[1280px] mx-auto w-full px-6 lg:px-16 relative z-10">
          <div className="hero-content max-w-4xl">
            <span className="font-sans text-[12px] font-semibold text-[#775a19] tracking-[0.4em] mb-6 block uppercase">
              Credits & Credentials
            </span>
            <h1 className="font-serif text-[56px] md:text-[64px] leading-[1.1] mb-6 text-[#1a1c1c]">
              资质荣誉
            </h1>
            <p className="text-[16px] text-[#4e4639] leading-[1.7]">
              本页面严格基于韩曼莉律师个人资信档案库（Credential Registry）构建。我们集中呈现韩曼莉律师在执业生涯中所获的法定执业资格、行业协会要职、多元化争议解决（ADR）官方裁判席位及司法听证履职记录。每一份权威聘书与荣誉背书，不仅是其深厚法学素养与社会公信力的具象映射，更致力于为大中型企业合规审查、跨国投融资项目及政府法律顾问招投标，提供完整、透明且可追溯的专业资信核验支持（Due Diligence Support）。
            </p>
          </div>
        </div>
      </section>

      {/* Honors Section */}
      <section id="honors" className="section py-[120px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="font-sans text-[12px] font-semibold tracking-[0.2em] text-[#775a19] uppercase mb-3">荣誉证书</h2>
            <h3 className="font-serif text-[40px] md:text-[48px] text-[#1a1c1c] leading-[1.2]">专业成果、行业贡献与公益服务荣誉</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {honors.map((cert, i) => (
              <article key={i} className="certificate-card glass-card rounded-[1.5rem] overflow-hidden group cursor-pointer">
                <div className="relative h-[280px] overflow-hidden bg-white">
                  <img 
                    src={cert.thumb} 
                    alt={cert.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <a 
                    href={cert.file} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-[#1a1c1c] px-4 py-2 rounded-full text-[12px] font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                  >
                    查看原件 <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="p-6">
                  <p className="text-[12px] text-[#775a19] font-semibold mb-2">{cert.date}</p>
                  <h4 className="text-[18px] text-[#1a1c1c] font-serif leading-[1.3]">{cert.title}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Appointments Section */}
      <section id="appointments" className="section py-[120px] bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="mb-12">
            <h2 className="font-sans text-[12px] font-semibold tracking-[0.2em] text-[#775a19] uppercase mb-3">聘书与社会职务</h2>
            <h3 className="font-serif text-[40px] md:text-[48px] text-[#1a1c1c] leading-[1.2]">调解、仲裁、行业委员会与专业机构任职</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appointments.map((cert, i) => (
              <article key={i} className="certificate-card glass-card rounded-[1.5rem] overflow-hidden group cursor-pointer">
                <div className="relative h-[280px] overflow-hidden bg-white">
                  <img 
                    src={cert.thumb} 
                    alt={cert.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <a 
                    href={cert.file} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-[#1a1c1c] px-4 py-2 rounded-full text-[12px] font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                  >
                    查看原件 <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="p-6">
                  <p className="text-[12px] text-[#775a19] font-semibold mb-2">{cert.date}</p>
                  <h4 className="text-[18px] text-[#1a1c1c] font-serif leading-[1.3]">{cert.title}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section py-[120px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="glass-card p-12 rounded-[1.5rem] grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 items-center">
            <div>
              <h2 className="font-sans text-[12px] font-semibold tracking-[0.2em] text-[#775a19] uppercase mb-3">核验证书与进一步沟通</h2>
              <h3 className="font-serif text-[32px] md:text-[40px] text-[#1a1c1c] mb-4">瀛和前台：020-8707 7500</h3>
              <p className="text-[16px] text-[#4e4639]">如需查看原始证书文件，可点击每项"查看原件"。</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/assets/geren.png" alt="韩曼莉律师微信二维码" className="w-40 h-40 rounded-xl shadow-md mb-4" />
              <span className="text-[14px] text-[#4e4639] font-semibold">个人微信</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/assets/wechat-qr.png" alt="微信公众号二维码" className="w-40 h-40 rounded-xl shadow-md mb-4" />
              <span className="text-[14px] text-[#4e4639] font-semibold">微信公众号</span>
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
