
import React from 'react';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Cecília Marta",
      location: "Curso Online",
      text: "Comprei o curso desse bebê, fui bem instruída, já assisti todas as aulas e comprei todos os matérias que vou utilizar. Já trabalho confeccionando bonecas de pano, mas tenho vontade de fazer outros tipos e aprender novas técnicas. Comecei esta semana na confecção das cabeças e não encontrei dificuldades, a Elisandra sempre disponível a ajudar tirando todas as dúvidas que aparece no decorrer do trabalho.",
      rating: 5,
      image: "/lovable-uploads/be0062ff-8d2e-488a-b783-1aa3e732fbbd.png"
    },
    {
      name: "Isabel",
      location: "Curitiba",
      text: "A experiência foi transformadora! Não é apenas sobre fazer bonecas, é sobre se conectar consigo mesma. A Elisandra tem um dom especial para nos guiar nessa jornada de autoconhecimento através da arte.",
      rating: 5,
      image: "/lovable-uploads/9432bf39-780a-4c9c-a185-4e7d8b022da3.png"
    },
    {
      name: "Rosane",
      location: "Curso Online",
      text: "Muito perfeitas Rosane, fiquei encantada como fez tão lindas, cor super da roupa combinou. As técnicas ensinadas pela Elisandra fazem toda a diferença no resultado final.",
      rating: 5,
      image: "/lovable-uploads/038b99a6-5d56-44c7-a819-ccd817fd4db4.png"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-yellow-50 to-yellow-100 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800 mb-4">
            O Que Nossas{' '}
            <span className="text-yellow-600">Alunas Dizem</span>
          </h2>
          <p className="text-xl text-slate-700">
            Histórias reais de transformação e descoberta pessoal
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="w-8 h-8 text-yellow-400 absolute top-6 right-6" />
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-yellow-300" 
                />
                <div>
                  <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600">{testimonial.location}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-slate-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-3xl shadow-xl max-w-4xl mx-auto border border-yellow-200">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img 
                src="/lovable-uploads/71e624c1-6b04-4cd5-b877-bf92a8b4262f.png" 
                alt="Grupo de alunas com suas bonecas" 
                className="w-64 h-48 rounded-2xl object-cover shadow-lg" 
              />
              <div className="text-left space-y-4">
                <h3 className="text-2xl font-display font-bold text-slate-800">
                  Junte-se a Mais de 500 Mulheres
                </h3>
                <p className="text-slate-700 text-lg">
                  Que já transformaram suas vidas através da arte terapêutica 
                  das bonecas Waldorf. Seja a próxima a descobrir esse universo 
                  de cura e criatividade.
                </p>
                <button className="btn-primary mt-4">
                  Quero Fazer Parte Dessa Comunidade
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
