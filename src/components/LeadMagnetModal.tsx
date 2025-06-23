
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X, Gift, Youtube } from 'lucide-react';

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadMagnetModal = ({ isOpen, onClose }: LeadMagnetModalProps) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular envio do formulário (aqui você pode integrar com sua API de choice)
    try {
      // Aqui você pode adicionar a integração com seu sistema de leads
      console.log('Lead capturado:', formData);
      
      // Simular delay de envio
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleYouTubeClick = () => {
    window.open('https://youtu.be/WpDeNpU3XMM?si=iQspr_-_TyzfeAvv');
    onClose();
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({ nome: '', email: '', whatsapp: '' });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-display font-bold text-slate-800 flex items-center justify-center gap-2">
            <Gift className="w-6 h-6 text-yellow-600" />
            {isSubmitted ? 'Aula Liberada!' : 'Ganhe Sua Aula Gratuita!'}
          </DialogTitle>
        </DialogHeader>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center mb-6">
              <p className="text-slate-600">
                Preencha seus dados e receba acesso imediato à nossa aula especial sobre bonecas terapêuticas!
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="nome">Nome Completo *</Label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  value={formData.nome}
                  onChange={handleInputChange}
                  placeholder="Seu nome completo"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="whatsapp">WhatsApp *</Label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  placeholder="(11) 99999-9999"
                  className="mt-1"
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full btn-primary"
              disabled={isLoading}
            >
              {isLoading ? 'Liberando Aula...' : 'Liberar Minha Aula Gratuita!'}
            </Button>

            <p className="text-xs text-slate-500 text-center">
              Seus dados estão seguros conosco. Não fazemos spam.
            </p>
          </form>
        ) : (
          <div className="text-center space-y-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                🎉 Parabéns, {formData.nome}!
              </h3>
              <p className="text-green-700">
                Sua aula gratuita foi liberada com sucesso!
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-slate-800">
                Aula Rápida Liberada!
              </h4>
              <p className="text-slate-600">
                Assista agora nossa aula especial sobre os primeiros passos para criar sua boneca terapêutica.
              </p>
              
              <Button 
                onClick={handleYouTubeClick}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2"
              >
                <Youtube className="w-5 h-5" />
                Assistir Aula no YouTube
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadMagnetModal;
