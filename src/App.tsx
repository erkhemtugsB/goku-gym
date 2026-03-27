/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  Menu, 
  X,
  ChevronRight,
  Camera,
  PlayCircle,
  Trophy
} from "lucide-react";
import { useState, useEffect } from "react";
import { LOCATIONS, GALLERY } from "./constants";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-surface/80 backdrop-blur-xl py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary flex items-center justify-center">
            <Trophy className="text-surface w-6 h-6" />
          </div>
          <span className="text-2xl font-black italic tracking-tighter text-primary font-headline uppercase">GOKU GYM</span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-headline uppercase tracking-tighter font-bold text-sm">
          <a href="#" className="text-primary border-b-2 border-primary pb-1">СУРГАЛТ</a>
          <a href="#" className="text-white/70 hover:text-white transition-all">ХООЛЛОЛТ</a>
          <a href="#" className="text-white/70 hover:text-white transition-all">ТОНОГ ТӨХӨӨРӨМЖ</a>
          <a href="#" className="text-white/70 hover:text-white transition-all">ХАМТ ОЛОН</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden lg:block text-white/70 hover:text-white font-headline text-xs tracking-widest uppercase">НЭВТРЭХ</button>
          <button className="bg-primary text-surface px-6 py-2 font-headline font-black uppercase tracking-tighter hover:scale-95 duration-150 transition-all">ОДОО НЭГДЭХ</button>
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface-container absolute top-full left-0 w-full p-6 flex flex-col gap-6 font-headline uppercase font-bold"
        >
          <a href="#" className="text-primary">СУРГАЛТ</a>
          <a href="#" className="text-white/70">ХООЛЛОЛТ</a>
          <a href="#" className="text-white/70">ТОНОГ ТӨХӨӨРӨМЖ</a>
          <a href="#" className="text-white/70">ХАМТ ОЛОН</a>
          <button className="text-white/70 text-left">НЭВТРЭХ</button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-start pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvNmnwmVkoOpkojpA68-rU4N2Jbb8ej7ZhwJMpxK0pP866RkPuB7y9l_VJXwGKHVimn-mkpxD9ZRqtt5uhHRMJ-qF-z6ypLInPbrpbQXnKSuUIOgXWa8QAw3tEfQq43SQPUPAzUjEcwTkHG5riY3yY4ajjC4MkhFKBgUTS_G7wqe15nOE_noePS0cmojST4WYKItOLSBHz6JYIdiss9VVWAwJAWzlmWf6WwKX9CSsJQcAowanC7DbZU-GxwhkJpt5BRBUsIMUmssE" 
          className="w-full h-full object-cover grayscale brightness-50"
          alt="Gym Interior"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent"></div>
      </div>

      <div className="relative z-10 px-6 md:px-20 max-w-5xl">
        <motion.h4 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-primary font-headline font-bold tracking-[0.3em] uppercase mb-4 text-sm"
        >
          ХЯЗГААРЫГ ДАВАН ТУУЛ
        </motion.h4>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl lg:text-9xl font-black font-headline leading-none uppercase tracking-tighter mb-6 italic"
        >
          ӨӨРИЙН ДОТОРХ <br/>
          <span className="text-primary">ДАЙЧНЫГ</span> СЭРЭЭ
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-on-surface-variant font-body text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
        >
          Монголын хамгийн хүчирхэг фитнес хамт олонд нэгдэж, бие бялдар болон сэтгэл зүйн хувьд шинэ түвшинд гар. Бид танд хамгийн шилдэг тоног төхөөрөмж, мэргэжлийн баг хамт олныг санал болгож байна.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <button className="power-gradient text-surface px-10 py-5 font-headline font-black text-xl tracking-tighter uppercase hover:scale-105 transition-transform">
            БЭЛТГЭЛЭЭ ЭХЛЭХ
          </button>
          <button className="border-2 border-white/20 bg-surface/40 backdrop-blur-md text-white px-10 py-5 font-headline font-bold text-xl tracking-tighter uppercase hover:bg-white hover:text-surface transition-all">
            БИДНИЙ ТУХАЙ
          </button>
        </motion.div>
      </div>

      <div className="absolute right-[-5%] bottom-10 hidden xl:block">
        <span className="text-[18rem] font-black italic kinetic-text-stroke leading-none select-none">POWER</span>
      </div>
    </section>
  );
};

const Locations = () => {
  return (
    <section className="py-24 bg-surface-container-low px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black font-headline uppercase tracking-tighter italic">БАЙРШЛУУД</h2>
            <div className="h-2 w-32 bg-primary mt-4"></div>
          </div>
          <p className="text-on-surface-variant font-body uppercase tracking-widest text-sm">УЛААНБААТАР ХОТ ДАХЬ 8 САЛБАР</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {LOCATIONS.map((loc) => (
            <div key={loc.id} className="group relative aspect-[3/4] overflow-hidden bg-surface-container border border-white/5">
              <img 
                src={loc.image} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                alt={loc.name}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-black font-headline uppercase mb-2">{loc.name}</h3>
                <p className="text-on-surface-variant text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity delay-100">{loc.description}</p>
                <button className="bg-primary text-surface px-6 py-3 font-headline font-bold text-xs uppercase tracking-tighter flex items-center gap-2">
                  БАЙРШЛЫГ ҮЗЭХ <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section className="py-24 bg-surface px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-8xl font-black font-headline uppercase tracking-tighter italic">ГАЛЕРЕЙ</h2>
          <p className="text-primary tracking-[0.5em] uppercase text-xs mt-4 font-bold">БИДНИЙ ХЭМНЭЛ</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {GALLERY.map((item) => (
            <div key={item.id} className={`${item.span} relative overflow-hidden group`}>
              <img 
                src={item.image} 
                className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                alt="Gallery Item"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[20px] border-transparent group-hover:border-primary/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-surface-container-low overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none select-none">
        <span className="text-[25rem] font-black italic absolute -top-40 -left-20">GOKU</span>
      </div>
      <div className="px-6 md:px-20 relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black font-headline uppercase leading-none mb-8 italic">
              ХАМТ ОЛОН БА <br/> <span className="text-primary">ҮР ДҮН</span>
            </h2>
            <div className="space-y-12">
              <blockquote className="border-l-4 border-primary pl-8 py-2">
                <p className="text-2xl font-body italic mb-6 leading-relaxed">
                  "GOKU GYM бол зүгээр нэг бэлтгэлийн газар биш, энэ бол амьдралын шинэ хэв маяг. Эндхийн уур амьсгал намайг өдөр бүр хурцалдаг."
                </p>
                <cite className="not-italic flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-headline font-bold text-surface">Б.</div>
                  <div>
                    <span className="block font-headline font-bold uppercase tracking-tighter">БАТ-ЭРДЭНЭ</span>
                    <span className="text-primary text-xs uppercase tracking-widest font-bold">PRO BODYBUILDER</span>
                  </div>
                </cite>
              </blockquote>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-surface-container p-6 border-l-2 border-primary/30">
                  <span className="text-4xl font-headline font-black text-primary block mb-2">15,000+</span>
                  <span className="text-on-surface-variant text-xs uppercase font-bold tracking-widest">ИДЭВХТЭЙ ГИШҮҮД</span>
                </div>
                <div className="bg-surface-container p-6 border-l-2 border-primary/30">
                  <span className="text-4xl font-headline font-black text-primary block mb-2">120+</span>
                  <span className="text-on-surface-variant text-xs uppercase font-bold tracking-widest">МЭРГЭЖЛИЙН БАГШ</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsxswdVVFLr5CMmBOuofl2-f0KmggXvaF__Y0VCbwvheS0UvBIcBRnjIodXUXvY3mzMByovy7wTu-eoo86wzI021YgwV1c3Qn0zGsWzDP9QE6B6u7DP6CNHpTaRwrrHNJjiYPbjEkO_GNsnWO7icSO1DqqPRF0glzhEG4HiPQeBFK0GA90jOCp9tiPocc1Kn_MjuOGIEtBGisFMyKAeoP_-qRzBEpM3sOgLRzBXzf3HBb_G_kUKKrh1djcY74H6jynGHi2uu6zc_8" 
              className="w-full aspect-square object-cover"
              alt="Athlete"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 bg-primary text-surface p-10 font-headline font-black uppercase tracking-tighter text-3xl leading-none">
              БҮХ ЗҮЙЛ <br/> ТАНЫ ГАРТ
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="py-24 bg-surface px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl md:text-8xl font-black font-headline uppercase leading-none mb-6 italic">
            ХОЛБОО <br/> <span className="text-primary">БАРИХ</span>
          </h2>
          <p className="text-on-surface-variant mb-12 max-w-md">Асуух зүйл байна уу? Манай баг танд туслахад бэлэн байна. Доорх формыг бөглөж эсвэл шууд холбогдоно уу.</p>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <MapPin className="text-primary w-8 h-8 shrink-0" />
              <div>
                <h4 className="font-headline font-bold uppercase mb-1">ХАЯГ</h4>
                <p className="text-on-surface-variant text-sm">Улаанбаатар хот, Хан-Уул дүүрэг, 11-р хороо, Зайсан Хилл Цогцолбор</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <Phone className="text-primary w-8 h-8 shrink-0" />
              <div>
                <h4 className="font-headline font-bold uppercase mb-1">УТАС</h4>
                <p className="text-on-surface-variant text-sm">+976 7700 1234, +976 9911 2233</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <Mail className="text-primary w-8 h-8 shrink-0" />
              <div>
                <h4 className="font-headline font-bold uppercase mb-1">И-МЭЙЛ</h4>
                <p className="text-on-surface-variant text-sm">info@gokugym.mn</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-surface-container p-8 md:p-12 relative overflow-hidden">
          <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <label className="block font-headline font-bold text-xs uppercase tracking-[0.2em]">ТАНЫ НЭР</label>
              <input 
                className="w-full bg-transparent border-b border-white/20 focus:border-primary outline-none transition-colors py-4 px-0 text-on-surface placeholder:text-white/20" 
                placeholder="Нэрээ оруулна уу" 
                type="text"
              />
            </div>
            <div className="space-y-4">
              <label className="block font-headline font-bold text-xs uppercase tracking-[0.2em]">И-МЭЙЛ ХАЯГ</label>
              <input 
                className="w-full bg-transparent border-b border-white/20 focus:border-primary outline-none transition-colors py-4 px-0 text-on-surface placeholder:text-white/20" 
                placeholder="email@example.com" 
                type="email"
              />
            </div>
            <div className="space-y-4">
              <label className="block font-headline font-bold text-xs uppercase tracking-[0.2em]">МЕССЕЖ</label>
              <textarea 
                className="w-full bg-transparent border-b border-white/20 focus:border-primary outline-none transition-colors py-4 px-0 text-on-surface placeholder:text-white/20 resize-none" 
                placeholder="Таны асуулт эсвэл хүсэлт..." 
                rows={4}
              ></textarea>
            </div>
            <button className="w-full power-gradient text-surface py-6 font-headline font-black uppercase tracking-tighter text-xl hover:scale-[1.02] transition-transform">
              МЕССЕЖ ИЛГЭЭХ
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="mb-12 md:mb-0">
            <div className="text-4xl font-black text-primary mb-8 font-headline italic uppercase tracking-tighter">GOKU GYM</div>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-primary transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-white/40 hover:text-primary transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-white/40 hover:text-primary transition-colors"><Youtube size={24} /></a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div>
              <h5 className="text-primary font-headline font-bold mb-6 tracking-widest uppercase text-sm">ХУУЛЬ ЭРХ ЗҮЙ</h5>
              <ul className="space-y-4 font-body text-sm tracking-widest uppercase">
                <li><a href="#" className="text-white/40 hover:text-primary transition-colors">НУУЦЛАЛЫН БОДЛОГО</a></li>
                <li><a href="#" className="text-white/40 hover:text-primary transition-colors">ҮЙЛЧИЛГЭЭНИЙ НӨХЦӨЛ</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-primary font-headline font-bold mb-6 tracking-widest uppercase text-sm">ХӨТӨЛБӨР</h5>
              <ul className="space-y-4 font-body text-sm tracking-widest uppercase">
                <li><a href="#" className="text-white/40 hover:text-primary transition-colors">ТҮНШЛЭЛИЙН ХӨТӨЛБӨР</a></li>
                <li><a href="#" className="text-white/40 hover:text-primary transition-colors">БАГШ БЭЛТГЭХ</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-primary font-headline font-bold mb-6 tracking-widest uppercase text-sm">ТУСЛАМЖ</h5>
              <ul className="space-y-4 font-body text-sm tracking-widest uppercase">
                <li><a href="#" className="text-white/40 hover:text-primary transition-colors">ХОЛБОО БАРИХ</a></li>
                <li><a href="#" className="text-white/40 hover:text-primary transition-colors">ТҮГЭЭМЭЛ АСУУЛТУУД</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 font-body text-xs tracking-widest uppercase">© 2024 GOKU GYM. ӨӨРИЙН ДОТОРХ ДАЙЧНЫГ СЭРЭЭ.</p>
          <div className="flex items-center gap-2">
            <span className="text-white/20 text-xs font-headline uppercase tracking-widest">DESIGNED BY GOKU DESIGN SYSTEM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-surface selection:bg-primary selection:text-surface">
      <Navbar />
      <main>
        <Hero />
        <Locations />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
