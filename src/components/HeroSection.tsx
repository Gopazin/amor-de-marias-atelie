import React from 'react';
import { Heart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 overflow-hidden">
      
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-yellow-200/30 to-yellow-300/30"></div>
      </div>
      
      <div className="container-custom section-padding relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Conteúdo textual */}
          <div className="order-2 lg:order-1 space-y-6 lg:space-y-8 animate-fade-in text-center lg:text-left">
            
            <div className="space-y-4 lg:space-y-6">
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 text-slate-800 px-4 py-2 rounded-full text-sm font-medium bg-yellow-300">
                  <Heart className="w-4 h-4" />
                  Curso Terapêutico Online
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-slate-800 leading-tight">
                Dê Vida à Sua{' '}
                <span className="text-yellow-600">Boneca Terapêutica</span>{' '}
                e Acolha a Si Mesma
              </h1>
              
              <p className="text-lg lg:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Um curso afetivo e profundo para mulheres que buscam se expressar, 
                se curar e transformar vidas com as mãos e o coração.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <a href="https://pay.kiwify.com.br/hHUz57d" target="_blank" rel="noopener noreferrer" className="btn-primary group inline-flex items-center justify-center text-white whitespace-nowrap">
                Comprar o Curso por R$&nbsp;97
                <Heart className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Estatísticas */}
            <div className="flex items-center justify-center lg:justify-start gap-6 lg:gap-8 pt-4 lg:pt-6">
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-yellow-600">R$ 97</div>
                <div className="text-xs lg:text-sm text-slate-600">Curso Completo</div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-slate-800">500+</div>
                <div className="text-xs lg:text-sm text-slate-600">Alunas Felizes</div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-slate-800">Vitalício</div>
                <div className="text-xs lg:text-sm text-slate-600">Acesso Total</div>
              </div>
            </div>
          </div>

          {/* Vídeo */}
          <div className="order-1 lg:order-2 relative animate-scale-in">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              <div className="rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden bg-black relative">
                <iframe 
                  src="https://www.youtube.com/embed/e4gVHI96YCQ" 
                  title="Curso de Bonecas Terapêuticas"
                  className="w-full aspect-video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                
                {/* Badge - reposicionado para mobile */}
                <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 text-white px-3 py-1 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-semibold shadow-lg bg-slate-800 z-10">
                  ✨ Vagas Limitadas
                </div>
              </div>
            </div>
            
            {/* Card da professora - reposicionado para mobile */}
            <div className="absolute -bottom-4 -left-2 lg:-bottom-8 lg:-left-8 bg-white p-3 lg:p-6 rounded-xl lg:rounded-2xl shadow-xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-2 lg:gap-3">
                <img alt="Boneca vermelha artesanal" className="w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover" src="/lovable-uploads/ad957365-7a42-4849-9238-19a9eb6413ae.jpg" />
                <div>
                  <p className="font-semibold text-slate-800 text-sm lg:text-base">Elisandra Radaelli</p>
                  <p className="text-xs lg:text-sm text-slate-600">Pedagoga & Terapeuta</p>
                  <div className="flex text-yellow-500 text-xs lg:text-sm font-medium">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Card da professora para mobile - separado */}
        <div className="sm:hidden mt-8 bg-white p-4 rounded-xl shadow-xl max-w-sm mx-auto">
          <div className="flex items-center gap-3">
            <img alt="Boneca vermelha artesanal" className="w-14 h-14 rounded-full object-cover" src="/lovable-uploads/ad957365-7a42-4849-9238-19a9eb6413ae.jpg" />
            <div>
              <p className="font-semibold text-slate-800">Elisandra Radaelli</p>
              <p className="text-sm text-slate-600">Pedagoga & Terapeuta</p>
              <div className="flex text-yellow-500 text-sm font-medium">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;