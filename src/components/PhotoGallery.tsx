import React from 'react';
import { Images, Upload } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const PhotoGallery = () => {
  // 15 campos de fotos - você pode editar cada src para escolher qual foto aparece
  const photoSlots = [
    { id: 1, src: null, alt: ""C:\Users\Happy Note 1\Desktop\LP Elisandra\WhatsApp Image 2025-06-30 at 16.18.41.jpeg"" },
    { id: 2, src: null, alt: "Foto 2" },
    { id: 3, src: null, alt: "Foto 3" },
    { id: 4, src: null, alt: "Foto 4" },
    { id: 5, src: null, alt: "Foto 5" },
    { id: 6, src: null, alt: "Foto 6" },
    { id: 7, src: null, alt: "Foto 7" },
    { id: 8, src: null, alt: "Foto 8" },
    { id: 9, src: null, alt: "Foto 9" },
    { id: 10, src: null, alt: "Foto 10" },
    { id: 11, src: null, alt: "Foto 11" },
    { id: 12, src: null, alt: "Foto 12" },
    { id: 13, src: null, alt: "Foto 13" },
    { id: 14, src: null, alt: "Foto 14" },
    { id: 15, src: null, alt: "Foto 15" }
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