
import React from 'react';
import { Heart, Instagram, MessageCircle, Mail, Phone } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="bg-gray-800 text-white section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Heart className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-xl font-display font-bold">Amor de Marias</h3>
                <p className="text-gray-400 text-sm">Ateliê Terapêutico</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Transformando vidas através da arte terapêutica das bonecas Waldorf. 
              Uma jornada de autoconhecimento e cura através do criar com as mãos.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/amordemarias.atelie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-full hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 p-3 rounded-full hover:bg-green-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contato@amordemarias.com.br"
                className="bg-gray-700 p-3 rounded-full hover:bg-blue-500 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Cursos</h4>
            <ul className="space-y-3">
              <li><a href="#curso-online" className="text-gray-300 hover:text-primary transition-colors">Curso Online</a></li>
              <li><a href="#vivencia-presencial" className="text-gray-300 hover:text-primary transition-colors">Vivência Presencial</a></li>
              <li><a href="#moldes-extras" className="text-gray-300 hover:text-primary transition-colors">Moldes Extras</a></li>
              <li><a href="#mentorias" className="text-gray-300 hover:text-primary transition-colors">Mentorias</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Suporte</h4>
            <ul className="space-y-3">
              <li><a href="#faq" className="text-gray-300 hover:text-primary transition-colors">Perguntas Frequentes</a></li>
              <li><a href="#contato" className="text-gray-300 hover:text-primary transition-colors">Entre em Contato</a></li>
              <li><a href="#depoimentos" className="text-gray-300 hover:text-primary transition-colors">Depoimentos</a></li>
              <li><a href="#comunidade" className="text-gray-300 hover:text-primary transition-colors">Nossa Comunidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-gray-300">WhatsApp</p>
                  <p className="text-sm text-gray-400">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-gray-300">E-mail</p>
                  <p className="text-sm text-gray-400">elisandra@amordemarias.com.br</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-gray-300">Instagram</p>
                  <p className="text-sm text-gray-400">@amordemarias.atelie</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 Amor de Marias Ateliê. Todos os direitos reservados.
            </p>
            
            <div className="flex gap-6 text-sm">
              <a href="#privacidade" className="text-gray-400 hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#termos" className="text-gray-400 hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-gray-700">
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
