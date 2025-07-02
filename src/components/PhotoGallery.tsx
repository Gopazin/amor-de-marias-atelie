import React from 'react';
import { Images, Upload } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PhotoGallery = () => {
  // 10 campos de fotos - podem ser preenchidos posteriormente
  const photoSlots = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    src: null, // Para ser preenchido com as fotos escolhidas
    alt: `Foto ${index + 1}`
  }));

  return (
    <section className="bg-white section-padding">
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
              {photoSlots.map((photo) => (
                <CarouselItem key={photo.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200 hover:shadow-lg transition-all duration-300">
                    <div className="aspect-square bg-yellow-100 rounded-xl flex items-center justify-center mb-4 border-2 border-dashed border-yellow-300">
                      {photo.src ? (
                        <img 
                          src={photo.src} 
                          alt={photo.alt}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      ) : (
                        <div className="text-center">
                          <Upload className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
                          <p className="text-sm text-yellow-600 font-medium">
                            Foto {photo.id}
                          </p>
                          <p className="text-xs text-yellow-500">
                            Clique para adicionar
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-yellow-300 text-yellow-600 hover:bg-yellow-50" />
            <CarouselNext className="border-yellow-300 text-yellow-600 hover:bg-yellow-50" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 max-w-2xl mx-auto">
            <Images className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Suas Criações Aqui
            </h3>
            <p className="text-slate-700">
              Esta galeria será preenchida com as belas bonecas que você criará durante o curso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;