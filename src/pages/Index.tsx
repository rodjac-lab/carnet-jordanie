import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Route, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const image = (name: string) => `${import.meta.env.BASE_URL}jordan/selected-v1/${name}.webp`;

const heroDesktopImage = image("PXL_20250805_064921907");
const heroMobileImage = image("PXL_20250805_055643148");
const wadiRumBalloonImage = image("PXL_20250808_033623612.PANO");
const ammanDinnerImage = image("PXL_20250801_113007572");
const saltMarketImage = image("PXL_20250802_084201064.MP");
const ammanStreetImage = image("PXL_20250812_174127188");
const petraNightImage = image("PXL_20250806_183501196.NIGHT");

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f7f2ea] text-[#191512]">
      <Header />

      <section className="relative min-h-[94vh] overflow-hidden">
        <picture>
          <source media="(min-width: 768px)" srcSet={heroDesktopImage} />
          <img
            src={heroMobileImage}
            alt="Petra"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,7,5,0.20)_0%,rgba(8,7,5,0.02)_42%,rgba(8,7,5,0.50)_100%)] md:bg-[linear-gradient(90deg,rgba(8,7,5,0.34)_0%,rgba(8,7,5,0.12)_45%,rgba(8,7,5,0.04)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f7f2ea]/80 via-[#f7f2ea]/25 to-transparent" />

        <div className="relative z-10 flex min-h-[94vh] items-end px-5 pb-8 pt-24 md:pb-12">
          <div className="mx-auto flex w-full max-w-7xl text-white">
            <div className="max-w-4xl drop-shadow-2xl md:max-w-xl lg:max-w-2xl">
              <p className="mb-3 font-inter text-xs font-semibold uppercase tracking-wide text-white/85">
                31 juillet - 12 aout 2025
              </p>
              <h1 className="font-playfair text-4xl font-bold leading-[0.95] tracking-normal sm:text-5xl md:text-5xl lg:text-6xl">
                Carnet de Jordanie
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20 text-center md:py-24">
        <p className="font-inter text-sm font-semibold uppercase tracking-wide text-[#9f4f35]">
          31 juillet - 12 aout 2025
        </p>
        <h2 className="mt-5 font-playfair text-4xl font-bold leading-tight md:text-6xl">
          Deux semaines de pierre, de desert, de chaleur et de souvenirs partages.
        </h2>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div>
          <div className="mb-5 flex items-center gap-3 text-[#9f4f35]">
            <Sparkles className="h-5 w-5" />
            <span className="font-inter text-sm font-semibold uppercase tracking-wide">Le ton du voyage</span>
          </div>
          <h2 className="font-playfair text-5xl font-bold leading-tight md:text-6xl">
            La Jordanie en grand, sans perdre les petits details.
          </h2>
          <p className="mt-6 font-inter text-lg leading-8 text-[#64574d]">
            Petra, Dana et Wadi Rum donnent l'ampleur. Les repas, les rues, les pauses et les visages ramènent le voyage vers ce qu'on a vraiment vécu ensemble.
          </p>
          <Button asChild className="mt-8 rounded-full bg-[#191512] px-7 text-white hover:bg-[#2a211b]">
            <Link to="/gallery">
              Ouvrir l'album
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div>
          <img
            src={wadiRumBalloonImage}
            alt="Vue aerienne du Wadi Rum depuis la montgolfiere"
            className="h-[340px] w-full rounded-lg object-cover shadow-2xl md:h-[560px]"
            loading="lazy"
          />
        </div>
      </section>

      <section className="bg-[#18130f] px-5 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={ammanDinnerImage}
              alt="Repas partage en Jordanie"
              className="h-72 w-full rounded-lg object-cover"
              loading="lazy"
            />
            <img
              src={saltMarketImage}
              alt="Marche anime a Salt"
              className="mt-14 h-72 w-full rounded-lg object-cover"
              loading="lazy"
            />
            <img
              src={petraNightImage}
              alt="Petra de nuit"
              className="col-span-2 h-80 w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <div className="mb-5 flex items-center gap-3 text-[#d2a36f]">
              <Route className="h-5 w-5" />
              <span className="font-inter text-sm font-semibold uppercase tracking-wide">Contrastes jordaniens</span>
            </div>
            <h2 className="font-playfair text-5xl font-bold leading-tight md:text-6xl">
              Un voyage entre histoire, desert, tables et rencontres.
            </h2>
            <p className="mt-6 font-inter text-lg leading-8 text-white/70">
              La Jordanie passe d'une cite antique a un marche vivant, d'un repas partage a la nuit de Petra. C'est cette variete qui donne au voyage son rythme.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-24 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <img
          src={ammanStreetImage}
          alt="Rue d'Amman le soir"
          className="h-[520px] w-full rounded-lg object-cover"
          loading="lazy"
        />
        <div className="md:pl-8">
          <div className="mb-5 flex items-center gap-3 text-[#9f4f35]">
            <Camera className="h-5 w-5" />
            <span className="font-inter text-sm font-semibold uppercase tracking-wide">Album photo</span>
          </div>
          <h2 className="font-playfair text-5xl font-bold leading-tight">
            La Jordanie moderne apparait aussi dans ses villes.
          </h2>
          <p className="mt-6 font-inter text-lg leading-8 text-[#64574d]">
            Amman, Salt et les rues du retour ajoutent une autre image du pays: commerces ouverts tard, restaurants, circulation, vitrines et scenes de ville apres les grands paysages.
          </p>
          <Button asChild className="mt-8 rounded-full bg-[#191512] px-7 text-white hover:bg-[#2a211b]">
            <Link to="/gallery">
              Voir l'album
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
