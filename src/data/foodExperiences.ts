import type { FoodExperience as BaseFoodExperience, ContentStatus } from '@/types/content';
import { EDITOR_STORAGE_KEYS } from '@/features/editor/constants';
import { loadPublicationState, resolvePublicationStatus } from '@/features/publishing/publicationState';
import { logger } from '@/lib/logger';

export type FoodExperience = BaseFoodExperience;

export const foodExperiences: FoodExperience[] = [
  {
    id: 'mansaf',
    name: 'Mansaf',
    type: 'Plat national',
    description:
      "Le grand plat de partage jordanien: du riz, une sauce au yaourt fermente, une viande longuement preparee, et cette generosite qui remplit la table autant que les assiettes.",
    experience:
      "A Salt, le mansaf avait quelque chose de ceremoniel sans etre guinde. On se souvient de la nappe, des plats autour, des gestes simples et de cette cuisine qui invite tout le monde au meme rythme.",
    rating: 5,
    location: 'Salt',
    price: 'Modéré',
  },
  {
    id: 'falafel-houmous',
    name: 'Houmous et mezze',
    type: 'Mezze',
    description:
      "Houmous cremeux, salades fraiches, legumes, pain chaud, petites assiettes colorees: le genre de table ou l'on commence par gouter un peu, puis ou l'on revient sans cesse.",
    experience:
      "A Gerasa, apres les colonnes et la poussiere claire du site antique, ce repas avait tout du refuge: simple, genereux, vivant. Une pause qui remet de l'energie dans toute la journee.",
    rating: 4,
    location: 'Gerasa',
    price: 'Très abordable',
  },
  {
    id: 'grillades',
    name: 'Grillades',
    type: 'Plat partagé',
    description:
      "Des grillades posees au centre, du pain pour attraper les morceaux, quelques garnitures, des salades: une cuisine directe, franche, faite pour etre partagee.",
    experience:
      "Ces repas n'ont pas besoin d'etre mis en scene. Ils disent surtout les restaurants simples, les conversations qui continuent, les plats qui circulent et les journees qui se terminent bien.",
    rating: 5,
    location: 'Gerasa',
    price: 'Abordable',
  },
  {
    id: 'mint-tea-arabic-coffee',
    name: 'Thé à la menthe et café arabe',
    type: 'Boissons',
    description:
      "The brulant, menthe, cafe a la cardamome, petits verres poses sur la table: en Jordanie, boire quelque chose ensemble fait deja partie de l'accueil.",
    experience:
      "A Salt comme ailleurs, le the et le cafe marquent les pauses. On s'assoit quelques minutes, on regarde la rue, on reprend souffle. Le voyage continue, mais plus doucement.",
    rating: 4,
    location: 'Partout',
    price: 'Très abordable',
  },
];

const FOOD_STORAGE_KEY = EDITOR_STORAGE_KEYS.food;
const isBrowser = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

type FoodExperienceStatusFilter = ContentStatus | 'all';

interface GetFoodExperiencesOptions {
  status?: FoodExperienceStatusFilter;
}

const canonicalFoodIds = new Set(foodExperiences.map((experience) => experience.id));

const sanitizeStoredExperiences = (raw: unknown): FoodExperience[] => {
  if (!Array.isArray(raw)) {
    return [];
  }

  return raw
    .filter((item): item is FoodExperience => {
      if (typeof item !== 'object' || item === null) {
        return false;
      }

      const candidate = item as Partial<FoodExperience>;
      return typeof candidate.id === 'string';
    })
    .map((experience) => ({ ...experience }));
};

const loadStoredFoodExperiences = (): FoodExperience[] => {
  if (!isBrowser) {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(FOOD_STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    return sanitizeStoredExperiences(parsed);
  } catch (error) {
    logger.warn('⚠️ Impossible de charger les expériences culinaires personnalisées', error);
    return [];
  }
};

const shouldInclude = (status: ContentStatus, filter: FoodExperienceStatusFilter): boolean => {
  if (filter === 'all') {
    return true;
  }

  return status === filter;
};

export const getFoodExperiences = (options?: GetFoodExperiencesOptions): FoodExperience[] => {
  const filter = options?.status ?? 'published';

  if (!isBrowser) {
    if (filter === 'draft') {
      return [];
    }
    return foodExperiences.map((experience) => ({ ...experience }));
  }

  const storedExperiences = loadStoredFoodExperiences();
  const storedMap = new Map(storedExperiences.map((experience) => [experience.id, experience]));
  const publicationState = loadPublicationState();

  const results: FoodExperience[] = [];

  foodExperiences.forEach((experience) => {
    const override = storedMap.get(experience.id);
    const candidate = override ?? experience;
    const status = resolvePublicationStatus(publicationState, 'food', experience.id, {
      defaultStatus: 'published',
    });

    if (shouldInclude(status, filter)) {
      results.push({ ...candidate });
    }
  });

  storedExperiences.forEach((experience) => {
    if (canonicalFoodIds.has(experience.id)) {
      return;
    }

    const status = resolvePublicationStatus(publicationState, 'food', experience.id, {
      defaultStatus: 'draft',
    });

    if (shouldInclude(status, filter)) {
      results.push({ ...experience });
    }
  });

  return results;
};
