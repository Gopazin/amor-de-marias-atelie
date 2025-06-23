import React from 'react';
import { Check, Heart, Gift, Star, Clock } from 'lucide-react';
const PricingSection = () => {
  return <section className="bg-gradient-to-br from-yellow-50 to-yellow-100 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800 mb-4">
            Invista em Você e na Sua{' '}
            <span className="text-yellow-600">Jornada de Cura</span>
          </h2>
          <p className="text-xl text-slate-700">
            Valores especiais para você começar sua transformação hoje mesmo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Curso Principal */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-yellow-400 relative transform hover:scale-105 transition-all duration-300">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="text-white px-6 py-2 rounded-full font-semibold text-sm bg-slate-800">
                ⭐ Mais Escolhido
              </div>
            </div>
            
            <div className="text-center mb-8">
              <Heart className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Curso Completo</h3>
              <p className="text-slate-700">Boneca Terapêutica Waldorf</p>
            </div>

            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-yellow-600 mb-2">R$ 97</div>
              <div className="text-slate-500 line-through text-lg">R$ 247</div>
              <div className="text-rose-600 font-semibold mb-2">Oferta Limitada!</div>
              <div className="text-slate-600 text-sm">ou 12x de R$ 10,03</div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-yellow-600" />
                <span className="text-slate-700">Curso online completo (8+ horas)</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-yellow-600" />
                <span className="text-slate-700">Acesso vitalício</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-yellow-600" />
                <span className="text-slate-700">Moldes digitais inclusos</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-yellow-600" />
                <span className="text-slate-700">Grupo VIP no WhatsApp</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-yellow-600" />
                <span className="text-slate-700">Mentoria com Elisandra</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-yellow-600" />
                <span className="text-slate-700">Certificado de participação</span>
              </li>
            </ul>

            <a href="https://pay.kiwify.com.br/hHUz57d" target="_blank" rel="noopener noreferrer" className="w-full btn-primary text-center text-slate-50 inline-flex items-center justify-center">
              Quero Fazer Minha Boneca Terapêutica
            </a>
          </div>

          {/* Molde Extra */}
          

          {/* Vivência Presencial */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-yellow-300 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <Star className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Vivência Presencial</h3>
              <p className="text-slate-700">Experiência Completa em Grupo</p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-3">Como é o curso presencial?</h4>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                O curso presencial é uma vivência em grupo, com momentos de silêncio, troca e conexão, 
                dinâmica e confecção da boneca.
              </p>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                É um encontro com outras mulheres e, principalmente, com a nossa criança interior. 
                Não é necessário costurar no dia.
              </p>
              <p className="text-slate-700 text-sm leading-relaxed">
                Cada boneca é única, e o processo de criá-la é profundo: colocamos ali nossas intenções, 
                histórias, sentimentos. É mais do que aprender uma técnica, seja para vender ou presentear— 
                é viver um processo de presença, escuta e amor, que continua presente após o curso.
              </p>
            </div>

            <div className="text-center mb-6">
              <div className="text-2xl font-bold text-slate-800 mb-2">Em Breve</div>
              <div className="text-slate-600">Próximas datas</div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-yellow-600" />
                <span className="text-slate-700 text-sm">Vivência em grupo</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-yellow-600" />
                <span className="text-slate-700 text-sm">Momentos de silêncio e conexão</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-yellow-600" />
                <span className="text-slate-700 text-sm">Confecção da boneca</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-yellow-600" />
                <span className="text-slate-700 text-sm">Processo de cura e presença</span>
              </li>
            </ul>

            <a href="https://wa.me/41998794228" target="_blank" rel="noopener noreferrer" className="w-full btn-secondary text-center inline-flex items-center justify-center">
              Quero Saber Mais pelo WhatsApp
            </a>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-3xl shadow-xl max-w-2xl mx-auto border border-yellow-200">
            <Clock className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-2xl font-display font-bold text-slate-800 mb-4">
              Oferta Por Tempo Limitado!
            </h3>
            <p className="text-slate-700 text-lg mb-6">
              Aproveite o preço promocional de R$ 97 (valor normal R$ 247) 
              e comece sua jornada de transformação hoje mesmo.
            </p>
            <div className="text-red-500 font-semibold text-lg">
              ⏰ Esta oferta pode encerrar a qualquer momento
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default PricingSection;