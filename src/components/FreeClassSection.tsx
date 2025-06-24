
import React from 'react';
import { PlayCircle, Gift } from 'lucide-react';
import LeadMagnetModal from './LeadMagnetModal';
import { useLeadMagnet } from '@/hooks/useLeadMagnet';

const FreeClassSection = () => {
  const { isModalOpen, openModal, closeModal } = useLeadMagnet();

  return (
    <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-16">
      <div className="container-custom">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm">
            <Gift className="w-4 h-4" />
            Oferta Especial
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Quer Experimentar Antes de Comprar?
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ganhe acesso a uma aula gratuita e descubra o poder transformador 
            das bonecas terapêuticas antes de se inscrever no curso completo.
          </p>
          
          <button 
            onClick={openModal}
            className="inline-flex items-center justify-center bg-white text-yellow-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-50 transition-colors group"
          >
            🎁 Quero Minha Aula Gratuita
            <PlayCircle className="w-6 h-6 ml-2 group-hover:scale-110 transition-transform" />
          </button>
          
          <p className="text-sm text-white/80">
            ✨ Sem compromisso • 100% gratuito • Acesso imediato
          </p>
        </div>
      </div>

      <LeadMagnetModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default FreeClassSection;
