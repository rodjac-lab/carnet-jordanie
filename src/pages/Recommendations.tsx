import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { BookRecommendation, getReadingRecommendations } from "@/data/readingRecommendations";
import { BookOpenCheck, ExternalLink, Star } from "lucide-react";

const image = (name: string) => `${import.meta.env.BASE_URL}jordan/selected-v1/${name}.webp`;

const isUsableLink = (url: string) => url.startsWith("http") && !url.includes("...");

const Recommendations = () => {
  const recommendations = getReadingRecommendations();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f7f2ea] pt-24 text-[#191512]">
        <section className="px-5 py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3 text-[#9f4f35]">
                <BookOpenCheck className="h-5 w-5" />
                <span className="font-inter text-sm font-semibold uppercase tracking-wide">
                  Lectures
                </span>
              </div>
              <h1 className="font-playfair text-5xl font-bold leading-tight md:text-7xl">
                Lire la Jordanie pendant qu'on la traverse.
              </h1>
              <p className="mt-6 max-w-3xl font-inter text-lg leading-8 text-[#64574d]">
                Un livre a vraiment accompagne le voyage: le recit d'Abdallah II, entre souvenirs personnels,
                diplomatie et histoire recente. Le reste de la bibliotheque prolonge cette envie de comprendre le pays
                au-dela des images.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <img
                src={image("PXL_20250805_052621633.PANO")}
                alt="Le Siq a Petra"
                className="h-96 w-full rounded-lg object-cover"
                loading="eager"
              />
              <img
                src={image("PXL_20250807_162104366.PANO")}
                alt="Wadi Rum au coucher du soleil"
                className="mt-12 h-96 w-full rounded-lg object-cover"
                loading="eager"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <img
            src={image("PXL_20250806_183501196.NIGHT")}
            alt="Petra by Night"
            className="h-[420px] w-full rounded-lg object-cover shadow-2xl md:h-[560px]"
            loading="lazy"
          />
          <div>
            <p className="font-inter text-sm font-semibold uppercase tracking-wide text-[#9f4f35]">
              Comprendre
            </p>
            <h2 className="mt-4 font-playfair text-4xl font-bold leading-tight md:text-6xl">
              Un pays se lit aussi entre deux étapes.
            </h2>
            <p className="mt-6 font-inter text-lg leading-8 text-[#64574d]">
              Les photos gardent les couleurs du voyage. Les livres, eux, replacent Petra, Amman, Salt ou le Wadi Rum
              dans une histoire plus large: royaute hachemite, frontieres fragiles, diplomatie, culture bedouine et
              cuisine du Moyen-Orient.
            </p>
          </div>
        </section>

        <section className="bg-[#18130f] px-5 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div className="mx-auto w-full max-w-sm">
              <div className="relative aspect-[2/3] rounded-lg bg-[#f4eadb] p-8 text-[#191512] shadow-2xl">
                <div className="absolute inset-y-0 left-0 w-4 rounded-l-lg bg-[#9f4f35]" />
                <p className="font-inter text-xs font-semibold uppercase tracking-wide text-[#9f4f35]">
                  Abdallah II de Jordanie
                </p>
                <h2 className="mt-8 font-playfair text-5xl font-bold leading-tight">
                  La Dernière Chance
                </h2>
                <p className="mt-6 font-inter text-sm font-semibold uppercase tracking-wide text-[#64574d]">
                  La recherche de la paix à l'heure des périls
                </p>
                <div className="absolute bottom-8 left-8 right-8 border-t border-[#d6c5ad] pt-5 font-inter text-sm text-[#64574d]">
                  Récit politique publié en 2011
                </div>
              </div>
            </div>

            <div>
              <p className="font-inter text-sm font-semibold uppercase tracking-wide text-[#d2a36f]">
                Le livre du voyage
              </p>
              <h2 className="mt-4 font-playfair text-4xl font-bold leading-tight md:text-6xl">
                Comprendre la Jordanie depuis le palais, mais aussi depuis la route.
              </h2>
              <p className="mt-6 font-inter text-lg leading-8 text-white/75">
                Ce n'est pas seulement un livre sur la paix au Moyen-Orient. C'est aussi une porte d'entree vers la
                position unique de la Jordanie: un royaume stable au milieu de lignes de fracture, oblige de composer
                avec l'histoire palestinienne, l'Irak, Israel, la Syrie, les allies occidentaux et le monde arabe.
              </p>
              <p className="mt-5 font-inter text-lg leading-8 text-white/75">
                Le recit s'arrete un peu tot, au debut des annees 2010, mais il donne une profondeur particuliere au
                voyage. A lire avant de partir, ou pendant, quand les paysages deviennent aussi une carte politique.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-10 grid gap-6 md:grid-cols-[0.75fr_1.25fr] md:items-end">
            <div>
              <p className="font-inter text-sm font-semibold uppercase tracking-wide text-[#9f4f35]">
                Bibliothèque
              </p>
              <h2 className="mt-4 font-playfair text-4xl font-bold leading-tight md:text-5xl">
                Pistes de lecture
              </h2>
            </div>
            <p className="font-inter text-lg leading-8 text-[#64574d]">
              Une selection courte, pas une bibliographie exhaustive: un livre lu sur place, puis quelques pistes pour
              relier les souvenirs aux grandes histoires du pays.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {recommendations.map((book) => (
              <BookRecommendationCard key={book.id} book={book} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

const BookRecommendationCard = memo(
  ({ book }: { book: BookRecommendation }) => {
    return (
      <article className="flex min-h-[360px] flex-col rounded-lg bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center justify-between gap-4">
          <span className="font-inter text-xs font-semibold uppercase tracking-wide text-[#9f4f35]">
            {book.type}
          </span>
          <span className="flex gap-1 text-[#b9573c]" aria-label={`Note ${book.rating} sur 5`}>
            {Array.from({ length: book.rating }, (_, index) => (
              <Star key={index} className="h-4 w-4 fill-current" />
            ))}
          </span>
        </div>

        <h3 className="font-playfair text-3xl font-semibold leading-tight">{book.title}</h3>
        <p className="mt-2 font-inter text-sm font-medium text-[#64574d]">{book.author}</p>
        <p className="mt-5 font-inter text-sm leading-7 text-[#64574d]">{book.description}</p>
        <p className="mt-4 border-t border-[#eadfd4] pt-4 font-inter text-sm leading-7 text-[#64574d]">
          {book.why}
        </p>

        {isUsableLink(book.amazon) && (
          <Button asChild variant="outline" className="mt-auto rounded-full">
            <a href={book.amazon} target="_blank" rel="noopener noreferrer">
              Voir en ligne
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}
      </article>
    );
  },
  (prevProps, nextProps) => prevProps.book.id === nextProps.book.id,
);

export default Recommendations;
