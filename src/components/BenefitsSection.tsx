import React from 'react';
import { Heart, Users, Award, Sparkles, Gift, Clock } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [{
    icon: Heart,
    title: "Reconexão com Sua Criança Interior",
    description: "Desperte a magia que existe dentro de você através da arte e do criar com as mãos."
  }, {
    icon: Award,
    title: "Habilidade Terapêutica e Geradora de Renda",
    description: "Aprenda uma técnica que cura você e ainda pode se tornar uma fonte de renda extra."
  }, {
    icon: Users,
    title: "Comunidade Acolhedora",
    description: "Faça parte de um grupo especial de mulheres que se apoiam e crescem juntas."
  }, {
    icon: Sparkles,
    title: "Mentoria Personalizada",
    description: "Receba orientação direta da Elisandra em cada etapa da sua jornada criativa."
  }, {
    icon: Gift,
    title: "Bonecas com Significado Profundo",
    description: "Crie bonecas que carregam intenção, amor e propósito terapêutico."
  }, {
    icon: Clock,
    title: "Acesso Vitalício",
    description: "Tenha acesso para sempre ao conteúdo e possa revisitar sempre que precisar."
  }];

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        {/* Seção explicativa sobre a boneca terapêutica */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800 mb-8">
            O que é a boneca de pano terapêutica?
          </h2>
          
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-50 to-yellow-100 p-8 rounded-3xl border border-yellow-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left space-y-4">
                <p className="text-lg text-slate-700 leading-relaxed">
                  A boneca de pano terapêutica é um <strong>objeto de afeto e reconexão</strong>. 
                  Inspirada na Pedagogia Waldorf, ela é feita à mão com materiais naturais, 
                  lã de ovelha e sementes tratadas dando um leve peso, em torno de 250 gramas, 
                  e carrega dentro do coraçãozinho uma intenção amorosa colocada por quem a confecciona.
                </p>
                
                <p className="text-lg text-slate-700 leading-relaxed">
                  Sua simplicidade é um convite à imaginação, ao vínculo e ao cuidado. 
                  <strong> Menos é mais: o essencial está presente.</strong>
                </p>
                
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  Essa boneca é um presente que damos a nós mesmas. Um símbolo de cura, 
                  acolhimento e reconexão com a nossa criança interior.
                </p>
              </div>
              
              <div className="relative">
                <img 
                  src="/lovable-uploads/5abd3d43-ad53-4388-bad3-da22d0a6ae4d.png" 
                  alt="Boneca de pano terapêutica artesanal" 
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
                <div className="absolute -top-3 -right-3 bg-yellow-400 text-slate-800 px-3 py-1 rounded-full text-sm font-semibold">
                  ❤️ Feita com amor
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de benefícios existente */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800 mb-4">
            Transforme Sua Vida Através da{' '}
            <span className="text-yellow-600">Arte Terapêutica</span>
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Mais do que costurar — é se acolher, se curar e descobrir uma nova forma 
            de se expressar no mundo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-yellow-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 border border-yellow-200"
            >
              <div className="bg-yellow-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-yellow-700" />
              </div>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {benefit.title}
              </h3>

              <p className="text-slate-700 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-8 rounded-3xl border border-yellow-200">
            <h3 className="text-2xl font-display font-bold text-slate-800 mb-4">
              "É mais do que costurar — é se acolher"
            </h3>
            <p className="text-lg text-slate-700 mb-6">
              Descubra o poder transformador de criar algo único com suas próprias mãos,
              enquanto se conecta com sua essência mais profunda.
            </p>
            <a
              href="https://pay.kiwify.com.br/hHUz57d"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-gray-50 inline-flex items-center"
            >
              Começar Minha Jornada Agora
              <Heart className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
