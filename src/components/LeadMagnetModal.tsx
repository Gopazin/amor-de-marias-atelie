
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

const LeadMagnetModal = ({
  isOpen,
  onClose
}: LeadMagnetModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Redirecionar para o Google Forms
    window.open('https://forms.gle/6upRMrpnkKwfDVLa9', '_blank');
    
    // Mostrar a tela de sucesso
    setIsSubmitted(true);
  };

  const handleYouTubeClick = () => {
    window.open('https://youtu.be/WpDeNpU3XMM?si=iQspr_-_TyzfeAvv');
    onClose();
  };

  const handleClose = () => {
    setIsSubmitted(false);
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
                Clique no botão abaixo para acessar o formulário e receber sua aula especial sobre bonecas terapêuticas!
              </p>
            </div>

            <Button 
              type="submit" 
              className="w-full btn-primary"
            >
              🎁 Preencher Formulário e Liberar Aula
            </Button>

            <p className="text-xs text-slate-500 text-center">
              Você será redirecionado para um formulário Google. Seus dados estão seguros conosco.
            </p>
          </form>
        ) : (
          <div className="text-center space-y-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                🎉 Parabéns!
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
