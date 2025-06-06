
import useEmblaCarousel from 'embla-carousel-react';
import img1 from '../../../assets/salon/salon1.png';
import img2 from '../../../assets/salon/salon2.png';
import img3 from '../../../assets/salon/salon3.png';
import  { useCallback, useEffect, useState } from 'react';

const images = [img1, img2, img3];

export default function SalonGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.canScrollNext() ? emblaApi.scrollNext() : emblaApi.scrollTo(0);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(autoplay, 4000);

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on('select', onSelect);
    onSelect(); // initial update

    return () => clearInterval(interval);
  }, [emblaApi, autoplay]);

  return (
    <section className="bg-beige text-black py-24 px-6 border-t border-neutral-300">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-serif mb-8 text-center">Le salon</h2>

        <div className="relative">
          <div className="overflow-hidden rounded" ref={emblaRef}>
            <div className="flex gap-6">
              {images.map((img, i) => (
                <div key={i} className="min-w-full flex-shrink-0">
                  <img
                    src={img}
                    alt={`Salon ${i + 1}`}
                    className="w-full h-[400px] object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bouton gauche */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-80 hover:opacity-100 transition"
          >
            ‹
          </button>

          {/* Bouton droite */}
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-80 hover:opacity-100 transition"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

