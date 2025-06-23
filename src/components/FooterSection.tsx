
import React from 'react';
import { MessageCircle } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="bg-gray-800 text-white section-padding">
      <div className="container-custom">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <p className="text-gray-300 text-lg">
              Pronta para transformar sua vida através da arte terapêutica?
            </p>
            
            <a 
              href="https://wa.me/41998794228" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-colors font-semibold text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Entre em Contato pelo WhatsApp
            </a>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 mb-4">
              © 2024 Amor de Marias Ateliê. Todos os direitos reservados.
            </p>
            
            <p className="text-gray-500 text-sm italic">
              "É mais do que costurar — é se acolher" - Elisandra Radaelli
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
