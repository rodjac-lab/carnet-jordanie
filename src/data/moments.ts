export type JordanMoment = {
  slug: string;
  title: string;
  eyebrow: string;
  dates: string;
  place: string;
  summary: string;
  cover: string;
  images: string[];
};

const image = (name: string) => `${import.meta.env.BASE_URL}jordan/selected-v1/${name}.webp`;

export const jordanMoments: JordanMoment[] = [
  {
    slug: "amman",
    title: "Arriver a Amman",
    eyebrow: "Ville",
    dates: "1 et 12 aout 2025",
    place: "Amman",
    summary: "Premieres vues sur la ville, citadelle, marches et derniers repas avant le retour.",
    cover: image("PXL_20250801_071850215"),
    images: [
      image("PXL_20250801_071850215"),
      image("PXL_20250801_073158965"),
      image("PXL_20250801_113007572"),
      image("PXL_20250801_060700469"),
      image("PXL_20250812_174127188"),
    ],
  },
  {
    slug: "jerash-ajloun",
    title: "Jerash et Ajloun",
    eyebrow: "Nord antique",
    dates: "31 juillet 2025",
    place: "Jerash, Ajloun",
    summary: "Colonnes romaines, theatre, pierre claire et premiere grande plongee dans l'histoire jordanienne.",
    cover: image("PXL_20250731_074208069"),
    images: [
      image("PXL_20250731_070457590"),
      image("PXL_20250731_073740899"),
      image("PXL_20250731_080220369"),
      image("PXL_20250731_080922749"),
      image("PXL_20250731_094346725"),
      image("PXL_20250731_095148298"),
    ],
  },
  {
    slug: "chateaux-desert",
    title: "Chateaux du desert",
    eyebrow: "Route",
    dates: "1 aout 2025",
    place: "Est jordanien",
    summary: "Une journee de route, de fresques et de petits palais poses dans le mineral.",
    cover: image("PXL_20250801_130723270"),
    images: [
      image("PXL_20250801_111830966"),
      image("PXL_20250801_113007572"),
      image("PXL_20250801_130723270"),
      image("PXL_20250801_135618644"),
      image("PXL_20250801_130047123"),
      image("PXL_20250801_134028299"),
    ],
  },
  {
    slug: "nebo-madaba",
    title: "Bethanie, Madaba et le mont Nebo",
    eyebrow: "Mosaiques",
    dates: "2, 3, 10 et 11 aout 2025",
    place: "Vallee du Jourdain, Madaba, Nebo",
    summary: "Un chapitre plus calme, entre lieux bibliques, mosaiques et panoramas sur la vallee.",
    cover: image("PXL_20250803_091109155.PANO"),
    images: [
      image("PXL_20250802_130052563"),
      image("PXL_20250803_090646065"),
      image("PXL_20250802_130950653"),
      image("PXL_20250802_124549004"),
      image("PXL_20250803_091109155.PANO"),
    ],
  },
  {
    slug: "dana",
    title: "Dana, falaise et lumiere du soir",
    eyebrow: "Nature",
    dates: "3 et 4 aout 2025",
    place: "Dana",
    summary: "La transition vers le sud: reliefs secs, sentiers, marche avec guide et lumiere basse.",
    cover: image("PXL_20250803_160804223"),
    images: [
      image("PXL_20250804_052159339"),
      image("PXL_20250804_060430293"),
      image("PXL_20250803_170515623"),
      image("PXL_20250804_063232226"),
      image("PXL_20250804_064521182"),
    ],
  },
  {
    slug: "petra-siq",
    title: "Petra, le Siq et le Tresor",
    eyebrow: "Petra",
    dates: "5 aout 2025",
    place: "Wadi Musa",
    summary: "Le coeur du voyage: entree dans le Siq, facades nabateennes et premiere apparition du Tresor.",
    cover: image("PXL_20250805_055643148"),
    images: [
      image("PXL_20250805_052136393.PANO"),
      image("PXL_20250805_043801562"),
      image("PXL_20250805_052621633.PANO"),
      image("PXL_20250805_055643148"),
      image("PXL_20250805_060005190"),
    ],
  },
  {
    slug: "petra-night",
    title: "Petra, hauteurs et nuit",
    eyebrow: "Monastere",
    dates: "6 aout 2025",
    place: "Petra",
    summary: "Deuxieme jour a Petra, plus vertical, puis le site aux bougies apres la tombee de la nuit.",
    cover: image("PXL_20250806_183501196.NIGHT"),
    images: [
      image("PXL_20250806_071811368"),
      image("PXL_20250806_160432800"),
      image("PXL_20250806_080535131"),
      image("PXL_20250806_083428846"),
      image("PXL_20250806_181156368.MP"),
      image("PXL_20250806_183501196.NIGHT"),
    ],
  },
  {
    slug: "wadi-rum",
    title: "Wadi Rum, piste et camp",
    eyebrow: "Desert",
    dates: "7 aout 2025",
    place: "Wadi Rum",
    summary: "Pick-up dans le sable, falaises rouges, campement et coucher de soleil.",
    cover: image("PXL_20250807_162104366.PANO"),
    images: [
      image("PXL_20250807_150121404.PANO"),
      image("PXL_20250807_153625118"),
      image("PXL_20250807_183658806"),
      image("PXL_20250807_155740945.PANO"),
      image("PXL_20250807_162104366.PANO"),
    ],
  },
  {
    slug: "ballon-mer",
    title: "Du ballon a la Mer Morte",
    eyebrow: "Final",
    dates: "8 et 10 aout 2025",
    place: "Wadi Rum, Aqaba, Mer Morte",
    summary: "Le desert vu d'en haut, puis une derniere sequence d'eau, de chaleur et de sel.",
    cover: image("PXL_20250808_033623612.PANO"),
    images: [
      image("PXL_20250808_033623612.PANO"),
      image("PXL_20250808_022928539"),
      image("PXL_20250808_023922492.MP"),
      image("PXL_20250808_031112019"),
      image("PXL_20250810_143740304"),
      image("PXL_20250808_101617444.PORTRAIT"),
      image("PXL_20250810_143641414"),
      image("PXL_20250810_100021159"),
    ],
  },
];
