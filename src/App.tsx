import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Instagram, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  X, 
  ChevronRight,
  ShieldCheck,
  UserCheck,
  Sparkles,
  Clock
} from 'lucide-react';
import { EXPERT_DATA, IMAGES, TRUST_CARDS, STEPS } from './constants';

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleWhatsAppClick = () => {
    window.open(EXPERT_DATA.whatsapp, '_blank');
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Resultado" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt={EXPERT_DATA.name}
            className="w-full h-full object-cover object-top opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        <div className="relative z-10 px-6 pb-12 pt-24 max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-brand-accent text-white rounded-full">
              Atendimento Premium em Ipixuna
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-4">
              Eu sou <span className="text-brand-accent italic">{EXPERT_DATA.name}</span>, seu dentista em Ipixuna.
            </h1>
            <p className="text-lg text-slate-200 mb-8 max-w-xl leading-relaxed">
              Transformando sorrisos com tecnologia, segurança e o cuidado que você merece. Agende sua avaliação e descubra o seu melhor sorriso.
            </p>
            
            <button onClick={handleWhatsAppClick} className="whatsapp-btn w-full md:w-auto mb-6">
              <MessageCircle size={24} />
              Agendar consulta gratuita
            </button>
            
            <p className="flex items-center justify-center md:justify-start gap-2 text-sm text-slate-400">
              <Clock size={14} /> Resposta rápida • Sem compromisso
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who Am I Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <img 
              src={IMAGES.logo} 
              alt="Ortho Plus Logo" 
              className="h-24 md:h-32 w-auto object-contain mb-4"
              referrerPolicy="no-referrer"
            />
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-primary tracking-wide">
              Ortho Plus
            </h2>
            <div className="w-12 h-1 bg-brand-accent mt-4 rounded-full" />
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={IMAGES.authority[0]} 
                alt="Dr. Carlos Alberto" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-primary text-white p-6 rounded-2xl shadow-xl hidden md:block">
              <p className="text-2xl font-serif italic">"Cuidar do seu sorriso é a minha missão."</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif mb-6 text-brand-primary">Excelência em cada detalhe</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Com anos de experiência e foco constante em inovação, ofereço um atendimento humanizado e focado em resultados reais. Meu objetivo não é apenas tratar dentes, mas devolver a confiança e a alegria de sorrir.
            </p>
            
            <ul className="space-y-4 mb-8">
              {EXPERT_DATA.specialties.map((spec, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 size={20} className="text-brand-accent shrink-0" />
                  {spec}
                </li>
              ))}
            </ul>

            <button onClick={handleWhatsAppClick} className="flex items-center gap-2 text-brand-primary font-bold hover:text-brand-accent transition-colors group">
              Falar diretamente comigo no WhatsApp
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Results Gallery */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-brand-primary">Resultados Reais</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Veja algumas das transformações que realizamos. Cada sorriso é único e planejado com precisão.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {IMAGES.results.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square rounded-xl overflow-hidden cursor-pointer group relative"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Resultado ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Sparkles className="text-white" size={32} />
                </div>
              </motion.div>
            ))}
          </div>
          
          <p className="text-center mt-8 text-xs text-slate-400 italic">
            *Resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </section>

      {/* Why Trust Section */}
      <section className="py-20 px-6 bg-brand-primary text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Por que confiar em mim?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Minha prioridade é oferecer uma experiência odontológica segura, transparente e de alta qualidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_CARDS.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-brand-accent/20 rounded-2xl flex items-center justify-center mb-6">
                  {i === 0 && <ShieldCheck className="text-brand-accent" />}
                  {i === 1 && <UserCheck className="text-brand-accent" />}
                  {i === 2 && <Sparkles className="text-brand-accent" />}
                  {i === 3 && <CheckCircle2 className="text-brand-accent" />}
                </div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intermediate CTA */}
      <section className="py-20 px-6 bg-brand-accent text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Pronto para transformar seu sorriso?</h2>
          <p className="text-lg mb-10 opacity-90">
            Não deixe para depois o cuidado que você merece hoje. A primeira consulta é por minha conta.
          </p>
          <button onClick={handleWhatsAppClick} className="bg-white text-brand-accent font-bold py-5 px-10 rounded-full shadow-2xl hover:bg-slate-50 transition-all transform hover:scale-105 flex items-center justify-center gap-3 mx-auto">
            <MessageCircle size={24} />
            Agendar minha consulta gratuita
          </button>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-brand-primary">Como funciona a primeira consulta</h2>
            <p className="text-slate-500">Simples, rápido e totalmente sem compromisso.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {STEPS.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="text-8xl font-serif font-bold text-slate-100 absolute -top-10 left-1/2 -translate-x-1/2 -z-10">
                  {step.number}
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-bold mb-4 text-brand-primary">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 -translate-y-1/2 text-slate-200">
                    <ChevronRight size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center">
            <p className="text-brand-primary font-medium">
              Reforçamos: a primeira avaliação é <span className="text-brand-accent font-bold">100% gratuita</span> para novos pacientes.
            </p>
          </div>
        </div>
      </section>

      {/* More Proof / Backstage */}
      <section className="py-20 px-6 bg-slate-50 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4 text-brand-primary">Bastidores e Autoridade</h2>
            <p className="text-slate-500">Conheça um pouco mais do meu ambiente de trabalho e dedicação.</p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
            {IMAGES.authority.map((img, i) => (
              <motion.div
                key={i}
                className="min-w-[280px] md:min-w-[400px] aspect-[4/3] rounded-3xl overflow-hidden snap-center shadow-lg"
              >
                <img 
                  src={img} 
                  alt="Bastidores" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-accent rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-primary rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
            Seu novo sorriso começa com uma <span className="text-brand-accent italic">decisão</span>.
          </h2>
          <p className="text-xl mb-12 text-slate-300">
            Estou pronto para te atender e transformar sua saúde bucal. Agende agora sua consulta gratuita.
          </p>
          <button onClick={handleWhatsAppClick} className="whatsapp-btn mx-auto scale-110">
            <MessageCircle size={28} />
            Quero agendar agora no WhatsApp
          </button>
          <p className="mt-6 text-slate-500 text-sm">
            Atendimento exclusivo em Ipixuna - AM
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left flex flex-col items-center md:items-start gap-4">
            <img 
              src={IMAGES.logo} 
              alt="Logo" 
              className="h-10 w-auto object-contain opacity-80"
              referrerPolicy="no-referrer"
            />
            <div>
              <h3 className="text-xl font-serif font-bold text-brand-primary">{EXPERT_DATA.name}</h3>
              <p className="text-slate-500 text-sm">{EXPERT_DATA.profession}</p>
              <a 
                href={EXPERT_DATA.locationLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-1 text-xs text-slate-400 mt-2 hover:text-brand-accent transition-colors"
              >
                <MapPin size={12} /> {EXPERT_DATA.location}
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <a 
              href={EXPERT_DATA.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-brand-primary hover:text-white transition-all"
            >
              <Instagram size={24} />
            </a>
            <a 
              href={EXPERT_DATA.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-[#25D366] hover:text-white transition-all"
            >
              <MessageCircle size={24} />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} {EXPERT_DATA.name}. Todos os direitos reservados.
            </p>
            <p className="text-[10px] text-slate-300 mt-1 uppercase tracking-widest">
              Design Premium para Especialistas
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
