import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Lightbox } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Search } from 'lucide-react';

import img1 from '../../../assets/home-carroussel/salon1.png';
import img4 from '../../../assets/home-carroussel/salon4.png';
import img5 from '../../../assets/home-carroussel/salon5.png';
import im6 from '../../../assets/home-carroussel/salon6.png';

const images = [img1, img4, img5, im6];

export default function SalonGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

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
    onSelect();

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
                <div key={i} className="relative min-w-full flex-shrink-0 group">
                  <img
                    src={img}
                    alt={`Salon ${i + 1}`}
                    className="w-full h-[400px] object-cover rounded"
                  />
                  {/* Icône loupe visible au hover */}
                  <button
                    onClick={() => {
                      setLightboxIndex(i);
                      setLightboxOpen(true);
                    }}
  className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition rounded"
>
  <Search className="w-8 h-8 text-white" />
</button>
                </div>
              ))}
            </div>
          </div>

          {/* Boutons gauche/droite */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-80 hover:opacity-100 transition"
          >
            ‹
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-80 hover:opacity-100 transition"
          >
            ›
          </button>
        </div>

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={images.map((src) => ({ src }))}
          on={{
            view: (event: { index: number }) => setLightboxIndex(event.index),
          }}
        />
      </div>
    </section>
  );
}