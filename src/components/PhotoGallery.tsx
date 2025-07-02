import React from 'react';
import { Images, Upload } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const PhotoGallery = () => {
  // 15 campos de fotos - primeiros 10 preenchidos com fotos das alunas
  const photoSlots = [
    { id: 1, src: "/lovable-uploads/89bab1e6-cd11-4867-8c55-cc2f58bfc3a8.png", alt: "Aluna com boneca rosa" },
    { id: 2, src: "/lovable-uploads/97f90511-5c8e-4be4-b04d-876a3e8a10bf.png", alt: "Aluna com boneca roxa" },
    { id: 3, src: "/lovable-uploads/b599e773-00a9-4f7e-8eea-1e39dad45378.png", alt: "Aluna com boneca vermelha" },
    { id: 4, src: "/lovable-uploads/2c2d3448-3932-4c24-8804-ca191c194a8e.png", alt: "Grupo de alunas com suas bonecas" },
    { id: 5, src: "/lovable-uploads/5b463b55-b36b-4c76-838a-7cd061609f8a.png", alt: "Aluna com boneca azul" },
    { id: 6, src: "/lovable-uploads/a41290b6-3a26-41ba-94ac-36220ce66d2f.png", alt: "Criança com boneca vermelha" },
    { id: 7, src: "/lovable-uploads/82921ec2-c7fa-43fc-b66d-4332a1044db7.png", alt: "Bonecas coloridas" },
    { id: 8, src: "/lovable-uploads/b3acfdb6-53bd-4c92-bc25-dda3453248fd.png", alt: "Bonecas azuis gêmeas" },
    { id: 9, src: "/lovable-uploads/d1f2c8fb-aab6-480c-b1cb-915aac58c4a3.png", alt: "Professora ensinando" },
    { id: 10, src: "/lovable-uploads/74d75b00-d578-4cbd-9458-702f3493ef58.png", alt: "Aluna com boneca branca" },
    { id: 11, src: "/lovable-uploads/8470d056-50ed-4fdc-a0fa-f66c31b92b85.png", alt: "Criança abraçando boneca vermelha" },
    { id: 12, src: "/lovable-uploads/39c4cc96-a86c-44ab-bbc9-63e75d61ba18.png", alt: "Momento carinhoso com boneca" },
    { id: 13, src: "/lovable-uploads/bfcc947d-f91b-4eca-9fab-15a20cb220c0.png", alt: "Turma completa com suas criações" },
    { id: 14, src: "/lovable-uploads/794daf1a-ffbe-43dc-8955-91ff621e6359.png", alt: "Alunas trabalhando na oficina" },
    { id: 15, src: "/lovable-uploads/815eeadb-c258-41b3-89b3-208afd5b2a1a.png", alt: "Criança com boneca rosa" }
  ];
  return <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800 mb-4">
            Galeria de{' '}
            <span className="text-yellow-600">Criações</span>
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Veja algumas das lindas bonecas criadas em nossos cursos
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {photoSlots.map(photo => <CarouselItem key={photo.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200 hover:shadow-lg transition-all duration-300">
                     <div className="aspect-square bg-yellow-100 rounded-xl flex items-center justify-center mb-4 border-2 border-dashed border-yellow-300 overflow-hidden">
                       {photo.src ? <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover object-center rounded-xl" /> : <div className="text-center">
                          <Upload className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
                          <p className="text-sm text-yellow-600 font-medium">
                            Foto {photo.id}
                          </p>
                          <p className="text-xs text-yellow-500">
                            Clique para adicionar
                          </p>
                        </div>}
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="border-yellow-300 text-yellow-600 hover:bg-yellow-50" />
            <CarouselNext className="border-yellow-300 text-yellow-600 hover:bg-yellow-50" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          
        </div>
      </div>
    </section>;
};
export default PhotoGallery;