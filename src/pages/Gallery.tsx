import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { jordanMoments, type JordanMoment } from "@/data/moments";
import { ArrowUp, X } from "lucide-react";
import { useState } from "react";

const featuredSlugs = new Set(["petra-siq", "wadi-rum", "ballon-mer"]);

const layoutBySlug: Record<string, "cinema" | "split" | "mosaic"> = {
  amman: "split",
  "jerash-ajloun": "mosaic",
  "chateaux-desert": "split",
  "nebo-madaba": "mosaic",
  dana: "split",
  "petra-siq": "cinema",
  "petra-night": "mosaic",
  "wadi-rum": "cinema",
  "ballon-mer": "cinema",
};

const Photo = ({
  src,
  alt,
  className,
  onOpen,
  fit = "cover",
}: {
  src: string;
  alt: string;
  className: string;
  onOpen: (photo: { src: string; alt: string }) => void;
  fit?: "cover" | "contain";
}) => (
  <button
    type="button"
    className={`group block w-full overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${fit === "contain" ? "bg-[#efe8df]" : ""} ${className}`}
    onClick={() => onOpen({ src, alt })}
  >
    <img
      src={src}
      alt={alt}
      className={
        fit === "contain"
          ? "h-auto w-full object-contain transition duration-500 group-hover:scale-[1.02]"
          : "h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
      }
      loading="lazy"
    />
  </button>
);

const MomentPhotos = ({
  moment,
  onOpen,
}: {
  moment: JordanMoment;
  onOpen: (photo: { src: string; alt: string }) => void;
}) => {
  const layout = layoutBySlug[moment.slug] ?? "mosaic";

  if (layout === "cinema") {
    if (moment.slug === "wadi-rum") {
      return (
        <div className="grid gap-3">
          <Photo
            src={moment.images[0]}
            alt={`${moment.title} - photo principale`}
            className="aspect-[16/10] lg:aspect-[16/8]"
            onOpen={onOpen}
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
            {moment.images.slice(1).map((photo, index) => (
              <Photo
                key={photo}
                src={photo}
                alt={`${moment.title} - detail ${index + 1}`}
                className="shadow-sm"
                fit="contain"
                onOpen={onOpen}
              />
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="grid gap-3 lg:grid-cols-[1.35fr_0.65fr]">
        <Photo
          src={moment.images[0]}
          alt={`${moment.title} - photo principale`}
          className="aspect-[16/10] lg:aspect-auto lg:h-[620px]"
          onOpen={onOpen}
        />
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
          {moment.images.slice(1, 5).map((photo, index) => (
            <Photo
              key={photo}
              src={photo}
              alt={`${moment.title} - detail ${index + 1}`}
              className="aspect-[4/5] lg:h-[148px] lg:aspect-auto"
              onOpen={onOpen}
            />
          ))}
        </div>
        {moment.images.slice(5).map((photo, index) => (
          <Photo
            key={photo}
            src={photo}
            alt={`${moment.title} - souvenir ${index + 1}`}
            className="aspect-[4/3] lg:aspect-[16/9]"
            onOpen={onOpen}
          />
        ))}
      </div>
    );
  }

  if (layout === "split") {
    return (
      <div className="grid gap-3 md:grid-cols-[0.95fr_1.05fr]">
        <Photo
          src={moment.images[0]}
          alt={`${moment.title} - photo principale`}
          className="aspect-[4/5] md:h-[560px] md:aspect-auto"
          onOpen={onOpen}
        />
        <div className="grid grid-cols-2 gap-3">
          {moment.images.slice(1).map((photo, index) => (
            <Photo
              key={photo}
              src={photo}
              alt={`${moment.title} - photo ${index + 2}`}
              className={index === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/5]"}
              onOpen={onOpen}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
      {moment.images.map((photo, index) => {
        const classNames = [
          "col-span-2 aspect-[4/5] md:col-span-3 md:row-span-2 md:h-[520px] md:aspect-auto",
          "aspect-[4/5] md:col-span-3 md:h-[250px] md:aspect-auto",
          "aspect-[4/5] md:col-span-2 md:h-[250px] md:aspect-auto",
          "aspect-[4/5] md:col-span-2 md:h-[250px] md:aspect-auto",
          "aspect-[4/5] md:col-span-2 md:h-[250px] md:aspect-auto",
          "col-span-2 aspect-[16/9] md:col-span-6 md:h-[300px] md:aspect-auto",
        ];

        return (
          <Photo
            key={photo}
            src={photo}
            alt={`${moment.title} - photo ${index + 1}`}
            className={classNames[index] ?? "aspect-[4/5] md:col-span-2 md:h-[250px] md:aspect-auto"}
            onOpen={onOpen}
          />
        );
      })}
    </div>
  );
};

const Gallery = () => {
  const [activePhoto, setActivePhoto] = useState<{ src: string; alt: string } | null>(null);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-24">
        <section className="px-4 py-14">
          <div className="container mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="font-inter text-sm font-semibold uppercase tracking-wide text-primary mb-4">
                Album
              </p>
              <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
                9 moments pour raconter la Jordanie
              </h1>
              <p className="font-inter text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Un album pense comme un carnet: grandes sequences pour les paysages, details plus proches pour retrouver l'ambiance du voyage.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[jordanMoments[0].images[2], jordanMoments[4].images[1], jordanMoments[8].images[4]].map((photo) => (
                <img
                  key={photo}
                  src={photo}
                  alt="Souvenir de voyage en Jordanie"
                  className="h-72 w-full rounded-lg object-cover even:mt-10"
                  loading="eager"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto max-w-7xl px-4 pb-20 space-y-24">
          {jordanMoments.map((moment, index) => (
            <article
              key={moment.slug}
              className={
                featuredSlugs.has(moment.slug)
                  ? "border-t border-border/70 pt-10 space-y-8"
                  : "grid gap-6 border-t border-border/70 pt-10 lg:grid-cols-[0.78fr_1.22fr]"
              }
            >
              <div className="self-start">
                <p className="font-inter text-xs font-semibold uppercase tracking-wide text-primary mb-3">
                  {String(index + 1).padStart(2, "0")} · {moment.eyebrow} · {moment.dates}
                </p>
                <h2
                  className={
                    featuredSlugs.has(moment.slug)
                      ? "font-playfair text-4xl md:text-6xl font-bold mb-3"
                      : "font-playfair text-3xl md:text-4xl font-bold mb-3"
                  }
                >
                  {moment.title}
                </h2>
                <p className="font-inter text-sm font-medium text-muted-foreground mb-4">
                  {moment.place}
                </p>
                <p className="font-inter text-base text-muted-foreground leading-relaxed">
                  {moment.summary}
                </p>
              </div>

              <MomentPhotos moment={moment} onOpen={setActivePhoto} />
            </article>
          ))}
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20">
          <div className="rounded-lg bg-[#191512] px-6 py-8 text-white md:flex md:items-center md:justify-between md:px-10">
            <div>
              <p className="font-inter text-xs font-semibold uppercase tracking-wide text-[#d2a36f]">
                Fin de l'album
              </p>
              <h2 className="mt-3 font-playfair text-3xl font-bold md:text-4xl">
                Revenir au debut ou continuer la visite.
              </h2>
            </div>
            <button
              type="button"
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-inter text-sm font-semibold text-[#191512] transition hover:bg-[#f7f2ea] focus:outline-none focus:ring-2 focus:ring-[#d2a36f] focus:ring-offset-2 focus:ring-offset-[#191512] md:mt-0"
            >
              <ArrowUp className="h-4 w-4" />
              Retour en haut
            </button>
          </div>
        </section>
      </div>
      <Footer />

      {activePhoto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActivePhoto(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setActivePhoto(null)}
          >
            <span className="sr-only">Fermer la photo</span>
            <X className="h-6 w-6" />
          </button>
          <img
            src={activePhoto.src}
            alt={activePhoto.alt}
            className="max-h-[92vh] max-w-[94vw] rounded-lg object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
