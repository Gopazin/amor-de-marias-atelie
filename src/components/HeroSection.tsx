
import React from 'react';
import { Heart, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-warm-50 via-peach-50 to-rose-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23d97591" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container-custom section-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">
                <Heart className="w-4 h-4" />
                Curso Terapêutico Online
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-800 leading-tight">
                Dê Vida à Sua{' '}
                <span className="text-primary">Boneca Terapêutica</span>{' '}
                e Acolha a Si Mesma
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Um curso afetivo e profundo para mulheres que buscam se expressar, 
                se curar e transformar vidas com as mãos e o coração.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary group">
                Quero Fazer Minha Boneca Terapêutica
                <Heart className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              
              <Button variant="outline" className="btn-secondary group">
                <PlayCircle className="w-5 h-5 mr-2" />
                Ver Como Funciona
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">R$ 97</div>
                <div className="text-sm text-gray-500">Curso Completo</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700">500+</div>
                <div className="text-sm text-gray-500">Alunas Felizes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700">Vitalício</div>
                <div className="text-sm text-gray-500">Acesso Total</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative">
              <img 
                src="/lovable-uploads/d077f26e-be8e-43ab-a990-271214ab8049.png"
                alt="Bonecas terapêuticas coloridas sendo criadas em círculo"
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                ✨ Vagas Limitadas
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
              <div className="flex items-center gap-3">
                <img 
                  src="/lovable-uploads/5abd3d43-ad53-4388-bad3-da22d0a6ae4d.png"
                  alt="Boneca vermelha artesanal"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">Elisandra Radaelli</p>
                  <p className="text-sm text-gray-600">Pedagoga & Terapeuta</p>
                  <div className="flex text-yellow-400 text-sm">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
