import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import TeamSpiral from "@/components/TeamSpiral";
import { Phone, MapPin, Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      
      {/* Service Strip */}
      <section className="py-4 bg-white border-y border-[#dadada]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 flex flex-wrap justify-center gap-8">
          <a href="/product" className="text-[14px] text-[#1a1c1c] hover:text-[#775a19] font-semibold transition-colors">家事服务</a>
          <a href="/private-service" className="text-[14px] text-[#1a1c1c] hover:text-[#775a19] font-semibold transition-colors">私人定制服务</a>
          <a href="/product" className="text-[14px] text-[#1a1c1c] hover:text-[#775a19] font-semibold transition-colors">A类人群人财保传</a>
          <a href="/certificates" className="text-[14px] text-[#1a1c1c] hover:text-[#775a19] font-semibold transition-colors">证书完整展示</a>
          <a href="/han-manli#cases" className="text-[14px] text-[#1a1c1c] hover:text-[#775a19] font-semibold transition-colors">案例</a>
        </div>
      </section>

      {/* Team Spiral Section */}
      <TeamSpiral />

      {/* Contact Section */}
      <section id="contact" className="section py-[120px] bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="font-sans text-[12px] font-semibold tracking-[0.2em] text-[#775a19] uppercase mb-3">联系我们</h2>
            <h3 className="font-serif text-[40px] md:text-[48px] text-[#1a1c1c] leading-[1.2]">稳妥沟通，从一次清晰咨询开始</h3>
          </div>
          
          <div className="glass-card p-12 rounded-[1.5rem]">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#775a19] mt-1" />
                  <div>
                    <h4 className="text-[18px] font-semibold text-[#1a1c1c] mb-1">前台电话</h4>
                    <a href="tel:02087077500" className="text-[24px] text-[#775a19] font-serif hover:underline">020-8707 7500</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#775a19] mt-1" />
                  <div>
                    <h4 className="text-[18px] font-semibold text-[#1a1c1c] mb-1">地址</h4>
                    <p className="text-[16px] text-[#4e4639]">广州市天河区珠江东路58号越秀金融大厦57层</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#775a19] mt-1" />
                  <div>
                    <h4 className="text-[18px] font-semibold text-[#1a1c1c] mb-1">邮箱</h4>
                    <a href="mailto:vinetoby@126.com" className="text-[16px] text-[#4e4639] hover:text-[#775a19]">vinetoby@126.com</a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img src="/assets/geren.png" alt="韩曼莉律师个人微信" className="w-40 h-40 rounded-xl shadow-md mb-4" />
                <span className="text-[14px] text-[#4e4639] font-semibold">个人微信</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/assets/wechat-qr.png" alt="微信公众号" className="w-40 h-40 rounded-xl shadow-md mb-4" />
                <span className="text-[14px] text-[#4e4639] font-semibold">微信公众号</span>
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
    </>
  );
}
