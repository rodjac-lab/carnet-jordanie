export interface FoodExperience {
  id: string;
  name: string;
  type: string;
  description: string;
  experience: string;
  rating: number;
  location: string;
  price: string;
}

export const foodExperiences: FoodExperience[] = [
  {
    id: 'mansaf',
    name: 'Mansaf',
    type: 'Plat national',
    description:
      "Le grand plat de partage jordanien : du riz, une sauce au yaourt fermenté, une viande longuement préparée, et cette générosité qui remplit la table autant que les assiettes.",
    experience:
      "À Salt, le mansaf avait quelque chose de cérémoniel sans être guindé. On se souvient de la nappe, des plats autour, des gestes simples et de cette cuisine qui invite tout le monde au même rythme.",
    rating: 5,
    location: 'Salt',
    price: 'Modéré',
  },
  {
    id: 'falafel-houmous',
    name: 'Houmous et mezze',
    type: 'Mezze',
    description:
      "Houmous crémeux, salades fraîches, légumes, pain chaud, petites assiettes colorées : le genre de table où l'on commence par goûter un peu, puis où l'on revient sans cesse.",
    experience:
      "À Gerasa, après les colonnes et la poussière claire du site antique, ce repas avait tout du refuge : simple, généreux, vivant. Une pause qui remet de l'énergie dans toute la journée.",
    rating: 4,
    location: 'Gerasa',
    price: 'Très abordable',
  },
  {
    id: 'grillades',
    name: 'Grillades',
    type: 'Plat partagé',
    description:
      "Des grillades posées au centre, du pain pour attraper les morceaux, quelques garnitures, des salades : une cuisine directe, franche, faite pour être partagée.",
    experience:
      "Ces repas n'ont pas besoin d'être mis en scène. Ils disent surtout les restaurants simples, les conversations qui continuent, les plats qui circulent et les journées qui se terminent bien.",
    rating: 5,
    location: 'Gerasa',
    price: 'Abordable',
  },
  {
    id: 'mint-tea-arabic-coffee',
    name: 'Thé à la menthe et café arabe',
    type: 'Boissons',
    description:
      "Thé brûlant, menthe, café à la cardamome, petits verres posés sur la table : en Jordanie, boire quelque chose ensemble fait déjà partie de l'accueil.",
    experience:
      "À Salt comme ailleurs, le thé et le café marquent les pauses. On s'assoit quelques minutes, on regarde la rue, on reprend souffle. Le voyage continue, mais plus doucement.",
    rating: 4,
    location: 'Partout',
    price: 'Très abordable',
  },
];

export const getFoodExperiences = (): FoodExperience[] =>
  foodExperiences.map((experience) => ({ ...experience }));
