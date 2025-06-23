import React from 'react';
import { Heart, Award, Users, Sparkles } from 'lucide-react';
const AboutSection = () => {
  return <section className="bg-gradient-to-br from-yellow-50 to-yellow-100 section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-800 mb-6 md:text-6xl">
                Conheça{' '}
                <span className="text-yellow-600">Elisandra Radaelli</span>
              </h2>
              <p className="text-xl text-slate-700 leading-relaxed mb-8">
                Pedagoga, terapeuta e artesã apaixonada por conectar mulheres 
                com sua essência através da arte terapêutica. Com anos de experiência 
                em vivências espirituais e pedagógicas, Elisandra desenvolveu um método 
                único que une técnica, acolhimento e transformação pessoal.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <Users className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-800">500+</div>
                <div className="text-slate-700">Alunas Transformadas</div>
              </div>
              
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <Award className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-800">5+ Anos</div>
                <div className="text-slate-700">de Experiência</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-yellow-200">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6 text-yellow-600" />
                Minha Missão
              </h3>
              <p className="text-slate-700 leading-relaxed italic text-lg">
                "Acredito que cada mulher carrega dentro de si uma criadora poderosa. 
                Através das bonecas terapêuticas, eu ajudo você a despertar essa força, 
                se reconectar com sua criança interior e descobrir uma nova forma de 
                se expressar no mundo. É mais do que ensinar uma técnica - é oferecer 
                um caminho de cura e autoconhecimento."
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Sparkles className="w-5 h-5 text-yellow-600" />
                <span className="text-slate-700 font-medium">Pedagoga Certificada</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Sparkles className="w-5 h-5 text-yellow-600" />
                <span className="text-slate-700 font-medium">Terapeuta Holística</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Sparkles className="w-5 h-5 text-yellow-600" />
                <span className="text-slate-700 font-medium">Especialista Waldorf</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <img src="/lovable-uploads/71e624c1-6b04-4cd5-b877-bf92a8b4262f.png" alt="Elisandra Radaelli com suas alunas" className="rounded-3xl shadow-2xl w-full h-auto" />
              
            </div>

            <div className="absolute -top-8 -right-8 bg-yellow-500 text-slate-900 p-6 rounded-2xl shadow-xl rotate-12">
              <div className="text-center bg-amber-200">
                <Heart className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold">Amor em</div>
                <div className="font-bold">cada ponto</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-yellow-200">
            <h3 className="text-2xl font-display font-bold text-slate-800 mb-4">
              Pronta para essa Jornada de Transformação?
            </h3>
            <p className="text-slate-700 text-lg mb-6">
              Deixe a Elisandra te guiar nessa experiência única de criação e autocura
            </p>
            <a 
              href="https://pay.kiwify.com.br/hHUz57d" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-slate-50 inline-flex items-center"
            >
              Começar Minha Jornada Agora
              <Heart className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;
