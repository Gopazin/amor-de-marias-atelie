
import React from 'react';
import { Check, Heart, Gift, Star, Clock } from 'lucide-react';

const PricingSection = () => {
  return (
    <section className="bg-gradient-to-br from-warm-50 to-peach-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
            Invista em Você e na Sua{' '}
            <span className="text-primary">Jornada de Cura</span>
          </h2>
          <p className="text-xl text-gray-600">
            Valores especiais para você começar sua transformação hoje mesmo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Curso Principal */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-primary relative transform hover:scale-105 transition-all duration-300">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary text-white px-6 py-2 rounded-full font-semibold text-sm">
                ⭐ Mais Escolhido
              </div>
            </div>
            
            <div className="text-center mb-8">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Curso Completo</h3>
              <p className="text-gray-600">Boneca Terapêutica Waldorf</p>
            </div>

            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-primary mb-2">R$ 97</div>
              <div className="text-gray-500 line-through text-lg">R$ 197</div>
              <div className="text-green-600 font-semibold">Oferta Limitada!</div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Curso online completo (8+ horas)</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Acesso vitalício</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Moldes digitais inclusos</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Grupo VIP no WhatsApp</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Mentoria com Elisandra</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Certificado de participação</span>
              </li>
            </ul>

            <button className="w-full btn-primary text-center">
              Quero Fazer Minha Boneca Terapêutica
            </button>
          </div>

          {/* Molde Extra */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-peach-200 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-8">
              <Gift className="w-12 h-12 text-rose-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Molde Extra</h3>
              <p className="text-gray-600">Boneca Pequena Especial</p>
            </div>

            <div className="text-center mb-8">
              <div className="text-4xl font-bold text-rose-500 mb-2">R$ 27</div>
              <div className="text-gray-500">Complemento perfeito</div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Molde da boneca pequena</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Ideal para presentes</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Técnica simplificada</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Download imediato</span>
              </li>
            </ul>

            <button className="w-full btn-secondary text-center">
              Quero esse Presente Extra
            </button>
          </div>

          {/* Vivência Presencial */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-peach-200 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-8">
              <Star className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Vivência Presencial</h3>
              <p className="text-gray-600">Experiência Completa</p>
            </div>

            <div className="text-center mb-8">
              <div className="text-2xl font-bold text-amber-600 mb-2">Em Breve</div>
              <div className="text-gray-500">Próximas datas</div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Encontro presencial</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Mentoria direta</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Conexão em grupo</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" />
                <span>Materiais inclusos</span>
              </li>
            </ul>

            <button className="w-full btn-secondary text-center">
              Quero Participar da Vivência
            </button>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-3xl shadow-xl max-w-2xl mx-auto border border-rose-100">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-display font-bold text-gray-800 mb-4">
              Oferta Por Tempo Limitado!
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              Aproveite o preço promocional de R$ 97 (valor normal R$ 197) 
              e comece sua jornada de transformação hoje mesmo.
            </p>
            <div className="text-red-500 font-semibold text-lg">
              ⏰ Esta oferta pode encerrar a qualquer momento
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
