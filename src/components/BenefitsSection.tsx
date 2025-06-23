
import React from 'react';
import { Heart, Users, Award, Sparkles, Gift, Clock } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Reconexão com Sua Criança Interior",
      description: "Desperte a magia que existe dentro de você através da arte e do criar com as mãos."
    },
    {
      icon: Award,
      title: "Habilidade Terapêutica e Geradora de Renda",
      description: "Aprenda uma técnica que cura você e ainda pode se tornar uma fonte de renda extra."
    },
    {
      icon: Users,
      title: "Comunidade Acolhedora",
      description: "Faça parte de um grupo especial de mulheres que se apoiam e crescem juntas."
    },
    {
      icon: Sparkles,
      title: "Mentoria Personalizada",
      description: "Receba orientação direta da Elisandra em cada etapa da sua jornada criativa."
    },
    {
      icon: Gift,
      title: "Bonecas com Significado Profundo",
      description: "Crie bonecas que carregam intenção, amor e propósito terapêutico."
    },
    {
      icon: Clock,
      title: "Acesso Vitalício",
      description: "Tenha acesso para sempre ao conteúdo e possa revisitar sempre que precisar."
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
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
            <button className="btn-primary">
              Começar Minha Jornada Agora
              <Heart className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
