import React from 'react';
import { CheckCircle, Gift, Users, Clock, Download, Heart } from 'lucide-react';
const CourseDetails = () => {
  const features = ["Curso Online Completo com Acesso Vitalício", "Moldes Digitais Inclusos (Boneca Grande e Pequena)", "Grupo Exclusivo de Alunas no WhatsApp", "Mentoria Personalizada da Elisandra", "Técnicas Baseadas na Pedagogia Waldorf", "Suporte Durante Todo o Processo", "Lista Completa de Materiais", "Certificado de Participação"];
  const modules = [{
    title: "Módulo 1: Fundamentos",
    content: "História das bonecas Waldorf e materiais necessários"
  }, {
    title: "Módulo 2: Preparação",
    content: "Como preparar os tecidos e moldes para começar"
  }, {
    title: "Módulo 3: Corpo",
    content: "Técnicas de costura e preenchimento do corpinho"
  }, {
    title: "Módulo 4: Cabeça",
    content: "Modelagem perfeita da cabecinha da boneca"
  }, {
    title: "Módulo 5: Rosto",
    content: "Bordando expressões cheias de amor e significado"
  }, {
    title: "Módulo 6: Cabelos",
    content: "Criando cabelos únicos com diferentes técnicas"
  }, {
    title: "Módulo 7: Roupinhas",
    content: "Confeccionando roupas especiais para sua boneca"
  }, {
    title: "Módulo 8: Finalização",
    content: "Toques finais e energização da sua criação"
  }];
  return <section className="bg-white section-padding">
      <div className="container-custom bg-lime-200">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
            Tudo Que Você Vai{' '}
            <span className="text-primary">Aprender e Receber</span>
          </h2>
          <p className="text-xl text-gray-600">
            Um curso completo que vai além da técnica - é uma jornada de autoconhecimento
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <Gift className="w-8 h-8 text-primary" />
              O Que Está Incluído
            </h3>
            
            <div className="space-y-4">
              {features.map((feature, index) => <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>)}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-rose-50 to-peach-50 rounded-2xl border border-rose-100">
              <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6 text-primary" />
                Bônus Especiais
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Molde Extra - Boneca Pequena (Valor R$ 27)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Grupo VIP no WhatsApp com Elisandra
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  E-book: "Energizando Sua Boneca Terapêutica"
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <Clock className="w-8 h-8 text-primary" />
              Conteúdo do Curso
            </h3>
            
            <div className="space-y-4">
              {modules.map((module, index) => <div key={index} className="bg-warm-50 p-6 rounded-xl border border-peach-100 hover:shadow-md transition-all duration-300">
                  <h4 className="font-semibold text-gray-800 text-lg mb-2">
                    {module.title}
                  </h4>
                  <p className="text-gray-600">
                    {module.content}
                  </p>
                </div>)}
            </div>

            <div className="mt-8 text-center">
              <div className="bg-primary/10 p-6 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">8+ Horas</div>
                <div className="text-gray-600">de conteúdo exclusivo</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-rose-400 text-white p-8 rounded-3xl bg-lime-200">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-zinc-950">
              Pronta Para Começar Sua Transformação?
            </h3>
            <p className="text-xl mb-8 opacity-90 text-zinc-950">
              Mais de 500 mulheres já descobriram o poder terapêutico dessa arte
            </p>
            <button className="bg-white hover:bg-warm-50 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg text-zinc-950">
              Sim, Quero Fazer Minha Boneca Terapêutica!
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default CourseDetails;