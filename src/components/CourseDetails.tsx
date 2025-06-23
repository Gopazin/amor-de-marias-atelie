import React from 'react';
import { CheckCircle, Gift, Users, Clock, Download, Heart } from 'lucide-react';

const CourseDetails = () => {
  const features = [
    "Moldes exclusivos",
    "Lista de Materiais",
    "Passo a passo detalhado",
    "Vários vídeos explicativos online",
    "Grupo de alunas com apoio e troca",
    "Meditação guiada Online sintonia com sua criança interior, Por Elisandra Radaelli",
    "Suporte direto comigo"
  ];

  const modules = [
    {
      title: "Módulo 1: Fundamentos",
      content: "História das bonecas Waldorf e materiais necessários"
    },
    {
      title: "Módulo 2: Preparação",
      content: "Como preparar os tecidos e moldes para começar"
    },
    {
      title: "Módulo 3: Corpo",
      content: "Técnicas de costura e preenchimento do corpinho"
    },
    {
      title: "Módulo 4: Cabeça",
      content: "Modelagem perfeita da cabecinha da boneca"
    },
    {
      title: "Módulo 5: Rosto",
      content: "Bordando expressões cheias de amor e significado"
    },
    {
      title: "Módulo 6: Cabelos",
      content: "Criando cabelos únicos com diferentes técnicas"
    },
    {
      title: "Módulo 7: Roupinhas",
      content: "Confeccionando roupas especiais para sua boneca"
    },
    {
      title: "Módulo 8: Finalização",
      content: "Toques finais e energização da sua criação"
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800 mb-4">
            Tudo Que Você Vai{' '}
            <span className="text-yellow-600">Aprender e Receber</span>
          </h2>
          <p className="text-xl text-slate-700">
            Um curso completo que vai além da técnica - é uma jornada de autoconhecimento
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <Gift className="w-8 h-8 text-yellow-600" />
              O Que Está Incluído
            </h3>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl border border-yellow-200">
              <h4 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6 text-yellow-600" />
                Bônus Especiais
              </h4>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600" />
                  Molde Extra - Boneca Pequena (Valor R$ 27)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600" />
                  Grupo VIP no WhatsApp com Elisandra
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600" />
                  E-book: "Energizando Sua Boneca Terapêutica"
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <Clock className="w-8 h-8 text-yellow-600" />
              Conteúdo do Curso
            </h3>
            
            <div className="space-y-4">
              {modules.map((module, index) => (
                <div 
                  key={index} 
                  className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 hover:shadow-md transition-all duration-300"
                >
                  <h4 className="font-semibold text-slate-800 text-lg mb-2">
                    {module.title}
                  </h4>
                  <p className="text-slate-700">
                    {module.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="bg-yellow-200 p-6 rounded-xl">
                <div className="text-3xl font-bold text-yellow-700 mb-2">8+ Horas</div>
                <div className="text-slate-700">de conteúdo exclusivo</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 p-8 rounded-3xl">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Pronta Para Começar Sua Transformação?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Mais de 500 mulheres já descobriram o poder terapêutico dessa arte
            </p>
            <button className="bg-white hover:bg-yellow-50 text-slate-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Sim, Quero Fazer Minha Boneca Terapêutica!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
