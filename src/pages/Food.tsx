import { memo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FoodExperience, getFoodExperiences } from "@/data/foodExperiences";
import { MapPin, Star, Utensils } from "lucide-react";

const image = (name: string) => `${import.meta.env.BASE_URL}jordan/selected-v1/${name}.webp`;

const heroPhotos = [
  image("PXL_20250731_110642120"),
  image("PXL_20250802_100239818.MP"),
  image("PXL_20250802_084201064.MP"),
];

const foodImagesById: Record<string, string> = {
  mansaf: image("PXL_20250802_100239818.MP"),
  "falafel-houmous": image("PXL_20250731_110649692"),
  grillades: image("PXL_20250731_110912629"),
  "mint-tea-arabic-coffee": image("PXL_20250802_103518881"),
};

const Food = () => {
  const experiences = getFoodExperiences();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f7f2ea] pt-24 text-[#191512]">
        <section className="px-5 py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3 text-[#9f4f35]">
                <Utensils className="h-5 w-5" />
                <span className="font-inter text-sm font-semibold uppercase tracking-wide">
                  Gastronomie
                </span>
              </div>
              <h1 className="font-playfair text-5xl font-bold leading-tight md:text-7xl">
                Manger en Jordanie, c'est déjà voyager.
              </h1>
              <p className="mt-6 max-w-3xl font-inter text-lg leading-8 text-[#64574d]">
                En Jordanie, la table arrive souvent comme une halte bienvenue : du pain encore chaud, des assiettes qui
                se multiplient, le thé qui circule, et cette impression que le repas prolonge la route.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {heroPhotos.map((photo, index) => (
                <img
                  key={photo}
                  src={photo}
                  alt="Repas et restaurant en Jordanie"
                  className={`h-80 w-full rounded-lg object-cover ${index === 1 ? "mt-12" : ""}`}
                  loading="eager"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <img
            src={image("PXL_20250731_110642120")}
            alt="Table de mezze à Gerasa"
            className="h-[360px] w-full rounded-lg object-cover shadow-2xl md:h-[560px]"
            loading="lazy"
          />
          <div>
            <p className="font-inter text-sm font-semibold uppercase tracking-wide text-[#9f4f35]">
              À table
            </p>
            <h2 className="mt-4 font-playfair text-4xl font-bold leading-tight md:text-6xl">
              Le souvenir passe autant par l'assiette que par les sites.
            </h2>
            <p className="mt-6 font-inter text-lg leading-8 text-[#64574d]">
              Après les pierres de Jerash, les ruelles de Salt ou les heures de chaleur, il y a ces tables simples où
              tout se pose au milieu. On pioche, on partage, on ralentit. La cuisine devient une autre manière de
              comprendre le pays.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-10 grid gap-6 md:grid-cols-[0.75fr_1.25fr] md:items-end">
            <div>
              <p className="font-inter text-sm font-semibold uppercase tracking-wide text-[#9f4f35]">
                Saveurs
              </p>
              <h2 className="mt-4 font-playfair text-4xl font-bold leading-tight md:text-5xl">
                Des assiettes qui racontent l'hospitalité
              </h2>
            </div>
            <p className="font-inter text-lg leading-8 text-[#64574d]">
              Rien de solennel ici : des repas de route, des tables familiales, des verres de thé, des grillades, du
              houmous, du mansaf. Juste ce qu'il faut pour retrouver le goût du voyage.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {experiences.map((experience) => (
              <FoodExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </section>

        <section className="bg-[#18130f] px-5 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="font-inter text-sm font-semibold uppercase tracking-wide text-[#d2a36f]">
                Restaurants
              </p>
              <h2 className="mt-4 font-playfair text-4xl font-bold leading-tight md:text-6xl">
                Le goût du voyage tient aussi dans les pauses.
              </h2>
              <p className="mt-6 font-inter text-lg leading-8 text-white/70">
                Un café à Salt, une bière fraîche après une longue journée, un repas improvisé quand la chaleur retombe :
                ce sont souvent ces moments plus simples qui restent, entre deux paysages immenses.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <img
                src={image("PXL_20250810_163422281")}
                alt="Bière Petra en Jordanie"
                className="h-72 w-full rounded-lg object-cover"
                loading="lazy"
              />
              <img
                src={image("PXL_20250802_103518881")}
                alt="Thé et café à Salt"
                className="mt-10 h-72 w-full rounded-lg object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

const FoodExperienceCard = memo(
  ({ experience }: { experience: FoodExperience }) => {
    const photo = foodImagesById[experience.id] ?? image("PXL_20250731_110642120");

    return (
      <article className="overflow-hidden rounded-lg bg-white shadow-sm">
        <img
          src={photo}
          alt={experience.name}
          className="h-72 w-full object-cover"
          loading="lazy"
        />
        <div className="p-6">
          <div className="mb-4 flex flex-wrap items-center gap-3 font-inter text-xs font-semibold uppercase tracking-wide text-[#9f4f35]">
            <span>{experience.type}</span>
            <span>{experience.price}</span>
          </div>
          <h3 className="font-playfair text-3xl font-semibold">{experience.name}</h3>
          <div className="mt-3 flex items-center gap-2 font-inter text-sm text-[#64574d]">
            <MapPin className="h-4 w-4" />
            <span>{experience.location}</span>
          </div>
          <div className="mt-3 flex gap-1 text-[#b9573c]" aria-label={`Note ${experience.rating} sur 5`}>
            {Array.from({ length: experience.rating }, (_, index) => (
              <Star key={index} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <p className="mt-5 font-inter text-sm leading-7 text-[#64574d]">{experience.description}</p>
          <p className="mt-4 border-t border-[#eadfd4] pt-4 font-inter text-sm leading-7 text-[#64574d]">
            {experience.experience}
          </p>
        </div>
      </article>
    );
  },
  (prevProps, nextProps) => prevProps.experience.id === nextProps.experience.id,
);

export default Food;
