import { memo } from "react";
import { Button } from "@/components/ui/button";
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
                Quelques portes d'entree pour prolonger le voyage.
              </h1>
              <p className="mt-6 max-w-3xl font-inter text-lg leading-8 text-[#64574d]">
                Cette page reste secondaire: elle rassemble des pistes pour comprendre Petra, le Wadi Rum, les Bedouins,
                la cuisine et le contexte du pays.
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
              Les livres viennent apres les photos.
            </h2>
            <p className="mt-6 font-inter text-lg leading-8 text-[#64574d]">
              L'album porte le souvenir. Les lectures donnent un peu de profondeur: histoire nabateenne, culture
              bedouine, geopolitique et cuisine du Moyen-Orient.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-10 grid gap-6 md:grid-cols-[0.75fr_1.25fr] md:items-end">
            <div>
              <p className="font-inter text-sm font-semibold uppercase tracking-wide text-[#9f4f35]">
                Bibliotheque
              </p>
              <h2 className="mt-4 font-playfair text-4xl font-bold leading-tight md:text-5xl">
                Pistes de lecture
              </h2>
            </div>
            <p className="font-inter text-lg leading-8 text-[#64574d]">
              On pourra remplacer les references plus tard si tu as tes propres livres. La mise en page est maintenant
              raccord avec le reste du site.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {recommendations.map((book) => (
              <BookRecommendationCard key={book.id} book={book} />
            ))}
          </div>
        </section>
      </main>
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
