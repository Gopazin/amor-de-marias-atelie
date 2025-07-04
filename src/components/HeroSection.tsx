import React from 'react';
import { Heart } from 'lucide-react';
const HeroSection = () => {
  return <section className="relative bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 overflow-hidden">
      
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-yellow-200/30 to-yellow-300/30"></div>
      </div>
      
      <div className="container-custom section-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in text-center lg:text-left">
            
            <div className="space-y-6">
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 text-slate-800 px-4 py-2 rounded-full text-sm font-medium bg-yellow-300">
                  <Heart className="w-4 h-4" />
                  Curso Terapêutico Online
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-800 leading-tight">
                Dê Vida à Sua{' '}
                <span className="text-yellow-600">Boneca Terapêutica</span>{' '}
                e Acolha a Si Mesma
              </h1>
              
              <p className="text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
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

            
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">R$ 97</div>
                <div className="text-sm text-slate-600">Curso Completo</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">500+</div>
                <div className="text-sm text-slate-600">Alunas Felizes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">Vitalício</div>
                <div className="text-sm text-slate-600">Acesso Total</div>
              </div>
            </div>
          </div>

          
          <div className="relative animate-scale-in">
            <div className="text-center mb-4">
              <div className="inline-flex items-center gap-3 bg-yellow-50 px-6 py-3 rounded-full border border-yellow-200 hover:bg-yellow-100 transition-all duration-300 cursor-pointer group">
                
                <p className="text-lg text-slate-700 font-medium group-hover:text-slate-800 transition-colors">
                  Saiba mais sobre a Elisandra e as bonecas Waldorf
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-3xl shadow-2xl overflow-hidden bg-black">
                <iframe src="https://www.youtube.com/embed/e4gVHI96YCQ" title="Curso de Bonecas Terapêuticas" className="w-full aspect-video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
              </div>
            </div>
            
            <div className="relative mt-8 bg-white p-6 rounded-2xl shadow-xl max-w-sm mx-auto">
              
              <div className="flex items-center gap-3">
                <img alt="Boneca vermelha artesanal" className="w-16 h-16 rounded-full object-cover" src="/lovable-uploads/ad957365-7a42-4849-9238-19a9eb6413ae.jpg" />
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
        </div>
      </div>
    </section>;
};
export default HeroSection;