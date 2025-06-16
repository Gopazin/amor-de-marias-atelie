import React from 'react';
import { Heart, Award, Users, Sparkles } from 'lucide-react';
const AboutSection = () => {
  return <section className="bg-gradient-to-br from-warm-50 to-peach-50 section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-800 mb-6 md:text-6xl">
                Conheça{' '}
                <span className="text-primary">Elisandra Radaelli</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Pedagoga, terapeuta e artesã apaixonada por conectar mulheres 
                com sua essência através da arte terapêutica. Com anos de experiência 
                em vivências espirituais e pedagógicas, Elisandra desenvolveu um método 
                único que une técnica, acolhimento e transformação pessoal.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <Users className="w-8 h-8 text-primary mx-auto mb-3 bg-gray-600" />
                <div className="text-2xl font-bold text-gray-800">500+</div>
                <div className="text-gray-600">Alunas Transformadas</div>
              </div>
              
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <Award className="w-8 h-8 text-primary mx-auto mb-3 bg-gray-600" />
                <div className="text-2xl font-bold text-gray-800">5+ Anos</div>
                <div className="text-gray-600">de Experiência</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-rose-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6 text-primary" />
                Minha Missão
              </h3>
              <p className="text-gray-700 leading-relaxed italic text-lg">
                "Acredito que cada mulher carrega dentro de si uma criadora poderosa. 
                Através das bonecas terapêuticas, eu ajudo você a despertar essa força, 
                se reconectar com sua criança interior e descobrir uma nova forma de 
                se expressar no mundo. É mais do que ensinar uma técnica - é oferecer 
                um caminho de cura e autoconhecimento."
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-gray-700 font-medium">Pedagoga Certificada</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-gray-700 font-medium">Terapeuta Holística</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-gray-700 font-medium">Especialista Waldorf</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <img src="/lovable-uploads/71e624c1-6b04-4cd5-b877-bf92a8b4262f.png" alt="Elisandra Radaelli com suas alunas" className="rounded-3xl shadow-2xl w-full h-auto" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary bg-gray-950 rounded-xl">@amordemarias.atelie</div>
                  <div className="text-gray-600">Siga nossa jornada</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 bg-primary text-white p-6 rounded-2xl shadow-xl rotate-12">
              <div className="text-center">
                <Heart className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold">Amor em</div>
                <div className="font-bold">cada ponto</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-rose-100">
            <h3 className="text-2xl font-display font-bold text-gray-800 mb-4">
              Pronta para essa Jornada de Transformação?
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              Deixe a Elisandra te guiar nessa experiência única de criação e autocura
            </p>
            <button className="btn-primary">
              Começar Minha Jornada Agora
              <Heart className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;