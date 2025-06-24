
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "Não tenho experiência com costura, posso fazer?",
      answer: "Sim! O curso é pensado especialmente para iniciantes. A Elisandra explica cada passo de forma detalhada e você terá apoio completo em cada etapa. Muitas das nossas alunas começaram sem nenhuma experiência e hoje criam bonecas lindíssimas!"
    },
    {
      question: "Recebo moldes e materiais?",
      answer: "Os moldes digitais estão inclusos no curso e você recebe acesso imediato para download. A lista completa de materiais é enviada após a inscrição, com dicas de onde encontrar tudo que precisa. Os materiais físicos não estão inclusos, mas orientamos você em tudo."
    },
    {
      question: "Posso vender as bonecas que eu fizer?",
      answer: "Com certeza! Muitas alunas transformaram esse conhecimento em uma fonte de renda extra. Você aprende não apenas a técnica, mas também recebe dicas sobre como precificar e vender suas criações. É uma habilidade que pode gerar renda para toda a vida!"
    },
    {
      question: "Como funciona o grupo de apoio no WhatsApp?",
      answer: "Após se inscrever, você recebe acesso ao nosso grupo exclusivo onde pode tirar dúvidas, compartilhar seu progresso e se conectar com outras alunas. A Elisandra está presente diariamente para orientar e apoiar todas as participantes."
    },
    {
      question: "Por quanto tempo tenho acesso ao curso?",
      answer: "O acesso é vitalício! Você pode assistir às aulas quantas vezes quiser, no seu próprio ritmo. Isso é especialmente importante porque cada boneca é única e você pode querer revisitar as técnicas para aperfeiçoar sua arte."
    },
    {
      question: "Qual a diferença entre as bonecas Waldorf e outras bonecas?",
      answer: "As bonecas Waldorf são feitas com materiais naturais e têm características especiais que estimulam a imaginação e oferecem conforto terapêutico. Elas são criadas com amor e intenção, sendo verdadeiras obras de arte com propósito curativo."
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
            Dúvidas{' '}
            <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Esclarecemos as principais dúvidas sobre o curso
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-warm-50 rounded-2xl border border-peach-100 px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:text-primary py-6">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-rose-50 to-peach-50 p-8 rounded-3xl border border-rose-100 max-w-3xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-gray-800 mb-4">
              Ainda tem alguma dúvida?
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              Nossa equipe está pronta para te ajudar! Entre em contato e tire 
              todas as suas dúvidas antes de começar sua jornada.
            </p>
            <a 
              href="https://wa.me/41998794228" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-yellow-200 text-slate-800 hover:bg-yellow-300 transition-all duration-300 rounded-full px-6 py-3 font-medium border border-yellow-400 text-center w-full sm:w-auto"
            >
              Tirar Minhas Dúvidas com a Elisandra
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
